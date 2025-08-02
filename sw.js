/**
 * Service Worker for Mystic Oracle
 * Provides offline functionality and caching
 */

const CACHE_NAME = 'mystic-oracle-v1.0.0';
const urlsToCache = [
    '/',
    '/index.html',
    '/assets/css/bazi-styles.css',
    '/assets/js/bazi-engine.js',
    '/assets/js/bazi-chatbot.js',
    'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@300;400;600&family=Inter:wght@300;400;500&display=swap'
];

// Install event - cache resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Background sync for storing readings when offline
self.addEventListener('sync', event => {
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
    }
});

function doBackgroundSync() {
    // Sync any offline readings when connection is restored
    return new Promise(resolve => {
        // Placeholder for syncing offline data
        console.log('Background sync completed');
        resolve();
    });
}
