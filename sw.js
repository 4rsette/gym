// Salva i file nella memoria del telefono
const CACHE_NAME = 'myworkout-v1';

// Quando installi l'app, salva questi file
self.addEventListener('install', (event) => {
  console.log('App installata!');
});

// Quando apri l'app, carica i file salvati
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Se trovi il file in memoria, usalo
        if (response) {
          return response;
        }
        // Altrimenti caricalo normalmente
        return fetch(event.request);
      })
  );
});