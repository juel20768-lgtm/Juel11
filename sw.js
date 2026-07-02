const CACHE_NAME = 'admin-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/admin.html',
  '/dps.html',
  '/loan-report.html',
  '/logo.png',
  '/manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

// ইনস্টলেশন এবং ফাইল ক্যাশ করা
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// নেটওয়ার্ক রিকোয়েস্ট হ্যান্ডেল করা (অফলাইন ও ফাস্ট লোডিং সাপোর্ট)
self.addEventListener('fetch', (event) => {
  // ফায়ারবেসের ইন্টারনাল রিকোয়েস্টগুলো যেন ক্যাশ না হয়
  if (event.request.url.includes('firestore.googleapis.com') || event.request.url.includes('identitytoolkit')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
