/* ---------- DATA (edit freely; swap `img` for real thumbnails later) ---------- */
const I = {
  home: '<path d="M3 11l9-8 9 8v10H3z"/>',
  watch: '<circle cx="12" cy="12" r="9"/><path d="M10 8l6 4-6 4z"/>',
  lib: '<path d="M4 4v16M9 4v16M14 6l5 14"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  mark: '<path d="M6 3h12v18l-6-4-6 4z"/>',
  vol: '<path d="M4 9v6h4l5 4V5L8 9zM16 9c2 2 2 4 0 6"/>',
  cc: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 10h4M7 14h6M14 10h3"/>',
  fs: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
  check: '<path d="M5 12l5 5 9-10"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 015 0c0 2-2.5 2-2.5 4M12 17v.5"/>',
  play: '<path d="M7 4l13 8-13 8z"/>',
};
const ic = (n, z = 16) =>
  `<svg class="ic" width="${z}" height="${z}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${I[n]}</svg>`;
const thp = (v) =>
  th(v, false).replace(
    /<\/div>$/,
    '<i class="pg" style="width:' + (30 + ((v.id * 9) % 45)) + '%"></i></div>',
  );
const CH = {
  HG: { n: "Home & Garden", d: "Practical projects", c: "#3f5f4a", i: "HG" },
  PH: { n: "Past & Present", d: "Stories from history", c: "#7a5238", i: "PH" },
  TK: { n: "The Kind Kitchen", d: "Reliable recipes", c: "#a5503f", i: "TK" },
  ST: { n: "Slow Travel", d: "Thoughtful journeys", c: "#3d5a73", i: "ST" },
};
const V = [
  {
    id: 1,
    img: "images/tomatoes.jpg",
    baked: 1,
    t: "The simple way to grow better tomatoes",
    ch: "HG",
    dur: "12:18",
    meta: "18K views · Added yesterday",
    g: "linear-gradient(135deg,#5f8a4f,#d9b36a)",
    by: "Gardener Michael Reed shares his dependable routine for healthier tomato plants—from choosing a sunny position to watering slowly and spotting the right time to feast.",
  },
  {
    id: 2,
    img: "images/coast.jpg",
    baked: 1,
    t: "Britain's most beautiful coastal railway",
    ch: "ST",
    dur: "18:42",
    meta: "42K views · Added 3 days ago",
    g: "linear-gradient(135deg,#3b7a9a,#c9b48a)",
    by: "A slow ride along cliffs and coves, with stops worth getting off the train for.",
  },
  {
    id: 3,
    img: "images/bread.jpg",
    t: "No-knead bread: a dependable weekend loaf",
    ch: "TK",
    dur: "10:06",
    meta: "31K views · Added 5 days ago",
    g: "linear-gradient(135deg,#a67c52,#e8d3ae)",
    by: "Four ingredients, almost no effort, and a crackling crust.",
  },
  {
    id: 4,
    img: "images/jazz.jpg",
    baked: 1,
    t: "The songs that changed jazz forever",
    ch: "PH",
    dur: "22:15",
    meta: "28K views · Added 1 week ago",
    g: "linear-gradient(135deg,#2a2f3f,#c58a3c)",
    by: "Six recordings, and the stories behind how each one rewrote the rules.",
  },
  {
    id: 5,
    img: "images/roses.jpg",
    baked: 1,
    t: "Pruning roses without the guesswork",
    ch: "HG",
    dur: "9:24",
    meta: "Home & Garden · 9:24",
    g: "linear-gradient(135deg,#8aa86a,#e9c9c0)",
    by: "When, where and how much to cut.",
  },
  {
    id: 6,
    img: "images/herbs.jpg",
    baked: 1,
    t: "Five herbs that thrive on a windowsill",
    ch: "TK",
    dur: "11:02",
    meta: "The Kind Kitchen · 11:02",
    g: "linear-gradient(135deg,#6f9a5c,#e8e2c4)",
    by: "Small pots, big flavour.",
  },
  {
    id: 7,
    img: "images/soil.jpg",
    baked: 1,
    t: "Better soil in three simple steps",
    ch: "HG",
    dur: "13:40",
    meta: "Home & Garden · 13:40",
    g: "linear-gradient(135deg,#6b4f3a,#a7b87a)",
    by: "Feed the ground and the garden follows.",
  },
  {
    id: 8,
    img: "images/photos.jpg",
    t: "How to organize old family photographs",
    ch: "PH",
    dur: "16:30",
    meta: "Keep & Remember · 12 minutes left",
    g: "linear-gradient(135deg,#8a7a68,#d8c9ad)",
    by: "Sort, label and store the pictures that matter.",
  },
  {
    id: 9,
    img: "images/cottage.jpg",
    t: "A year in a cottage garden",
    ch: "HG",
    dur: "14:00",
    meta: "Home & Garden · 14:00",
    g: "linear-gradient(135deg,#5f8a4f,#d9b36a)",
    by: "A gentle tour through a cottage garden across the seasons.",
  },
];
const byId = (id) => V.find((v) => v.id == id);
const METRIC_EVENTS = [
  "backNavigation",
  "searchCorrections",
  "formCorrections",
  "dialogDismissals",
];
const METRIC_LABELS = {
  backNavigation: "Back navigation",
  searchCorrections: "Search correction keys",
  formCorrections: "Sign-in correction keys",
  dialogDismissals: "Dialog dismissals",
};
const SUPPORTED_LANGUAGES = ["en", "es", "fr", "zh-TW"];
/* ---------- STATE (saved in this browser only) ---------- */
const S = Object.assign(
  {
    user: false,
    guestNoticeDismissed: false,
    metricsConsent: null,
    language: "en",
    pendingMetrics: {},
    autoplay: false,
    subs: ["HG", "PH", "ST"],
    saved: [],
    history: [
      {
        id: 1,
        when: "Today",
        note: "8 minutes left · Watched today at 10:24 AM",
        cta: "Continue",
      },
      {
        id: 3,
        when: "Today",
        note: "Finished · Watched today at 8:40 AM",
        cta: "Continue",
      },
      {
        id: 2,
        when: "Yesterday",
        note: "6 minutes left · Watched yesterday",
        cta: "Continue",
      },
      {
        id: 4,
        when: "Yesterday",
        note: "Finished · Watched yesterday",
        cta: "Continue",
      },
      {
        id: 8,
        when: "Yesterday",
        note: "12 minutes left · Watched yesterday",
        cta: "Continue",
      },
    ],
  },
  (() => {
    try {
      return JSON.parse(localStorage.gv || "{}");
    } catch (e) {
      return {};
    }
  })(),
);
S.metricsConsent =
  S.metricsConsent === true || S.metricsConsent === false
    ? S.metricsConsent
    : null;
S.pendingMetrics = Object.fromEntries(
  METRIC_EVENTS.map((event) => [
    event,
    Number.isSafeInteger(S.pendingMetrics?.[event]) && S.pendingMetrics[event] > 0
      ? S.pendingMetrics[event]
      : 0,
  ]),
);
if (!SUPPORTED_LANGUAGES.includes(S.language)) S.language = "en";
const save = () => {
  try {
    localStorage.gv = JSON.stringify(S);
  } catch (e) {}
};
const toast = (m) => {
  const t = document.getElementById("toast");
  t.textContent = goodviewTranslate(m, S.language);
  t.classList.add("on");
  clearTimeout(toast.h);
  toast.h = setTimeout(() => t.classList.remove("on"), 2200);
};
const loginDialog = document.getElementById("login-dialog");
const openLogin = () => {
  loginDialog.dataset.completed = "false";
  loginDialog.showModal();
};
function setMetricsStatus(message, retry = false) {
  const status = document.getElementById("metrics-sync-status");
  status.hidden = !message;
  document.getElementById("metrics-sync-message").textContent =
    goodviewTranslate(message, S.language);
  document.getElementById("metrics-retry").hidden = !retry;
}
function trackMetric(event) {
  if (S.metricsConsent !== true || !METRIC_EVENTS.includes(event)) return;
  S.pendingMetrics[event] += 1;
  save();
  flushPendingMetrics();
}
let metricsRequestInProgress = false;
async function flushPendingMetrics() {
  if (metricsRequestInProgress || S.metricsConsent !== true) return;
  const batch = Object.fromEntries(
    METRIC_EVENTS.filter((event) => S.pendingMetrics[event] > 0).map((event) => [
      event,
      S.pendingMetrics[event],
    ]),
  );
  if (Object.keys(batch).length === 0) return;
  metricsRequestInProgress = true;
  let sent = false;
  try {
    const response = await fetch("/api/metrics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ counts: batch }),
    });
    if (!response.ok) {
      throw new Error(`Metrics server responded with status ${response.status}.`);
    }
    for (const event of METRIC_EVENTS) {
      S.pendingMetrics[event] = Math.max(
        0,
        S.pendingMetrics[event] - (batch[event] || 0),
      );
    }
    save();
    setMetricsStatus("");
    sent = true;
    if (location.hash === "#/library" && tab === "metrics") {
      loadMetricsDashboard();
    }
  } catch (error) {
    setMetricsStatus(
      "Anonymous counts could not be sent. Start GoodView with node server.js, then try again.",
      true,
    );
  } finally {
    metricsRequestInProgress = false;
    if (
      sent &&
      S.metricsConsent === true &&
      METRIC_EVENTS.some((event) => S.pendingMetrics[event] > 0)
    ) {
      flushPendingMetrics();
    }
  }
}
function chooseMetricsConsent(allowed) {
  S.metricsConsent = allowed;
  if (!allowed) {
    S.pendingMetrics = Object.fromEntries(METRIC_EVENTS.map((event) => [event, 0]));
  }
  save();
  document.getElementById("metrics-consent").hidden = true;
  render();
  if (allowed) flushPendingMetrics();
}
async function loadMetricsDashboard() {
  const status = document.getElementById("metrics-dashboard-status");
  const counts = document.getElementById("metrics-counts");
  if (!status || !counts) return;
  status.textContent = goodviewTranslate("Loading anonymous totals…", S.language);
  try {
    const response = await fetch("/api/metrics", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Metrics server responded with status ${response.status}.`);
    }
    const data = await response.json();
    counts.innerHTML = METRIC_EVENTS.map(
      (event) =>
        `<div><dt>${goodviewTranslate(METRIC_LABELS[event], S.language)}</dt><dd>${Number.isSafeInteger(data.counts?.[event]) ? data.counts[event] : 0}</dd></div>`,
    ).join("");
    status.textContent = goodviewTranslate(
      "These are combined totals from this GoodView server.",
      S.language,
    );
    setMetricsStatus("");
  } catch (error) {
    status.textContent = goodviewTranslate(
      "The anonymous totals are unavailable. Check that the GoodView server is running.",
      S.language,
    );
    setMetricsStatus(
      "Usability metrics could not be loaded. Start GoodView with node server.js, then try again.",
      true,
    );
  }
}
/* ---------- PIECES ---------- */
const th = (v, play = true) =>
  `<div class="th" style="--g:${v.g}">${v.img ? `<img src="${v.img}" alt="" loading="lazy">` : ""}${play && !v.baked ? `<span class="play">${ic("play", 18)}</span>` : ""}${v.baked ? "" : `<span class="dur">${v.dur}</span>`}</div>`;
const card = (v) =>
  `<button class="vc" data-go="${v.id}" title="Open video: ${v.t}.">${th(v)}<div class="body"><h3>${v.t}</h3><small>${CH[v.ch].n}</small><small>${v.meta}</small></div></button>`;
const guest = (l = "Sign in") =>
  S.user || S.guestNoticeDismissed
    ? ""
    : `<div class="guest"><span class="av">${ic("user", 18)}</span><p><b>You're browsing as a guest</b>Sign in to save your history and subscriptions, or keep watching without an account.</p><button class="btn sm" data-act="guest" title="Dismiss this notice and continue browsing without an account.">Continue as guest</button><button class="btn red sm" data-act="signin" title="Open the demo sign-in form.">${l}</button></div>`;
/* ---------- VIEWS ---------- */
function home(q) {
  const list = V.filter(
    (v) =>
      v.id <= 4 &&
      (!q ||
        `${goodviewTranslate(v.t, S.language)} ${goodviewTranslate(CH[v.ch].n, S.language)}`
          .toLowerCase()
          .includes(q)),
  );
  return `<div class="hero"><div><div class="kicker">Today's good watching</div><h1>Take your time. You're in control.</h1><p>A calm collection of useful, interesting videos—chosen for quality, not clicks.</p></div>
 <button class="pick" data-go="9" aria-label="Watch Editor's pick: A year in a cottage garden" title="Open the featured cottage-garden video on its watch page.">${th(byId(9))}<span class="pick-copy"><small class="eb">Editor's pick</small><b>A year in a cottage garden</b><small>14 minutes · Home & Garden</small></span></button></div>
 ${guest()}
 <section><div class="sh"><div><small class="eb">Start somewhere familiar</small><h2>Channels selected for you</h2><p>Clear, dependable programs from trusted creators.</p></div><button class="btn sm" data-act="chans" title="Browse all channels. This page is not available yet.">See all channels</button></div>
 <div class="channels">${Object.entries(CH)
   .map(
     ([k, c]) =>
       `<button class="ch" data-channel="${k}" title="Open channel page: ${c.n}. Browse its videos."><span class="badge" style="background:${c.c}">${c.i}</span><span><b>${c.n}</b><small>${c.d}</small></span></button>`,
   )
   .join("")}</div></section>
 <section><div class="sh"><div><small class="eb">A short list for today</small><h2>Recommended for you</h2><p>Four considered suggestions. When you reach the end, you're all caught up.</p></div></div>
 ${list.length ? `<div class="grid">${list.map(card).join("")}</div>` : `<div class="empty">No videos match “${q}”. Try a different word.</div>`}</section>
 <section class="end"><h3>You've reached the end of today's recommendations.</h3><p>Come back tomorrow for a fresh, thoughtfully sized selection.</p><button class="btn sm" data-r="#/library" title="Open your saved videos, watch history, and subscriptions.">${ic("lib", 14)} Browse your Library</button></section>`;
}
function channelVideoList(channelId, query = "") {
  const normalizedQuery = query.trim().toLowerCase();
  const videos = V.filter(
    (v) =>
      v.ch === channelId &&
      (!normalizedQuery ||
        `${goodviewTranslate(v.t, S.language)} ${goodviewTranslate(v.by, S.language)} ${goodviewTranslate(v.meta, S.language)}`
          .toLowerCase()
          .includes(normalizedQuery)),
  );
  return videos.length
    ? `<div class="grid">${videos.map(card).join("")}</div>`
    : `<div class="empty">No videos match your search. Try a different word.</div>`;
}
function channelHome(channelId) {
  const channel = CH[channelId];
  const subscribed = S.subs.includes(channelId);
  const count = V.filter((v) => v.ch === channelId).length;
  return `<section class="channel-page">
    <button class="btn channel-back" data-r="#/" title="Return to Home and today's recommendations.">${ic("back")} Back to Home</button>
    <div class="channel-hero">
      <span class="badge channel-badge" style="background:${channel.c}">${channel.i}</span>
      <div class="channel-heading"><small class="eb">CHANNEL HOME</small><h1>${channel.n}</h1><p>${channel.d}. Browse ${count} ${count === 1 ? "video" : "videos"} uploaded by this channel.</p></div>
      <button class="btn channel-subscribe" data-sub="${channelId}" title="${subscribed ? "Stop following this channel." : "Follow this channel and include it in your subscriptions."}">${subscribed ? "Subscribed" : "Subscribe"}</button>
    </div>
    <div class="channel-videos-heading"><div><small class="eb">FROM THIS CHANNEL</small><h2>Videos</h2></div><label class="channel-search-label" for="channel-search">Search this channel</label><input class="channel-search" id="channel-search" type="search" placeholder="Search ${channel.n} videos" aria-label="Search ${channel.n} videos" title="Filter this channel's videos by title or description."></div>
    <div id="channel-videos" aria-live="polite">${channelVideoList(channelId)}</div>
  </section>`;
}
function yourVideos() {
  return `<section class="my-videos">
    <small class="eb">YOUR ACCOUNT</small>
    <h1>Your videos</h1>
    <p>Videos you upload will appear here.</p>
    <div class="empty">There are no uploaded videos in this demo. Uploading is not available yet.</div>
    <button class="btn" data-r="#/library" title="Open your Library, starting with saved videos.">Browse saved videos</button>
  </section>`;
}
function watch(id) {
  const v = byId(id) || V[0],
    c = CH[v.ch],
    next = V.filter(
      (x) => (x.id !== v.id && x.ch === v.ch) || [5, 6, 7].includes(x.id),
    )
      .filter((x) => x.id !== v.id)
      .slice(0, 3),
    sv = S.saved.includes(v.id);
  return `<div class="crumbs"><button class="btn" data-r="#/" title="Return to Home and today's recommendations.">${ic("back")} Back to Home</button><span>Now watching · ${c.n}</span></div>
 <div class="watch"><div><div class="player" style="--g:${v.g}"><span class="th" style="position:absolute;inset:0;background:none">${v.img ? `<img src="${v.img}" alt="">` : ""}<button class="play" id="pp" type="button" title="Play or pause this video"${v.baked ? ' style="opacity:0"' : ""}>▶</button></span><div class="ctrl"><div class="bar"><i id="prog"></i></div><div class="cb"><span class="pb">${ic("play", 18)}</span><span class="pill2">${ic("vol")} Volume</span><span>3:18 / ${v.dur}</span><span style="flex:1"></span><span class="pill2">${ic("cc")} Captions</span><span class="pill2 sq">${ic("fs")}</span></div></div></div>
 <span class="tag">${v.id == 1 ? "Gardening guide" : c.n}</span><h1>${v.t}</h1>
 <div class="by"><button class="channel-creator" data-channel="${v.ch}" title="Open channel: ${c.n}. Browse its videos and details."><span class="badge" style="background:${c.c}">${c.i}</span><span><b>${c.n}</b><small>${v.meta.split(" · ").join(" · ")}</small></span></button><button class="btn sm" data-save="${v.id}" title="${sv ? "Remove this video from your saved videos." : "Add this video to your Library's saved videos."}">${ic("mark")} ${sv ? "Saved" : "Save to library"}</button></div><p style="color:var(--mute)">${v.by}</p></div>
 <aside class="side"><div class="box toggle"><span>Autoplay is ${S.autoplay ? "on" : "off"}<small>Nothing plays unless you choose it.</small></span><button class="sw" data-act="auto" aria-pressed="${S.autoplay}" aria-label="Autoplay" title="${S.autoplay ? "Turn off autoplay so another video will not start automatically." : "Turn on autoplay to start the next video automatically."}"></button></div>
 <div><h2 style="font-size:20px">Watch next</h2><div style="color:var(--mute);font-size:12px;margin:2px 0 10px">Three related videos. Choose when you're ready.</div>${next.map(card).join("")}</div></aside></div>${guest("Sign in to save")}`;
}
let tab = "saved";
function library() {
  const hist = S.history,
    days = [...new Set(hist.map((h) => h.when))],
    savedVideos = S.saved.map((id) => byId(id)).filter(Boolean);
  const body =
    tab === "history"
      ? `<div class="sh"><div><h2 style="font-size:20px">Watch history on this device</h2><p>Newest first. Nothing is shared without your permission.</p></div><button class="btn sm" data-act="clear" title="Delete all watch history saved on this device.">${ic("trash")} Clear history</button></div>
  ${
    hist.length
      ? days
          .map(
            (d) =>
              `<div class="day">${d}</div>` +
              hist
                .filter((h) => h.when === d)
                .map((h) => {
                  const v = byId(h.id);
                  return `<div class="row"><div class="tw" data-go="${v.id}" title="Continue watching: ${v.t}.">${thp(v)}</div><div class="info">${v.t}<small>${CH[v.ch].n}</small><small>${h.note}</small></div><button class="btn" data-go="${v.id}" title="Continue watching: ${v.t}.">${ic("play", 14)} Continue</button><button class="btn dots" aria-label="More options" title="More actions for ${v.t}.">···</button></div>`;
                })
                .join(""),
          )
          .join("")
      : `<div class="empty">Nothing here yet. Videos you watch will appear on this device.</div>`
  }`
      : tab === "saved"
        ? `<div class="sh"><div><small class="eb">KEEP FOR LATER</small><h2 style="font-size:20px">Saved videos</h2><p>Everything you saved, all in one place.</p></div></div>${
            savedVideos.length
              ? savedVideos
                  .map(
                    (v) =>
                      `<div class="row"><div class="tw" data-go="${v.id}" title="Open video: ${v.t}.">${th(v, false)}</div><div class="info">${v.t}<small>${CH[v.ch].n}</small></div><button class="btn sm" data-unsave="${v.id}" title="Remove this video from your saved videos.">${ic("trash", 14)} Remove from saved</button></div>`,
                  )
                  .join("")
              : `<div class="empty">No saved videos yet. Choose “Save to library” on a video to keep it here.</div>`
          }`
        : tab === "metrics"
          ? `<div class="metrics-dashboard">
              <small class="eb">HELP US IMPROVE GOODVIEW</small>
              <h2>Usability metrics</h2>
              <p class="metrics-explanation">These anonymous totals combine actions from visitors who agreed to share. They help us spot confusing flows. No individual visitor can be identified.</p>
              <div class="metrics-permission">
                <strong>${S.metricsConsent === true ? "Sharing is on" : S.metricsConsent === false ? "Sharing is off" : "You have not chosen yet"}</strong>
                <p>${S.metricsConsent === true ? "New action counts are sent to this site's metrics server." : "Choose whether to share anonymous action counts."}</p>
                <div class="metrics-consent-actions">
                  <button class="btn red" type="button" data-metrics-consent="allow" ${S.metricsConsent === true ? "disabled" : ""}>${S.metricsConsent === true ? "Sharing allowed" : "Allow anonymous counts"}</button>
                  <button class="btn" type="button" data-metrics-consent="decline">${S.metricsConsent === false ? "Keep sharing off" : "Turn sharing off"}</button>
                </div>
                ${S.metricsConsent === true ? `<p class="metrics-withdraw-note">Turning sharing off stops future counts. Previously combined totals cannot be separated or removed.</p>` : ""}
              </div>
              <h3>Combined action counts</h3>
              <p class="metrics-dashboard-status" id="metrics-dashboard-status" role="status" aria-live="polite">Loading anonymous totals…</p>
              <dl class="metrics-counts" id="metrics-counts"></dl>
            </div>`
          : `<div class="sh"><div><small class="eb">CHANNELS YOU FOLLOW</small><h2 style="font-size:20px">Subscriptions</h2><p>Open a channel to see its videos, or unsubscribe at any time.</p></div></div><div class="subscription-list">${Object.keys(
            CH,
          )
            .map((k) => subRow(k))
            .join("")}</div>`;
  return `<section style="margin-top:6px"><div class="sh"><div><small class="eb">Your viewing, your choice</small><h1 style="font-size:30px">Library</h1><p>Return to what you watched, saved, or subscribed to—all in one clear place.</p></div>
 <div class="tabs">${[
   ["saved", "Saved videos"],
   ["history", "Watch history"],
   ["subs", "Subscriptions"],
   ["metrics", "Usability metrics"],
 ]
   .map(
     ([k, l]) =>
       `<button data-tab="${k}" class="${tab === k ? "on" : ""}" title="Show your ${l.toLowerCase()} in the Library.">${l}</button>`,
   )
   .join("")}</div></div>
 ${guest()}<div class="library-content">${body}</div></section>`;
}
const subRow = (k) => {
  const c = CH[k],
    on = S.subs.includes(k),
    count = V.filter((v) => v.ch === k).length;
  return `<div class="sub"><button class="channel-link" data-channel="${k}" title="Open the ${c.n} channel page and browse its videos."><span class="badge big" style="background:${c.c}">${c.i}</span><span class="t">${c.n}<small>${c.d} · ${count} ${count === 1 ? "video" : "videos"}</small></span></button><button class="btn sm subscription-toggle" data-sub="${k}" aria-pressed="${on}" title="${on ? "Stop following this channel." : "Follow this channel and include it in your subscriptions."}">${on ? "Unsubscribe" : "Subscribe"}</button></div>`;
};
/* ---------- ROUTER + EVENTS ---------- */
const app = document.getElementById("app");
const accountMenuWrap = document.getElementById("account-menu-wrap");
const accountMenuButton = document.getElementById("account-menu-button");
const accountMenu = document.getElementById("account-menu");
const profileDialog = document.getElementById("profile-dialog");
const backToTopButton = document.getElementById("back-to-top");
function closeAccountMenu(returnFocus = false) {
  accountMenu.hidden = true;
  accountMenuButton.setAttribute("aria-expanded", "false");
  if (returnFocus) accountMenuButton.focus();
}
function render() {
  const [, r, id] = (location.hash || "#/").split("/"),
    q = document.getElementById("q").value.trim().toLowerCase();
  const route =
    r === "watch"
      ? "watch"
      : r === "library"
        ? "library"
        : r === "channel" && CH[id]
          ? "channel"
          : r === "your-videos"
            ? "your-videos"
            : "home";
  const navRoute = route === "channel" ? "home" : route;
  document
    .querySelectorAll("nav a")
    .forEach((a) => a.classList.toggle("on", a.dataset.r === navRoute));
  document.getElementById("signin").textContent = S.user
    ? "Sign out"
    : route === "watch"
      ? "Sign in to save"
      : "Sign in";
  document.getElementById("signin").title = S.user
    ? "Sign out of this demo account."
    : "Open the demo sign-in form. No account is required to browse.";
  accountMenuWrap.hidden = !S.user;
  closeAccountMenu();
  document
    .querySelectorAll("nav a:not(:has(svg))")
    .forEach((a) =>
      a.insertAdjacentHTML(
        "afterbegin",
        ic({ home: "home", watch: "watch", library: "lib" }[a.dataset.r], 15),
      ),
    );
  app.innerHTML =
    route === "watch"
      ? watch(id)
      : route === "library"
        ? library()
        : route === "channel"
          ? channelHome(id)
          : route === "your-videos"
            ? yourVideos()
            : home(q);
  document.getElementById("metrics-consent").hidden =
    S.metricsConsent !== null;
  document.getElementById("language-select").value = S.language;
  if (route === "library" && tab === "metrics") {
    loadMetricsDashboard();
  }
  document.title =
    (route === "watch"
      ? (byId(id) || V[0]).t
      : route === "channel"
        ? CH[id].n
        : route === "your-videos"
          ? "Your videos"
        : route[0].toUpperCase() + route.slice(1)) +
    " – GoodView · v4 – Formatted and split";
  applyGoodViewLanguage(S.language, document.title);
}
document.getElementById("language-select").addEventListener("change", (e) => {
  if (!SUPPORTED_LANGUAGES.includes(e.target.value)) return;
  S.language = e.target.value;
  save();
  render();
});
let navigationHistory = [location.hash || "#/"];
addEventListener("hashchange", () => {
  const current = location.hash || "#/";
  const previousIndex = navigationHistory.lastIndexOf(current);
  if (previousIndex >= 0 && previousIndex < navigationHistory.length - 1) {
    trackMetric("backNavigation");
    navigationHistory = navigationHistory.slice(0, previousIndex + 1);
  } else {
    navigationHistory.push(current);
    if (navigationHistory.length > 50) navigationHistory.shift();
  }
  scrollTo(0, 0);
  render();
});
backToTopButton.addEventListener("click", () => {
  document.getElementById("main-navigation").scrollIntoView({
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: "start",
  });
  document.getElementById("main-navigation").focus({ preventScroll: true });
});
document.getElementById("q").addEventListener("input", () => {
  if (location.hash && location.hash !== "#/") location.hash = "#/";
  else render();
});
document.addEventListener("keydown", (e) => {
  if (
    !(e.target instanceof Element) ||
    e.repeat ||
    (e.key !== "Backspace" && e.key !== "Delete")
  ) {
    return;
  }
  if (e.target.matches("#q, #channel-search")) {
    trackMetric("searchCorrections");
  } else if (e.target.matches("#login-email, #login-password")) {
    trackMetric("formCorrections");
  }
});
document.getElementById("metrics-retry").addEventListener("click", () => {
  flushPendingMetrics();
  if (location.hash === "#/library" && tab === "metrics") {
    loadMetricsDashboard();
  }
});
app.addEventListener("input", (e) => {
  if (e.target.id !== "channel-search") return;
  const [, , channelId] = (location.hash || "#/").split("/");
  document.getElementById("channel-videos").innerHTML = channelVideoList(
    channelId,
    e.target.value,
  );
});
document.getElementById("signin").onclick = () => {
  if (S.user) {
    S.user = false;
    save();
    toast("Signed out");
    render();
  } else {
    openLogin();
  }
};
accountMenuButton.addEventListener("click", () => {
  const isOpening = accountMenu.hidden;
  accountMenu.hidden = !isOpening;
  accountMenuButton.setAttribute("aria-expanded", String(isOpening));
  if (isOpening) accountMenu.querySelector('[role="menuitem"]').focus();
});
accountMenu.addEventListener("keydown", (e) => {
  const items = [...accountMenu.querySelectorAll('[role="menuitem"]')];
  const currentIndex = items.indexOf(document.activeElement);
  if (e.key === "Escape") {
    e.preventDefault();
    closeAccountMenu(true);
  } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault();
    const direction = e.key === "ArrowDown" ? 1 : -1;
    items[(currentIndex + direction + items.length) % items.length].focus();
  } else if (e.key === "Home" || e.key === "End") {
    e.preventDefault();
    items[e.key === "Home" ? 0 : items.length - 1].focus();
  }
});
profileDialog.addEventListener("click", (e) => {
  if (e.target === profileDialog) profileDialog.close();
});
profileDialog.addEventListener("close", () => {
  if (profileDialog.dataset.completed !== "true") {
    trackMetric("dialogDismissals");
  }
  profileDialog.dataset.completed = "false";
  if (S.user) accountMenuButton.focus();
});
profileDialog.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    e.preventDefault();
    profileDialog.close();
  }
});
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  S.user = true;
  save();
  loginDialog.dataset.completed = "true";
  loginDialog.close();
  e.currentTarget.reset();
  toast("Signed in (demo)");
  render();
});
loginDialog.addEventListener("click", (e) => {
  if (e.target === loginDialog) loginDialog.close();
});
loginDialog.addEventListener("close", () => {
  if (loginDialog.dataset.completed !== "true") {
    trackMetric("dialogDismissals");
  }
  loginDialog.dataset.completed = "false";
});
loginDialog.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    e.preventDefault();
    loginDialog.close();
  }
});
document.addEventListener("click", (e) => {
  if (!accountMenuWrap.contains(e.target)) closeAccountMenu();
  const t = e.target.closest(
    "[data-go],[data-r],[data-act],[data-save],[data-unsave],[data-tab],[data-sub],[data-channel],[data-close-login],[data-close-profile],[data-account-action],[data-metrics-consent],#account-menu-button,#pp",
  );
  if (!t) return;
  const d = t.dataset;
  if (t.id === "account-menu-button") return;
  if (d.metricsConsent) {
    chooseMetricsConsent(d.metricsConsent === "allow");
    return;
  }
  if (t.hasAttribute("data-close-profile")) {
    profileDialog.close();
    return;
  }
  if (d.accountAction) {
    closeAccountMenu();
    if (d.accountAction === "profile") {
      profileDialog.dataset.completed = "false";
      profileDialog.showModal();
    } else if (d.accountAction === "videos") {
      location.hash = "#/your-videos";
    } else if (d.accountAction === "signout") {
      S.user = false;
      save();
      toast("Signed out");
      render();
    } else {
      tab = d.accountAction === "subscriptions" ? "subs" : d.accountAction;
      if (location.hash === "#/library") render();
      else location.hash = "#/library";
    }
    return;
  }
  if (t.hasAttribute("data-close-login")) {
    loginDialog.close();
    return;
  }
  if (t.id === "pp") {
    const p = document.getElementById("prog");
    t.textContent = t.textContent === "▶" ? "❚❚" : "▶";
    p.style.width = t.textContent === "❚❚" ? "60%" : "26%";
    return;
  }
  if (d.channel) {
    location.hash = "#/channel/" + d.channel;
    return;
  }
  if (d.go) {
    location.hash = "#/watch/" + d.go;
    return;
  }
  if (d.r && d.r[0] === "#") {
    location.hash = d.r;
    return;
  }
  if (d.save) {
    const i = +d.save;
    S.saved = S.saved.includes(i)
      ? S.saved.filter((x) => x !== i)
      : [...S.saved, i];
    save();
    toast(
      S.saved.includes(i) ? "Saved to your library" : "Removed from library",
    );
    render();
  }
  if (d.unsave) {
    S.saved = S.saved.filter((x) => x !== +d.unsave);
    save();
    toast("Removed from saved videos");
    render();
  }
  if (d.tab) {
    tab = d.tab;
    render();
  }
  if (d.sub) {
    const k = d.sub;
    S.subs = S.subs.includes(k)
      ? S.subs.filter((x) => x !== k)
      : [...S.subs, k];
    save();
    toast(S.subs.includes(k) ? "Subscribed" : "Unsubscribed");
    render();
  }
  if (d.act === "auto") {
    S.autoplay = !S.autoplay;
    save();
    render();
  }
  if (d.act === "clear") {
    S.history = [];
    save();
    toast("History cleared");
    render();
  }
  if (d.act === "signin") {
    openLogin();
  }
  if (d.act === "guest") {
    S.user = false;
    S.guestNoticeDismissed = true;
    save();
    loginDialog.close();
    toast("Continuing as a guest");
    render();
  }
  if (d.act === "chans") toast("All channels page: coming soon");
});
render();
if (S.metricsConsent === true) flushPendingMetrics();
