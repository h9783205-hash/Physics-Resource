const CACHE_NAME = 'physics-hpg-cache-v1';
const OFFLINE_URLS = [
  'index.html',
  'lecture-notes.html',
  'ebooks.html',
  'previous-papers.html',
  'style.css',
  'manifest.json'
];

// Cache core pages on install
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(OFFLINE_URLS);
    })
  );
  self.skipWaiting();
});

// Clean up old caches on activate
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// Serve from cache first, fall back to network, and cache new requests as they come in
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      return cached || fetch(event.request).then(function(response) {
        // Don't try to cache non-GET or cross-origin (CDN) requests
        if (event.request.method === 'GET' && event.request.url.startsWith(self.location.origin)) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      });
    }).catch(function() {
      // Optional: fall back to index.html if offline and page not cached
      return caches.match('index.html');
    })
  );
});
