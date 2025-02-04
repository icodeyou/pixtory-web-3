'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3c11315910eb295b12cfac07f8f600db",
"version.json": "ca12b75f75451897cccf38f3d9fbed82",
"splash/img/light-2x.png": "4437e173b9ab4e2b94b5720d7a051d3f",
"splash/img/dark-4x.png": "9f7965cc9dcf0f95cbc9426567542d6f",
"splash/img/light-3x.png": "6a3687c51d0112f26413434e46f4e9fa",
"splash/img/dark-3x.png": "6a3687c51d0112f26413434e46f4e9fa",
"splash/img/light-4x.png": "9f7965cc9dcf0f95cbc9426567542d6f",
"splash/img/dark-2x.png": "4437e173b9ab4e2b94b5720d7a051d3f",
"splash/img/dark-1x.png": "26ac2f748b5740ad565dfb9d5c35139c",
"splash/img/light-1x.png": "26ac2f748b5740ad565dfb9d5c35139c",
"index.html": "4aedd5d85c51474231deddbfa7f630e0",
"/": "4aedd5d85c51474231deddbfa7f630e0",
"main.dart.js": "143a2d5a561c3982965d72d6203ff609",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8c5a4641ffd133e781d1505c63470350",
"main.dart.js_1.part.js": "e7edc6121bb0230f33a2f2e29a0d9c6c",
"assets/AssetManifest.json": "e71f8edec874829b72f843717d562f41",
"assets/NOTICES": "bb6e56dd688f722042d8b71bf28115fa",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/AssetManifest.bin.json": "85434cae189dd2b57002eec9d4dd657f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1e1a06e8ee67970c4043243c86d0d15c",
"assets/fonts/MaterialIcons-Regular.otf": "b6db936888b616ebbe4685823950d5f6",
"assets/assets/demo/friends2.jpg": "9f4cd12aab2f6a711e1353f17ab0f23e",
"assets/assets/demo/friends3.jpg": "6a172c557cb4949fcbe9fe8467cd0b2b",
"assets/assets/demo/friends4.jpg": "237b6d173cb6cede8112914cfebf9d21",
"assets/assets/demo/friends5.jpg": "abe461eabc5297775593e6fd7ed78063",
"assets/assets/demo/people-laughing.jpg": "9fbca7aeb82a1ea88c0a95bacd02ccc2",
"assets/assets/demo/friends7.jpg": "a45d3bb6923b0335893eea5958fb86b6",
"assets/assets/demo/friends6.jpg": "fa8ad482a80b5922ef6798781c2496cb",
"assets/assets/demo/family.jpg": "850d7220d7bc26b4593983e0b8f73d25",
"assets/assets/demo/friends18.jpg": "702abc3961662f0f3bd10eabc5ed1644",
"assets/assets/demo/friends16.jpg": "4fb76ce20afc76a01d583cb19f7e9892",
"assets/assets/demo/friends17.jpg": "2b572b576c246df66ddaed1af27d455f",
"assets/assets/demo/friends15.jpg": "2b9aeb0c891c9e39c34f5fb9decc4165",
"assets/assets/demo/friends14.jpg": "fe3b1b283626c85524ca525439701843",
"assets/assets/demo/friends10.jpg": "fb915726417b5e15847dfa29b5dec7d0",
"assets/assets/demo/friends11.jpg": "dc0e1f7abd444a54d702eed8b77f4fc1",
"assets/assets/demo/friends13.jpg": "9b994617bce9379ff1d0ababdb20fb44",
"assets/assets/demo/friends12.jpg": "0f8f6b8d5f27ec92bb191a7e56fe56d5",
"assets/assets/demo/friends8.jpg": "60cb76ea9198de2b72792ac262fcef4c",
"assets/assets/demo/friends9.jpg": "8da696a7a5f2df67b01b9b979e848251",
"assets/assets/demo/friends1.jpeg": "196eb3488fe19964e4d38bf378a6743f",
"assets/assets/images/checkmark.svg": "d4061498d6e9384b3d410746dd8937b7",
"assets/assets/images/pix-sample-green.png": "8557b70a4e68ebccd88ba03445531b22",
"assets/assets/images/kitten.png": "4e3f447d04951f4f655b24723dc303d3",
"assets/assets/images/cameraman.png": "8a4fbb4901ae13d1b94e76205a7c9268",
"assets/assets/images/contest_rules_example.png": "4e8642e2987962d5da839c853125afb5",
"assets/assets/images/logo_x_trial.png": "b56eb7a6cc033a102233689ddff71201",
"assets/assets/images/cat_hello.png": "45703a5925f486e8b6a84657b789851b",
"assets/assets/images/stopwatch.svg": "2244824894f55d981c65b09c55c14082",
"assets/assets/images/how_to_example.png": "c3e7d096f475c72fe1fb66d8c565c016",
"assets/assets/images/moto.png": "ddd9f17bdbc339f73ac7277fe87d0cb4",
"assets/assets/images/stopwatch_fast.png": "58d84fab84410d09b0a9fd5b6101d196",
"assets/assets/images/chevron_left.svg": "c1f11cc100c5c1e1fadb65c746f45d77",
"assets/assets/images/notif.png": "3e6ef48117141453a58597001da38ec7",
"assets/assets/images/strike.svg": "0720540e5a20c7fd0d0c12f1aec801ec",
"assets/assets/images/swipe.png": "812795fbf04c217b249fe7f83dc18134",
"assets/assets/images/pix-sample-white.png": "08da06932b58f2ae3d30bef27b41fc64",
"assets/assets/images/pix-sample-blue.png": "b702790afd1deacb2599f3a64ab916a8",
"assets/assets/images/pause_button.svg": "63b3e02b32d24dde2f4d78704622e13a",
"assets/assets/images/trashcan.svg": "60dcdec793c0be61f37845e6ad412526",
"assets/assets/images/contest_welcome.png": "a094fbdddaa3a8e70dcde4c12ed66980",
"assets/assets/images/chevron_circle.svg": "9e7cf2d95cc11ee3690317d8f13fb435",
"assets/assets/sql/seed/seed_data.sql": "697c7d503c37eb13ae3748c6abf597b3",
"assets/assets/sql/seed/create_index.sql": "d883d819ca4b9cc179d9158b06e8b723",
"assets/assets/sql/seed/create_table.sql": "ec2510c4596962acbf7324e3ce76d845",
"assets/assets/sql/queries/query_day_period.sql": "66b1dfe4036d9eb45bcdbdc391422abe",
"assets/assets/sql/queries/query_month_period.sql": "aa20b13ac80d882ea033ff889e49becd",
"assets/assets/sql/queries/query_week_period.sql": "7f62285ea91a7d336b5fd214c68d4c40",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
