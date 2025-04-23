'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ee16134612b2f21dcc900e5196d25a23",
"assets/AssetManifest.bin.json": "da2f0b25a2f689a681f9ef15455a77e1",
"assets/AssetManifest.json": "4413010dc22ea5e6209ff33005cbad54",
"assets/assets/data/about_libraries.xml": "6cff5872712b4a39a3e30475120ee4dd",
"assets/assets/data/topics/topic_0_en.md": "358b3be204cbb0125150c969640553f3",
"assets/assets/data/topics/topic_0_ru.md": "5899f9b886fd12bec107563c1837bae0",
"assets/assets/data/topics/topic_0_uk.md": "fa59b8bb5fd10e9ce67296048788a271",
"assets/assets/data/topics/topic_1_en.md": "ef52eac9406f0b84aa908de9f55fc9d2",
"assets/assets/data/topics/topic_1_ru.md": "b027985438cae319266d25cb8acff07f",
"assets/assets/data/topics/topic_1_uk.md": "b1e6e47e16342aa3d2f257f447e2aaed",
"assets/assets/data/topics.xml": "0f7af56ff40922bc5b456af10a50980c",
"assets/assets/images/Resources/10018/preview.png": "2a0393e3a6fbf4e05af271119d15896e",
"assets/assets/images/Resources/10024/preview.png": "1d5cd9e561f4efc8a96c863a7982e457",
"assets/assets/images/Resources/10043/preview.png": "e2876781c1387200774e8b9f81e6e331",
"assets/assets/images/Resources/10047/preview.png": "fa55cef553b5f34bea71d2827eed1afd",
"assets/assets/images/Resources/10085/preview.png": "00b508e28c7c3156c7338b8092349a0a",
"assets/assets/images/Resources/10098/preview.png": "58fe04fec30e06bac08fe90b610cc226",
"assets/assets/images/Resources/10115/preview.png": "d6f3623db0287272c67871ae015ad4c1",
"assets/assets/images/Resources/20001/preview.png": "5ad667de7817d151ca1a94a8848c6921",
"assets/assets/images/Resources/20002/preview.png": "b655407ffa7cd8883c2d139927ce7c65",
"assets/assets/images/Resources/20004/preview.png": "da69578e907fd1423ed784fd2576790c",
"assets/assets/images/Resources/20025/preview.png": "7ee1137859ef239a4e60be8f55ad926f",
"assets/assets/images/Resources/20046/preview.png": "934a46ad5b54ca6beef6812086e7f7bd",
"assets/assets/images/Resources/20051/preview.png": "af98a012cf1f171a977338f4d03f8ed3",
"assets/assets/images/Resources/20052/preview.png": "8034e89e15da4961821477f5e5379f2c",
"assets/assets/images/Resources/20163/preview.png": "76fba066c0bcf76253f67775d734b477",
"assets/assets/images/Resources/20169/preview.png": "62bc21640e41683d7e08eb02dbf77739",
"assets/assets/images/Resources/20207/preview.png": "a945b5f85476167f66db32c9e0c485f1",
"assets/assets/images/Resources/20229/preview.png": "f4a72a4354afcf0150e6226edd618b1f",
"assets/assets/images/Resources/20308/preview.png": "6feef7a58752d42e5bb9f5b279d4b3c9",
"assets/assets/images/UI/additional.svg": "6425c0d4a769a93409051323f35cc1d5",
"assets/assets/images/UI/app_icon.png": "21edf7f2642c599256b3470d0cf7dfb1",
"assets/assets/images/UI/app_icon_android.png": "c1e3033a1cd8878f4af46ba78d4e5c12",
"assets/assets/images/UI/attention.svg": "ed633aac965fe5d47c68699ba2b24c34",
"assets/assets/images/UI/changelog.svg": "8baf349cf34f94d38522c01c96ca414d",
"assets/assets/images/UI/close.svg": "013398c0bf60acda0ea9b7ab0edd38c9",
"assets/assets/images/UI/code.svg": "893587c395a7d9bef408ac149442dccb",
"assets/assets/images/UI/email.svg": "f32d2f3197b2c9e5673a25d3bef479bf",
"assets/assets/images/UI/error.svg": "6ea65ab12bb4a0c2e767cc83842fff5e",
"assets/assets/images/UI/info.svg": "e6f3903f6a68e6685aa1a0f8b17d5791",
"assets/assets/images/UI/introduction.svg": "76e039cca63ab790a49c5edebae397dd",
"assets/assets/images/UI/lib_dart.svg": "63a1fa89591745e789e439a1f2d1abf1",
"assets/assets/images/UI/lib_flutter.svg": "baef53c0f6cd14fbc5da3f4e43361d13",
"assets/assets/images/UI/main-icon.svg": "4da131a6aba65f693f4f7584e4b8342a",
"assets/assets/images/UI/menu.svg": "74f0d35a96899475379ab2670dd273fd",
"assets/assets/images/UI/papyrus.svg": "25652c55e7ddecdefe45b6cbca433556",
"assets/assets/images/UI/settings.svg": "dca161b4f2ca1f17560c4b50752ae7af",
"assets/assets/images/UI/smartphone.svg": "04580288eea19b1e9ff2faef40b99330",
"assets/assets/images/UI/thank-you.svg": "5cf814f59c47bd6546e26f811765f21b",
"assets/CHANGELOG.md": "12f5e2e537e5f469ae9a30bab616f6d2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "25e8529224280be68420c757533210a0",
"assets/NOTICES": "b9e0b6bc7fb0a020b7893cbb0083bdea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "16f14cf083808cd030247392fd52db7c",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a7355ac93e633bb1b2a8d57a47c3e2c8",
"icons/Icon-192.png": "07698ba8619ac8354b2200c44c59d7aa",
"icons/Icon-512.png": "38d79e7cdaf8ee013b89834b91bbef1e",
"icons/Icon-maskable-192.png": "07698ba8619ac8354b2200c44c59d7aa",
"icons/Icon-maskable-512.png": "38d79e7cdaf8ee013b89834b91bbef1e",
"index.html": "7a6950fc9c1c9ebc4de8d35c93f306d7",
"/": "7a6950fc9c1c9ebc4de8d35c93f306d7",
"main.dart.js": "826bf6ae236fe7d368145421ca325f7d",
"manifest.json": "656d09afb7124b34c3a81a5f5602ece5",
"version.json": "7a7d49917df13dfeb5e56a7cac843a71"};
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
