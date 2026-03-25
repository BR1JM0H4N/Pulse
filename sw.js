const CACHE_NAME = "pulse-shell-v1";
const FEED_CACHE = "pulse-feed-v1";
const FEED_URL = "https://corsproxy.io/?url=" + encodeURIComponent("https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en");

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-512-maskable.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => ![CACHE_NAME, FEED_CACHE].includes(k))
          .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(request);
    cache.put(request, fresh.clone());
    return fresh;
  } catch {
    const cached = await cache.match(request);
    if (cached) return cached;
    throw new Error("No cached response available");
  }
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== "GET") return;

  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request))
    );
    return;
  }

  if (url.href.startsWith("https://corsproxy.io/?url=")) {
    event.respondWith(networkFirst(request, FEED_CACHE));
  }
});

self.addEventListener("sync", (event) => {
  if (event.tag !== "pulse-feed-sync") return;
  event.waitUntil(
    caches.open(FEED_CACHE).then(async (cache) => {
      try {
        const response = await fetch(FEED_URL, { cache: "no-store" });
        if (response.ok) {
          await cache.put(FEED_URL, response.clone());
        }
      } catch (_) {
        // ignore background sync failures; cache fallback remains available
      }
    })
  );
});
