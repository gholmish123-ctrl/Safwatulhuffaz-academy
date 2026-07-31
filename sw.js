self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});
self.addEventListener('fetch', (e) => {
    // كود بسيط لكي يقبله المتصفح كتطبيق PWA
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});