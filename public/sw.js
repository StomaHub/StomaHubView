const CACHE_NAME = "app-cache-v1";

// Assets fixos que sempre devem estar no cache
const STATIC_ASSETS = [
  "/", 
  "/index.html",
];

// Instalação
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Ativação
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => 
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Intercepta requisições
self.addEventListener("fetch", (event) => {
  const url = event.request.url;

  // Ignorar arquivos do Vite Dev server, HMR e WebSockets
  if (url.startsWith("ws://") || url.includes("/@vite/") || url.includes("/src/")) return;

  // API de produtos → NetworkFirst
  if (url.includes("/products")) {
    event.respondWith(
      fetch(event.request)
        .then((res) => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Arquivos estáticos e imagens → CacheFirst
  event.respondWith(
    caches.match(event.request).then((cachedRes) => {
      if (cachedRes) return cachedRes;

      return fetch(event.request)
        .then((res) => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone));
          return res;
        })
        .catch(() => {
          // fallback para imagens offline
          if (event.request.destination === "image") {
            return new Response(
              `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                 <rect width="200" height="200" fill="#ccc"/>
               </svg>`,
              { headers: { "Content-Type": "image/svg+xml" } }
            );
          }
        });
    })
  );
});
