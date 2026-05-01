'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "af92d96884eae1bf7d82155a8000da2a",
"assets/AssetManifest.bin.json": "0476978cb10ddfdf4d76ee8df628f563",
"assets/assets/data/about_institutions.xml": "cf6bfc32bc5b6aa94e17d2ed7c5d0776",
"assets/assets/data/about_libraries.xml": "f1919be42a758af4270dea7f59ec4cfc",
"assets/assets/data/about_recommended.xml": "b512871737ac315da761c64a01b5cb2b",
"assets/assets/data/manuscript_greek_letter_replacements.json": "90ad0153994b1ebcdc0db2be785b8046",
"assets/assets/data/markdown/markdown_youtube_player.html": "3dbd090f5ec15772f8969f462f5bec14",
"assets/assets/data/nomina_sacra_pronunciations.json": "eef4f2a86b188307774f0b63ee3c1e28",
"assets/assets/favicon.ico": "db57369060f69eb72ca3c522eb65dc61",
"assets/assets/fonts/Arimo/Arimo.ttf": "41c65fd0459c042427ac10051d779e65",
"assets/assets/fonts/NotoSansCoptic/NotoSansCoptic-Regular.ttf": "2bcb9c2e1ef06942639bca1dccc32316",
"assets/assets/images/UI/about.svg": "a25c53854734849a242530ac237cf5d8",
"assets/assets/images/UI/additional.svg": "6525c8b5e7ba51f9ef4c67d4260ca1fc",
"assets/assets/images/UI/android.svg": "40f9941da580669d21d7827bf136a2c7",
"assets/assets/images/UI/app_icon.png": "e2b0b3e21ab066fa36d3c606a74bec4a",
"assets/assets/images/UI/app_icon_android.png": "0614a77419ad230bf2b9d6b8b21694e7",
"assets/assets/images/UI/attention.svg": "9bcb57df0a667dd5049e27a4706ec952",
"assets/assets/images/UI/bug.svg": "842b96428b7f1459c7940bd224b68daf",
"assets/assets/images/UI/changelog.svg": "fd6199b11e04bce5de72cb7d7e1e751d",
"assets/assets/images/UI/close.svg": "5a67006a07095a64ad1a0499245aaa56",
"assets/assets/images/UI/code.svg": "edc0a23bb38ae382f6585d84c2be844a",
"assets/assets/images/UI/dictionary.svg": "df28b14c9c93cd75e43bd3180d9e8bb4",
"assets/assets/images/UI/download.svg": "b9dfb5e94be295740c2b6bbebcddd3d8",
"assets/assets/images/UI/email.svg": "f45907591d78abc0c8f0b13c37c4d4e7",
"assets/assets/images/UI/error.svg": "ee2011228a8552a2a4f057e26cf09cfa",
"assets/assets/images/UI/file_font.svg": "28ded0475a5652a26ea9d6d22fd67ea2",
"assets/assets/images/UI/file_sound.svg": "c1f77bed2c13292dd5f7b21e17eb761c",
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
"assets/assets/images/UI/lib_codex.svg": "ff48b623717313efb856aea4b2eee020",
"assets/assets/images/UI/lib_dart.svg": "63a1fa89591745e789e439a1f2d1abf1",
"assets/assets/images/UI/lib_flutter.svg": "ffb1ad68e663914e6ee80e64e490c521",
"assets/assets/images/UI/lib_github.svg": "6f7254131e59a287e9a2ef405055121a",
"assets/assets/images/UI/lib_supabase.svg": "13faa41d5dedfda0faa0205203721264",
"assets/assets/images/UI/lib_svgrepo.svg": "0cb0659e8bd3ee5138b72cdebe811806",
"assets/assets/images/UI/license.svg": "187420b7081bfa31d56fa3baad97d1ff",
"assets/assets/images/UI/like.svg": "2b13f2a6fd6935fba9eb0f73f3aaa7b6",
"assets/assets/images/UI/like_bb.png": "63a6047cea5099c1b0d8c798bd282c74",
"assets/assets/images/UI/like_biblehub.png": "0adb44f1346fbe989f473c09b34fe2af",
"assets/assets/images/UI/like_bible_in_ua.png": "8f8b40d6d3aa73123e5c40c22dbc1303",
"assets/assets/images/UI/like_blb.svg": "0d64b7e2c3a003aa51c7fdbfd5c866b9",
"assets/assets/images/UI/like_cntr.svg": "9d49fbf19230af2c36304537bb35617a",
"assets/assets/images/UI/like_logosklogos.png": "5f8d0fce72d3ed3d4740111d2727ceb7",
"assets/assets/images/UI/like_onbible.png": "89a034220a7eeb1aa58913d74ca81e14",
"assets/assets/images/UI/like_stn.jpg": "4fa8964a9f1929a85ab5fcc42dc5c7f9",
"assets/assets/images/UI/linux.svg": "9e9bed333273f7ec99dca1635d32aba0",
"assets/assets/images/UI/main-icon.svg": "0cd3d39faa153b769d27800f31b245cc",
"assets/assets/images/UI/menu.svg": "37acaa26fdfba972b202c967e9ee9425",
"assets/assets/images/UI/microsoft_store.svg": "4520d2236a127f87234e79ce25382d02",
"assets/assets/images/UI/papyrus.svg": "a43fde7d67df6d804c2124dbf3b27254",
"assets/assets/images/UI/settings.svg": "8074a046b7af8683af31c0322044e6d9",
"assets/assets/images/UI/shield.svg": "85d825b1de8bb1e54f5455d881c2a199",
"assets/assets/images/UI/snapcraft.svg": "58457d9295308728b7d3dc1d1e9f4e3c",
"assets/assets/images/UI/startup_splash_banner.jpg": "8eb37dd7a833ab20c04b3518132cf905",
"assets/assets/images/UI/support_us.svg": "2bc3213501b8812e94746b0beabd6357",
"assets/assets/images/UI/thank-you.svg": "a18f94f6506e3fc571e28f33d80e3ff6",
"assets/assets/images/UI/windows.svg": "45d16d4bfed34586ed1038bad276cde5",
"assets/assets/images/UI/www.svg": "22571dcb88bb32e1ad3c2a4f8c6ce6ad",
"assets/assets/meta/app_build_timestamp.txt": "9fa7c83c903d61c2c204645eff3db1c7",
"assets/assets/sounds/click.mp3": "33878b484ebbbfc10f0d6ad9fea23a9a",
"assets/assets/sounds/page.mp3": "b5e4e05201d812f8bdbfdc980cb21c33",
"assets/assets/sounds/stone.mp3": "ac9f29a0a4e03c71edaa3d95799fc17d",
"assets/CHANGELOG.md": "3fc7158f2daece1d4a08cf7590061a9c",
"assets/FontManifest.json": "328f1f1533d582fedd97592aff1ab039",
"assets/fonts/MaterialIcons-Regular.otf": "95d684462ca48871fe2013bc2dec328f",
"assets/NOTICES": "40c6876e4abad67be5f35b99ec9407d2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"db/manifest.json": "1c0e64a03df6c5409e227a68f4eda467",
"db/revelation.sqlite": "38913d4729c4792bb6c4d62b5f9bbd7e",
"db/revelation_en.sqlite": "60b39801d7e0099c9aff4315c7d6875c",
"db/revelation_es.sqlite": "685df99d9222fa9b512da2d20e56da2a",
"db/revelation_ru.sqlite": "82c14c302cc7232c3dc14c0fa21579b9",
"db/revelation_uk.sqlite": "581c431fe91d27b7e5901a3b3f9787a7",
"drift_worker.js": "3df0e5f9fc7a12f26affe74f2b07d328",
"favicon.png": "d20780d4c22b121b7b959f89dc64217d",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "2c88f1dd192b7c461d05cefd199f80b8",
"icons/Icon-192.png": "7da9c929b6ed18e565a8eb554f8aa49b",
"icons/Icon-512.png": "cd5a30a927d3d427d6a290c4122e7a89",
"icons/Icon-maskable-192.png": "7da9c929b6ed18e565a8eb554f8aa49b",
"icons/Icon-maskable-512.png": "cd5a30a927d3d427d6a290c4122e7a89",
"images/preface02.jpg": "c3771420785b9f521681d2937b1f1866",
"index.html": "e29a5d8d30731d2c2afec99235382e2e",
"/": "e29a5d8d30731d2c2afec99235382e2e",
"main.dart.js": "97414ce198a385bed42a7022ea393609",
"manifest.json": "1b37e6e156b78527076262d06dcf81ca",
"revelation_files_cache_sw.js": "8fcec229af789f60a455e9b33c6adfa5",
"sqlite3.wasm": "b9e5b5ebefa4e5ce6397a4eb8b2faa19",
"version.json": "394ca8d8634c8a020323dae51839fb39"};
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
