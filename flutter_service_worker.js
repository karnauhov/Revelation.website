'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5bc9a3da839b5dc87d235b7ed663ca8a",
"assets/AssetManifest.bin.json": "a3cdfc1b80625d4ad4c0f066732f6027",
"assets/AssetManifest.json": "589ac2534d5e5fd52c991c7ea40862c6",
"assets/assets/data/about_institutions.xml": "cf6bfc32bc5b6aa94e17d2ed7c5d0776",
"assets/assets/data/about_libraries.xml": "ff1cfbe1f017242fd66d148a28a45e34",
"assets/assets/data/topics/license_en.md": "f99ca175e21b75a793e1ab3822df2378",
"assets/assets/data/topics/license_ru.md": "535e23bb9fd1c91825e99ad9727dd61a",
"assets/assets/data/topics/license_uk.md": "f716c637eabbc9c5e661f1535e75acae",
"assets/assets/data/topics/privacy_policy_en.md": "92f50bb3814449fd5529737bb34c2967",
"assets/assets/data/topics/privacy_policy_ru.md": "241e0d80f2689bfe360565575dd95188",
"assets/assets/data/topics/privacy_policy_uk.md": "cb11598eee5118eaee7eeb59d69c6659",
"assets/assets/data/topics/topic_0_en.md": "005030cb396f7bf1bc1ef76bd7c2a7a5",
"assets/assets/data/topics/topic_0_ru.md": "85b340392154116e2e76d9cb81f337f5",
"assets/assets/data/topics/topic_0_uk.md": "46dbefba6aa14faf95b1ec15d6926fa5",
"assets/assets/data/topics.xml": "9289e6e36e08894c96494c14edecea6e",
"assets/assets/fonts/Arimo/Arimo.ttf": "41c65fd0459c042427ac10051d779e65",
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
"assets/assets/images/Topics/preface1.png": "b199aaeb86ded81d2e38456deff4f29a",
"assets/assets/images/Topics/preface2.png": "85675860fff47b1aa83019dfaf44a0b1",
"assets/assets/images/Topics/preface3.jpg": "b8d287eeae8a1ffb7ff38db4bd496a1c",
"assets/assets/images/UI/about.svg": "a25c53854734849a242530ac237cf5d8",
"assets/assets/images/UI/additional.svg": "6525c8b5e7ba51f9ef4c67d4260ca1fc",
"assets/assets/images/UI/agreement.svg": "2bc3213501b8812e94746b0beabd6357",
"assets/assets/images/UI/android.svg": "40f9941da580669d21d7827bf136a2c7",
"assets/assets/images/UI/app_icon.png": "f010400e53a52762fabea90f15c9bdd8",
"assets/assets/images/UI/app_icon_android.png": "96c1188b9453a1e22e7a72eef281d531",
"assets/assets/images/UI/attention.svg": "9bcb57df0a667dd5049e27a4706ec952",
"assets/assets/images/UI/changelog.svg": "fd6199b11e04bce5de72cb7d7e1e751d",
"assets/assets/images/UI/close.svg": "5a67006a07095a64ad1a0499245aaa56",
"assets/assets/images/UI/code.svg": "edc0a23bb38ae382f6585d84c2be844a",
"assets/assets/images/UI/download.svg": "b9dfb5e94be295740c2b6bbebcddd3d8",
"assets/assets/images/UI/email.svg": "f45907591d78abc0c8f0b13c37c4d4e7",
"assets/assets/images/UI/error.svg": "ee2011228a8552a2a4f057e26cf09cfa",
"assets/assets/images/UI/file_font.svg": "28ded0475a5652a26ea9d6d22fd67ea2",
"assets/assets/images/UI/file_sound.svg": "d2aeb9e9316292b675c04a83e583eb0a",
"assets/assets/images/UI/get_app.svg": "c551ef2b93bdfe56aa6c27a621fe7f02",
"assets/assets/images/UI/github.svg": "a976301549799cf3f56956f7bf2ca9bf",
"assets/assets/images/UI/google_play.svg": "6be7b74902b1fe5fc7bde2139264dd12",
"assets/assets/images/UI/info.svg": "6aef43c0ae788e23acb00f0c1529cd76",
"assets/assets/images/UI/institution.svg": "e63d1c0b942d53636fa8cbd98b7cdc4c",
"assets/assets/images/UI/inst_bav.png": "96c1e8ad784ffa7a1504513c8badaaec",
"assets/assets/images/UI/inst_bl.svg": "09d05d47bff5c70204c4393ca601d613",
"assets/assets/images/UI/inst_bml.png": "6de60c50bcd90bf5cc2765a2ee04b53b",
"assets/assets/images/UI/inst_bnf.svg": "84125f4e0a713a8de4342748d2268258",
"assets/assets/images/UI/inst_bnu.svg": "b73e2b647862fe25d7bc58a516186a82",
"assets/assets/images/UI/inst_cb.svg": "269274317b23c63f3ceef32332ec158f",
"assets/assets/images/UI/inst_ifao.png": "bb681f36f991e70d9e398638330874c3",
"assets/assets/images/UI/inst_ip.png": "fc882b8d94c9213c87e78d636491f85d",
"assets/assets/images/UI/inst_munster.svg": "8f1eab48d8721744e3392790eabd727d",
"assets/assets/images/UI/inst_nlr.png": "05dc35e9b75122ea6f062a85eb849dd8",
"assets/assets/images/UI/inst_oxford.svg": "04d7e5220541394727ee66b0946d95d3",
"assets/assets/images/UI/inst_pm.jpg": "6a7676578ab45ac66aacab295b3d2abd",
"assets/assets/images/UI/inst_pntk.png": "1b87b482d5789d2ffabb3cd598d5c44f",
"assets/assets/images/UI/inst_pts.png": "dbaf14cd88281899d271cb9353c00142",
"assets/assets/images/UI/inst_ucl.svg": "05774968ac774bee529212af3eb65f36",
"assets/assets/images/UI/inst_wiki.svg": "bda2fa07fcf8da5d3983adf83189b09b",
"assets/assets/images/UI/inst_yale.png": "d8b9fe6017ba9adc1003c2557c34aaae",
"assets/assets/images/UI/lib_dart.svg": "63a1fa89591745e789e439a1f2d1abf1",
"assets/assets/images/UI/lib_flutter.svg": "ffb1ad68e663914e6ee80e64e490c521",
"assets/assets/images/UI/lib_github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/images/UI/lib_supabase.svg": "13faa41d5dedfda0faa0205203721264",
"assets/assets/images/UI/lib_svgrepo.svg": "3cf77608c98d3d652c599bba030bc0a8",
"assets/assets/images/UI/main-icon.svg": "4a82e80b84ea18d379cdb51872d290ec",
"assets/assets/images/UI/menu.svg": "37acaa26fdfba972b202c967e9ee9425",
"assets/assets/images/UI/microsoft_store.svg": "4520d2236a127f87234e79ce25382d02",
"assets/assets/images/UI/papyrus.svg": "a43fde7d67df6d804c2124dbf3b27254",
"assets/assets/images/UI/paragraph.svg": "c3e02d6181e7ff453012a6284d65d1aa",
"assets/assets/images/UI/settings.svg": "8074a046b7af8683af31c0322044e6d9",
"assets/assets/images/UI/shield.svg": "85d825b1de8bb1e54f5455d881c2a199",
"assets/assets/images/UI/thank-you.svg": "a18f94f6506e3fc571e28f33d80e3ff6",
"assets/assets/images/UI/windows.svg": "d6a5fd32413be424c53626e7b09b3e39",
"assets/assets/images/UI/www.svg": "99cdad053a9b15926a57dd11a4c22fa2",
"assets/assets/sounds/click.mp3": "b3c23d17e4c023be748de8938789dea0",
"assets/assets/sounds/page.mp3": "b5e4e05201d812f8bdbfdc980cb21c33",
"assets/assets/sounds/stone.mp3": "ac9f29a0a4e03c71edaa3d95799fc17d",
"assets/CHANGELOG.md": "345a83409344ba6a7d4a820145bdd7c2",
"assets/FontManifest.json": "dce3d8048199c7d989d8d47adc4f09e6",
"assets/fonts/MaterialIcons-Regular.otf": "6c7663f735575658873d1ed07a1f2fcf",
"assets/NOTICES": "ebc0626e63a9d9de846254e02a802de4",
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
"favicon.png": "d20780d4c22b121b7b959f89dc64217d",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "33e02a96d9dad86d5da333c95e60f955",
"icons/Icon-192.png": "4e871ae708e98f1e2ab0a207999ece12",
"icons/Icon-512.png": "f181ea4e73b85236f454764b0d456142",
"icons/Icon-maskable-192.png": "4e871ae708e98f1e2ab0a207999ece12",
"icons/Icon-maskable-512.png": "f181ea4e73b85236f454764b0d456142",
"index.html": "88978d5ead95e9d81b8badefd26faf4e",
"/": "88978d5ead95e9d81b8badefd26faf4e",
"main.dart.js": "a9406ce66830f1da2010412ffacd4662",
"manifest.json": "523f0e6ee13339117be6fa8d8d7ea463",
"version.json": "f8af403e65f23d9d1382a5503ef2c9fc"};
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
