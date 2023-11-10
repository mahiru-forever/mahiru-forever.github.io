var VERSION = 'v20231110';

var CACHE_LIST = [
  '/home/bg1.png',
  '/home/bg2.png',
  '/home/bg3.png',
  '/home/bg4.jpeg',
  '/home/bg5.png',
  '/home/bg1_depth.jpg',
  '/home/bg2_depth.jpg',
  '/home/bg3_depth.jpg',
  '/home/bg4_depth.jpg',
  '/home/bg5_depth.jpg',
]

// 缓存
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches
      .open(VERSION)
      .then(function(cache) {
        return cache.addAll(CACHE_LIST);
      })
  );
});

// 缓存更新
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // 如果当前版本和缓存版本不一致
          if (cacheName !== VERSION) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 捕获请求并返回缓存数据
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .catch(function() {
        return fetch(event.request);
      })
      .then(function(response) {
        if (!!response) {
          return response.clone();
        }
        return fetch(event.request).then(function (resp) {
          if (!resp || resp.status !== 200) {
            return resp
          }

          var respCache = resp.clone()
          caches.open(VERSION).then(function (cache) {
            return cache.put(event.request, respCache)
          })

          return resp
        })
      })
  );
});
