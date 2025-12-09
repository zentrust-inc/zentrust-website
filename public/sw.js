// ZenTrust - Temporary SW Cleanup Script
// Goal: stop intercepting, clear caches, let Next/Vercel handle everything

const CACHE_NAME = 'zentrust-cleanup-v1';

self.addEventListener('install', (event) => {
  // Activate immediately
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Wipe ALL old caches
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.map((name) => caches.delete(name)))
    ).then(() => self.clients.claim())
  );
});

// ⚠️ IMPORTANT: NO fetch handler.
// That means the SW will NOT intercept any requests at all.
// Browser will always talk directly to the network.
