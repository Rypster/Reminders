const CACHE = 'injehoofd-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  // Sla het wachten over en activeer direct
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Neem direct de controle over
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
