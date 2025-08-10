// service-worker.js (in public/)
self.addEventListener('install', event => {
  // ...cache files...
});
self.addEventListener('fetch', event => {
  // ...serve from cache or network...
});

// registerServiceWorker.js (in src/)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
