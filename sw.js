// Bumped to v2. This forces visitors' browsers to delete the old, broken v1 cache.
const CACHE_NAME = 'physics-hpg-cache-v3'; 
const OFFLINE_URLS = [
  'index.html',
  'lecture-notes.html',
  'ebooks.html',
  'previous-papers.html',
  'style.css',
  'manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(OFFLINE_URLS);
    })
  );
  self.skipWaiting();
});

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

// Network First, Fallback to Cache
self.addEventListener('fetch', function(event) {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        // If the network request succeeds, save a fresh copy to the cache
        if (event.request.url.startsWith(self.location.origin)) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(function() {
        // If the network fails (user is offline), try to find the exact page in the cache
        return caches.match(event.request).then(function(cachedResponse) {
          // If the page isn't in the cache, only then fall back to the homepage
          return cachedResponse || caches.match('index.html');
        });
      })
  );
});
