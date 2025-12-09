// =============================
// ZenTrust Service Worker (FINAL)
// Prevents MIME errors & stale CSS
// =============================

// 🚨 IMPORTANT: bump version every time you deploy a new SW
const CACHE_NAME = 'zentrust-v3';

// Only cache these public assets
const urlsToCache = [
  '/',
  '/manifest.json',
  '/icon.svg',
  '/images/hero/sustainable-farm.jpg',
  '/images/programs/education-program.jpg'
];

// -----------------------------
// INSTALL: cache only safe static files
// -----------------------------
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// -----------------------------
// FETCH: extremely safe fetch handler
// Never cache Next.js generated files
// Never return stale CSS/JS
// -----------------------------
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // ❌ Absolutely NEVER touch Next.js build assets
  if (url.pathname.startsWith('/_next/')) {
    return; // do not intercept; browser will fetch fresh assets
  }

  // ❌ Do not cache HTML pages (prevents outdated pages)
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request));
    return;
  }

  // ✅ Only cache whitelisted assets from urlsToCache
  if (urlsToCache.includes(url.pathname)) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;

        return fetch(event.request).then((res) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, res.clone());
            return res;
          });
        });
      })
    );
    return;
  }

  // 🌐 Everything else: always go to network (prevents CSS MIME issues)
  event.respondWith(fetch(event.request));
});

// -----------------------------
// ACTIVATE: remove old caches
// -----------------------------
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );

  self.clients.claim();
});
