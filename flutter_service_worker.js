'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4cb83f0e6f4e57556b4523399730e706",
"assets/AssetManifest.bin.json": "64bc70908df5ad5f6500dbdad28ac915",
"assets/AssetManifest.json": "dd55f2496200362010ed87911e9c6afd",
"assets/assets/data/about_institutions.xml": "cf6bfc32bc5b6aa94e17d2ed7c5d0776",
"assets/assets/data/about_libraries.xml": "6cff5872712b4a39a3e30475120ee4dd",
"assets/assets/data/topics/license_en.md": "f99ca175e21b75a793e1ab3822df2378",
"assets/assets/data/topics/license_ru.md": "535e23bb9fd1c91825e99ad9727dd61a",
"assets/assets/data/topics/license_uk.md": "f716c637eabbc9c5e661f1535e75acae",
"assets/assets/data/topics/privacy_policy_en.md": "887171f0ff9ce724c690f1203c2fa35e",
"assets/assets/data/topics/privacy_policy_ru.md": "436db8274ca0faa72934d22f4ced91c9",
"assets/assets/data/topics/privacy_policy_uk.md": "0d026a697423f80b93c370b37a62df77",
"assets/assets/data/topics/topic_0_en.md": "0379d06de9e6b0b4aa1ea1977758136d",
"assets/assets/data/topics/topic_0_ru.md": "0d50c8ca27d8a662ba8a02f6689bcd51",
"assets/assets/data/topics/topic_0_uk.md": "6cd93d07cd329aa07f7fd3add57e52e1",
"assets/assets/data/topics/topic_1_en.md": "ef52eac9406f0b84aa908de9f55fc9d2",
"assets/assets/data/topics/topic_1_ru.md": "b027985438cae319266d25cb8acff07f",
"assets/assets/data/topics/topic_1_uk.md": "b1e6e47e16342aa3d2f257f447e2aaed",
"assets/assets/data/topics.xml": "0f7af56ff40922bc5b456af10a50980c",
"assets/assets/images/PrimarySources/preview_10018.png": "2a0393e3a6fbf4e05af271119d15896e",
"assets/assets/images/PrimarySources/preview_10024.png": "1d5cd9e561f4efc8a96c863a7982e457",
"assets/assets/images/PrimarySources/preview_10043.png": "e2876781c1387200774e8b9f81e6e331",
"assets/assets/images/PrimarySources/preview_10047.png": "fa55cef553b5f34bea71d2827eed1afd",
"assets/assets/images/PrimarySources/preview_10085.png": "00b508e28c7c3156c7338b8092349a0a",
"assets/assets/images/PrimarySources/preview_10098.png": "b76aa004f9e1d140f64ae95836b1537d",
"assets/assets/images/PrimarySources/preview_10115.png": "d6f3623db0287272c67871ae015ad4c1",
"assets/assets/images/PrimarySources/preview_20001.png": "5ad667de7817d151ca1a94a8848c6921",
"assets/assets/images/PrimarySources/preview_20002.png": "b655407ffa7cd8883c2d139927ce7c65",
"assets/assets/images/PrimarySources/preview_20004.png": "da69578e907fd1423ed784fd2576790c",
"assets/assets/images/PrimarySources/preview_20025.png": "7ee1137859ef239a4e60be8f55ad926f",
"assets/assets/images/PrimarySources/preview_20046.png": "934a46ad5b54ca6beef6812086e7f7bd",
"assets/assets/images/PrimarySources/preview_20051.png": "af98a012cf1f171a977338f4d03f8ed3",
"assets/assets/images/PrimarySources/preview_20052.png": "8034e89e15da4961821477f5e5379f2c",
"assets/assets/images/PrimarySources/preview_20163.png": "76fba066c0bcf76253f67775d734b477",
"assets/assets/images/PrimarySources/preview_20169.png": "62bc21640e41683d7e08eb02dbf77739",
"assets/assets/images/PrimarySources/preview_20207.png": "a945b5f85476167f66db32c9e0c485f1",
"assets/assets/images/PrimarySources/preview_20229.png": "f4a72a4354afcf0150e6226edd618b1f",
"assets/assets/images/PrimarySources/preview_20308.png": "6feef7a58752d42e5bb9f5b279d4b3c9",
"assets/assets/images/Topics/banner_preface.png": "b199aaeb86ded81d2e38456deff4f29a",
"assets/assets/images/UI/additional.svg": "6425c0d4a769a93409051323f35cc1d5",
"assets/assets/images/UI/agreement.svg": "1a11b521da3a8ff72562df191e4fedaf",
"assets/assets/images/UI/app_icon.png": "21edf7f2642c599256b3470d0cf7dfb1",
"assets/assets/images/UI/app_icon_android.png": "c1e3033a1cd8878f4af46ba78d4e5c12",
"assets/assets/images/UI/attention.svg": "ed633aac965fe5d47c68699ba2b24c34",
"assets/assets/images/UI/changelog.svg": "8baf349cf34f94d38522c01c96ca414d",
"assets/assets/images/UI/close.svg": "013398c0bf60acda0ea9b7ab0edd38c9",
"assets/assets/images/UI/code.svg": "893587c395a7d9bef408ac149442dccb",
"assets/assets/images/UI/download.svg": "ab4f40cb24772e62408900e4c7fc8542",
"assets/assets/images/UI/email.svg": "f32d2f3197b2c9e5673a25d3bef479bf",
"assets/assets/images/UI/error.svg": "6ea65ab12bb4a0c2e767cc83842fff5e",
"assets/assets/images/UI/get_app.svg": "82a14089e7710706318010dc009345d4",
"assets/assets/images/UI/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/images/UI/google_play.svg": "3b1ff5b439780e33e3fdf509b8633724",
"assets/assets/images/UI/info.svg": "e6f3903f6a68e6685aa1a0f8b17d5791",
"assets/assets/images/UI/institution.svg": "84bdf70d600853cb7c2be213715e2820",
"assets/assets/images/UI/inst_bav.png": "96c1e8ad784ffa7a1504513c8badaaec",
"assets/assets/images/UI/inst_bl.svg": "09d05d47bff5c70204c4393ca601d613",
"assets/assets/images/UI/inst_bml.png": "6de60c50bcd90bf5cc2765a2ee04b53b",
"assets/assets/images/UI/inst_bnf.svg": "28692af0f0df9a09d05b8cb290d3d634",
"assets/assets/images/UI/inst_bnu.svg": "1c57f73646dfd0ad8c36d134f45e74fa",
"assets/assets/images/UI/inst_cb.svg": "269274317b23c63f3ceef32332ec158f",
"assets/assets/images/UI/inst_ifao.png": "bb681f36f991e70d9e398638330874c3",
"assets/assets/images/UI/inst_ip.png": "fc882b8d94c9213c87e78d636491f85d",
"assets/assets/images/UI/inst_munster.svg": "8f1eab48d8721744e3392790eabd727d",
"assets/assets/images/UI/inst_nlr.png": "05dc35e9b75122ea6f062a85eb849dd8",
"assets/assets/images/UI/inst_oxford.svg": "04d7e5220541394727ee66b0946d95d3",
"assets/assets/images/UI/inst_pm.jpg": "6a7676578ab45ac66aacab295b3d2abd",
"assets/assets/images/UI/inst_pntk.png": "1b87b482d5789d2ffabb3cd598d5c44f",
"assets/assets/images/UI/inst_pts.png": "dbaf14cd88281899d271cb9353c00142",
"assets/assets/images/UI/inst_ucl.svg": "82338e591702458922f1a3920a0cce56",
"assets/assets/images/UI/inst_wiki.svg": "bda2fa07fcf8da5d3983adf83189b09b",
"assets/assets/images/UI/inst_yale.png": "d8b9fe6017ba9adc1003c2557c34aaae",
"assets/assets/images/UI/introduction.svg": "76e039cca63ab790a49c5edebae397dd",
"assets/assets/images/UI/lib_dart.svg": "63a1fa89591745e789e439a1f2d1abf1",
"assets/assets/images/UI/lib_flutter.svg": "baef53c0f6cd14fbc5da3f4e43361d13",
"assets/assets/images/UI/main-icon.svg": "4da131a6aba65f693f4f7584e4b8342a",
"assets/assets/images/UI/menu.svg": "74f0d35a96899475379ab2670dd273fd",
"assets/assets/images/UI/microsoft_store.svg": "7f40b3720ac8ab83af14bf4417acbb35",
"assets/assets/images/UI/papyrus.svg": "25652c55e7ddecdefe45b6cbca433556",
"assets/assets/images/UI/settings.svg": "dca161b4f2ca1f17560c4b50752ae7af",
"assets/assets/images/UI/shield.svg": "5a46ab3adb26e6f88caa89b5498ceeb9",
"assets/assets/images/UI/smartphone.svg": "04580288eea19b1e9ff2faef40b99330",
"assets/assets/images/UI/thank-you.svg": "5cf814f59c47bd6546e26f811765f21b",
"assets/assets/images/UI/www.svg": "03640ad2e94511dd2f11ff3b09b886bc",
"assets/CHANGELOG.md": "9125465fa3bfe9b1bb7dcd2e9aa33b2d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "eac70cedccdba1779284430c3ce16196",
"assets/NOTICES": "fac71d031895cd4fcc850a051203da37",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "16f14cf083808cd030247392fd52db7c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "26b5a886d53befe23dff2a7474ad4811",
"icons/Icon-192.png": "07698ba8619ac8354b2200c44c59d7aa",
"icons/Icon-512.png": "38d79e7cdaf8ee013b89834b91bbef1e",
"icons/Icon-maskable-192.png": "07698ba8619ac8354b2200c44c59d7aa",
"icons/Icon-maskable-512.png": "38d79e7cdaf8ee013b89834b91bbef1e",
"index.html": "7a6950fc9c1c9ebc4de8d35c93f306d7",
"/": "7a6950fc9c1c9ebc4de8d35c93f306d7",
"main.dart.js": "f00d4da1edc7080d72ffb1d20aa84878",
"manifest.json": "72236e9eb67edc3130312ada83057757",
"version.json": "bd3f53c88462d2c62376024ff7cb530b"};
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
