self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open("static").then((cache) => {
            return cache.addAll(["./", "./css/style.css", "./image/android-icon-192x192.png"]);
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((cacheRes) => {
            return cacheRes || fetch(e.request);
        })
    );
});
