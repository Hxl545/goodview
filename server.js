const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");

const ROOT = __dirname;
const DATA_DIRECTORY = path.join(ROOT, ".data");
const DATA_FILE = path.join(DATA_DIRECTORY, "metrics.json");
const MAX_BODY_SIZE = 1024;
const MAX_INCREMENT = 10000;
const EVENTS = [
  "backNavigation",
  "searchCorrections",
  "formCorrections",
  "dialogDismissals",
];
const CONTENT_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function emptyMetrics() {
  return { counts: Object.fromEntries(EVENTS.map((event) => [event, 0])) };
}

async function readMetrics() {
  try {
    const stored = JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
    if (
      !stored ||
      typeof stored.counts !== "object" ||
      Array.isArray(stored.counts)
    ) {
      throw new Error("The metrics data file has an invalid format.");
    }
    const metrics = emptyMetrics();
    for (const event of EVENTS) {
      const count = stored.counts[event];
      if (!Number.isSafeInteger(count) || count < 0) {
        throw new Error(`The metrics data file has an invalid ${event} count.`);
      }
      metrics.counts[event] = count;
    }
    return metrics;
  } catch (error) {
    if (error.code === "ENOENT") return emptyMetrics();
    throw error;
  }
}

let writeQueue = Promise.resolve();
function updateMetrics(increments) {
  const update = writeQueue.then(async () => {
    const metrics = await readMetrics();
    for (const [event, increment] of Object.entries(increments)) {
      const total = metrics.counts[event] + increment;
      if (!Number.isSafeInteger(total)) {
        throw new RangeError("The requested count exceeds the supported range.");
      }
      metrics.counts[event] = total;
    }
    await fs.mkdir(DATA_DIRECTORY, { recursive: true });
    const temporaryFile = `${DATA_FILE}.tmp`;
    await fs.writeFile(temporaryFile, JSON.stringify(metrics, null, 2), "utf8");
    await fs.rename(temporaryFile, DATA_FILE);
    return metrics;
  });
  writeQueue = update.then(
    () => undefined,
    () => undefined,
  );
  return update;
}

function sendJson(response, status, body) {
  response.writeHead(status, {
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
    "X-Content-Type-Options": "nosniff",
  });
  response.end(JSON.stringify(body));
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    let tooLarge = false;
    request.on("data", (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_SIZE) {
        tooLarge = true;
        chunks.length = 0;
      } else if (!tooLarge) {
        chunks.push(chunk);
      }
    });
    request.on("end", () => {
      if (tooLarge) {
        reject(Object.assign(new Error("Request body is too large."), { status: 413 }));
      } else {
        resolve(Buffer.concat(chunks).toString("utf8"));
      }
    });
    request.on("error", reject);
  });
}

function validateIncrements(body) {
  const parsed = JSON.parse(body);
  if (
    !parsed ||
    !parsed.counts ||
    typeof parsed.counts !== "object" ||
    Array.isArray(parsed.counts)
  ) {
    throw Object.assign(new Error("Provide a counts object."), { status: 400 });
  }
  const entries = Object.entries(parsed.counts);
  if (entries.length === 0 || entries.some(([event]) => !EVENTS.includes(event))) {
    throw Object.assign(new Error("The request contains an unsupported metric."), { status: 400 });
  }
  let total = 0;
  for (const [, increment] of entries) {
    if (!Number.isSafeInteger(increment) || increment < 1 || increment > MAX_INCREMENT) {
      throw Object.assign(new Error("Metric increments must be whole numbers from 1 to 10000."), {
        status: 400,
      });
    }
    total += increment;
  }
  if (total > MAX_INCREMENT) {
    throw Object.assign(new Error("The combined increment is too large."), { status: 400 });
  }
  return Object.fromEntries(entries);
}

async function handleApi(request, response, url) {
  if (url.pathname !== "/api/metrics") {
    sendJson(response, 404, { error: "Not found." });
    return;
  }
  if (request.method === "GET") {
    await writeQueue;
    sendJson(response, 200, await readMetrics());
    return;
  }
  if (request.method !== "POST") {
    response.writeHead(405, { Allow: "GET, POST" });
    response.end();
    return;
  }
  if (!/^application\/json(?:\s*;|$)/i.test(request.headers["content-type"] || "")) {
    sendJson(response, 415, { error: "Content-Type must be application/json." });
    return;
  }
  try {
    const body = await readRequestBody(request);
    const increments = validateIncrements(body);
    sendJson(response, 200, await updateMetrics(increments));
  } catch (error) {
    const status = error.status || (error instanceof SyntaxError ? 400 : 500);
    sendJson(response, status, {
      error: status < 500 ? error.message : "Unable to update metrics.",
    });
    if (status >= 500) {
      console.error("Metrics update failed:", error);
    }
  }
}

async function handleStatic(request, response, url) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end();
    return;
  }
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch (error) {
    response.writeHead(400);
    response.end();
    return;
  }
  if (pathname.startsWith("/.data/")) {
    response.writeHead(404);
    response.end();
    return;
  }
  const relativePath = pathname === "/" ? "index.html" : pathname.slice(1);
  const filePath = path.resolve(ROOT, relativePath);
  if (filePath !== ROOT && !filePath.startsWith(`${ROOT}${path.sep}`)) {
    response.writeHead(404);
    response.end();
    return;
  }
  const contentType = CONTENT_TYPES[path.extname(filePath).toLowerCase()];
  if (!contentType) {
    response.writeHead(404);
    response.end();
    return;
  }
  try {
    const contents = await fs.readFile(filePath);
    response.writeHead(200, {
      "Cache-Control": "no-cache",
      "Content-Length": contents.length,
      "Content-Type": contentType,
      "X-Content-Type-Options": "nosniff",
    });
    response.end(request.method === "HEAD" ? undefined : contents);
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "EISDIR") {
      response.writeHead(404);
      response.end();
      return;
    }
    throw error;
  }
}

const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";
if (!Number.isInteger(port) || port < 0 || port > 65535) {
  throw new Error("PORT must be a number from 0 to 65535.");
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${host}`);
  const handler = url.pathname.startsWith("/api/")
    ? handleApi(request, response, url)
    : handleStatic(request, response, url);
  handler.catch((error) => {
    console.error("Request failed:", error);
    if (!response.headersSent) {
      sendJson(response, 500, { error: "The request could not be completed." });
    } else {
      response.destroy();
    }
  });
});

server.listen(port, host, () => {
  const address = server.address();
  console.log(`GoodView is running at http://${host}:${address.port}`);
});
