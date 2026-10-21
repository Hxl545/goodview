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
];
const byId = (id) => V.find((v) => v.id == id);
/* ---------- STATE (saved in this browser only) ---------- */
const S = Object.assign(
  {
    user: false,
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
const save = () => {
  try {
    localStorage.gv = JSON.stringify(S);
  } catch (e) {}
};
const toast = (m) => {
  const t = document.getElementById("toast");
  t.textContent = m;
  t.classList.add("on");
  clearTimeout(toast.h);
  toast.h = setTimeout(() => t.classList.remove("on"), 2200);
};
/* ---------- PIECES ---------- */
const th = (v, play = true) =>
  `<div class="th" style="--g:${v.g}">${v.img ? `<img src="${v.img}" alt="" loading="lazy">` : ""}${play && !v.baked ? `<span class="play">${ic("play", 18)}</span>` : ""}${v.baked ? "" : `<span class="dur">${v.dur}</span>`}</div>`;
const card = (v) =>
  `<button class="vc" data-go="${v.id}">${th(v)}<div class="body"><h3>${v.t}</h3><small>${CH[v.ch].n}</small><small>${v.meta}</small></div></button>`;
const guest = (l = "Sign in") =>
  S.user
    ? ""
    : `<div class="guest"><span class="av">${ic("user", 18)}</span><p><b>You're browsing as a guest</b>Sign in to save your history and subscriptions, or keep watching without an account.</p><button class="btn sm" data-act="guest">Continue as guest</button><button class="btn red sm" data-act="signin">${l}</button></div>`;
/* ---------- VIEWS ---------- */
function home(q) {
  const list = V.filter(
    (v) => v.id <= 4 && (!q || (v.t + CH[v.ch].n).toLowerCase().includes(q)),
  );
  return `<div class="hero"><div><div class="kicker">Today's good watching</div><h1>Take your time. You're in control.</h1><p>A calm collection of useful, interesting videos—chosen for quality, not clicks.</p></div>
 <div class="pick">${th({ g: "#5f8a4f", img: "images/cottage.jpg", dur: "14:00" }, false)}<div><small class="eb">Editor's pick</small><b>A year in a cottage garden</b><small>14 minutes · Home & Garden</small></div></div></div>
 ${guest()}
 <section><div class="sh"><div><small class="eb">Start somewhere familiar</small><h2>Channels selected for you</h2><p>Clear, dependable programs from trusted creators.</p></div><button class="btn sm" data-act="chans">See all channels</button></div>
 <div class="channels">${Object.values(CH)
   .map(
     (c) =>
       `<button class="ch"><span class="badge" style="background:${c.c}">${c.i}</span><span><b>${c.n}</b><small>${c.d}</small></span></button>`,
   )
   .join("")}</div></section>
 <section><div class="sh"><div><small class="eb">A short list for today</small><h2>Recommended for you</h2><p>Four considered suggestions. When you reach the end, you're all caught up.</p></div></div>
 ${list.length ? `<div class="grid">${list.map(card).join("")}</div>` : `<div class="empty">No videos match “${q}”. Try a different word.</div>`}</section>
 <section class="end"><h3>You've reached the end of today's recommendations.</h3><p>Come back tomorrow for a fresh, thoughtfully sized selection.</p><button class="btn sm" data-r="#/library">${ic("lib", 14)} Browse your Library</button></section>`;
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
  return `<div class="crumbs"><button class="btn" data-r="#/">${ic("back")} Back to Home</button><span>Now watching · ${c.n}</span></div>
 <div class="watch"><div><div class="player" style="--g:${v.g}"><span class="th" style="position:absolute;inset:0;background:none">${v.img ? `<img src="${v.img}" alt="">` : ""}<span class="play" id="pp"${v.baked ? ' style="opacity:0"' : ""}>▶</span></span><div class="ctrl"><div class="bar"><i id="prog"></i></div><div class="cb"><span class="pb">${ic("play", 18)}</span><span class="pill2">${ic("vol")} Volume</span><span>3:18 / ${v.dur}</span><span style="flex:1"></span><span class="pill2">${ic("cc")} Captions</span><span class="pill2 sq">${ic("fs")}</span></div></div></div>
 <span class="tag">${v.id == 1 ? "Gardening guide" : c.n}</span><h1>${v.t}</h1>
 <div class="by"><span class="badge" style="background:${c.c}">${c.i}</span><span><b>${c.n}</b><small>${v.meta.split(" · ").join(" · ")}</small></span><button class="btn sm" data-save="${v.id}">${ic("mark")} ${sv ? "Saved" : "Save to library"}</button></div><p style="color:var(--mute)">${v.by}</p></div>
 <aside class="side"><div class="box toggle"><span>Autoplay is ${S.autoplay ? "on" : "off"}<small>Nothing plays unless you choose it.</small></span><button class="sw" data-act="auto" aria-pressed="${S.autoplay}" aria-label="Autoplay"></button></div>
 <div><h2 style="font-size:20px">Watch next</h2><div style="color:var(--mute);font-size:12px;margin:2px 0 10px">Three related videos. Choose when you're ready.</div>${next.map(card).join("")}</div></aside></div>${guest("Sign in to save")}`;
}
let tab = "history";
function library() {
  const hist = S.history,
    days = [...new Set(hist.map((h) => h.when))];
  const body =
    tab === "history"
      ? `<div class="sh"><div><h2 style="font-size:20px">Watch history on this device</h2><p>Newest first. Nothing is shared without your permission.</p></div><button class="btn sm" data-act="clear">${ic("trash")} Clear history</button></div>
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
                  return `<div class="row"><div class="tw" data-go="${v.id}">${thp(v)}</div><div class="info">${v.t}<small>${CH[v.ch].n}</small><small>${h.note}</small></div><button class="btn" data-go="${v.id}">${ic("play", 14)} Continue</button><button class="btn dots" aria-label="More options">···</button></div>`;
                })
                .join(""),
          )
          .join("")
      : `<div class="empty">Nothing here yet. Videos you watch will appear on this device.</div>`
  }`
      : tab === "saved"
        ? `<div class="sh"><h2 style="font-size:20px">Saved videos</h2></div>${
            S.saved.length
              ? S.saved
                  .map((i) => byId(i))
                  .map(
                    (v) =>
                      `<div class="row"><div data-go="${v.id}">${th(v, false)}</div><div class="info">${v.t}<small>${CH[v.ch].n}</small></div><button class="btn sm" data-unsave="${v.id}">Remove</button></div>`,
                  )
                  .join("")
              : `<div class="empty">No saved videos. Use “Save to library” on any video.</div>`
          }`
        : `<div class="sh"><h2 style="font-size:20px">Subscriptions</h2></div><div class="grid" style="grid-template-columns:1fr">${Object.keys(
            CH,
          )
            .map((k) => subRow(k))
            .join("")}</div>`;
  return `<section style="margin-top:6px"><div class="sh"><div><small class="eb">Your viewing, your choice</small><h1 style="font-size:30px">Library</h1><p>Return to what you watched, saved, or subscribed to—all in one clear place.</p></div>
 <div class="tabs">${[
   ["history", "Watch history"],
   ["saved", "Saved videos"],
   ["subs", "Subscriptions"],
 ]
   .map(
     ([k, l]) =>
       `<button data-tab="${k}" class="${tab === k ? "on" : ""}">${l}</button>`,
   )
   .join("")}</div></div>
 ${guest()}<div class="lib"><div>${body}</div><aside><h2 style="font-size:19px">Your subscriptions</h2><div style="color:var(--mute);font-size:12px;margin:2px 0 10px">Choose exactly which channels appear on Home.</div>${S.subs.map(subRow).join("")}
 <div class="note"><b>${ic("help")} What does subscribing do?</b><br>New videos from these channels appear near the top of Home. We won't turn on autoplay or send emails unless you ask.</div></aside></div></section>`;
}
const subRow = (k) => {
  const c = CH[k],
    on = S.subs.includes(k),
    f =
      { PH: "1 new video each week", ST: "2 new videos each month" }[k] ||
      "2 new videos each week";
  return `<div class="sub"><div class="top2"><span class="badge big" style="background:${c.c}">${c.i}</span><span class="t">${c.n}<small>${f}</small></span></div><div class="acts"><span class="pill">${on ? ic("check", 14) + " Subscribed" : "Not subscribed"}</span><button class="btn sm" data-sub="${k}">${on ? "Manage" : "Subscribe"}</button></div></div>`;
};
/* ---------- ROUTER + EVENTS ---------- */
const app = document.getElementById("app");
function render() {
  const [, r, id] = (location.hash || "#/").split("/"),
    q = document.getElementById("q").value.trim().toLowerCase();
  const route = r === "watch" ? "watch" : r === "library" ? "library" : "home";
  document
    .querySelectorAll("nav a")
    .forEach((a) => a.classList.toggle("on", a.dataset.r === route));
  document.getElementById("signin").textContent = S.user
    ? "Sign out"
    : route === "watch"
      ? "Sign in to save"
      : "Sign in";
  document
    .querySelectorAll("nav a:not(:has(svg))")
    .forEach((a) =>
      a.insertAdjacentHTML(
        "afterbegin",
        ic({ home: "home", watch: "watch", library: "lib" }[a.dataset.r], 15),
      ),
    );
  app.innerHTML =
    route === "watch" ? watch(id) : route === "library" ? library() : home(q);
  document.title =
    (route === "watch"
      ? (byId(id) || V[0]).t
      : route[0].toUpperCase() + route.slice(1)) +
    " – GoodView · v4 – Formatted and split";
}
addEventListener("hashchange", () => {
  scrollTo(0, 0);
  render();
});
document.getElementById("q").addEventListener("input", () => {
  if (location.hash && location.hash !== "#/") location.hash = "#/";
  else render();
});
document.getElementById("signin").onclick = () => {
  S.user = !S.user;
  save();
  toast(S.user ? "Signed in (demo)" : "Signed out");
  render();
};
document.addEventListener("click", (e) => {
  const t = e.target.closest(
    "[data-go],[data-r],[data-act],[data-save],[data-unsave],[data-tab],[data-sub],#pp",
  );
  if (!t) return;
  const d = t.dataset;
  if (t.id === "pp") {
    const p = document.getElementById("prog");
    t.textContent = t.textContent === "▶" ? "❚❚" : "▶";
    p.style.width = t.textContent === "❚❚" ? "60%" : "26%";
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
    S.user = true;
    save();
    toast("Signed in (demo)");
    render();
  }
  if (d.act === "guest") {
    S.user = false;
    toast("Continuing as a guest");
  }
  if (d.act === "chans") toast("All channels page: coming soon");
});
render();
