/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e84f8924499dfe9b7de17293b866c448"
  },
  {
    "url": "about/contact/index.html",
    "revision": "79c5d32abd5927567833cf96d0afd80e"
  },
  {
    "url": "about/index.html",
    "revision": "9bf56e159bee8caedfd05b0b71e829aa"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "92ffdc3e63fd6305eea2ddf28a057360"
  },
  {
    "url": "assets/css/0.styles.19dc240e.css",
    "revision": "72121d3eb93d5f5ca0522cac05430d80"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.be1469dd.js",
    "revision": "f88bff0ead76915b6c39a2aa422bbdbf"
  },
  {
    "url": "assets/js/11.925baf34.js",
    "revision": "ad3500d26aaaa15e41a8895b0fce4281"
  },
  {
    "url": "assets/js/12.27696895.js",
    "revision": "84c33834b5a3cb959649d3d569b1f3a2"
  },
  {
    "url": "assets/js/13.63ed2dd6.js",
    "revision": "8c0628594f850a3e9b0eaa86ba9fc16b"
  },
  {
    "url": "assets/js/14.b39350b4.js",
    "revision": "5c9f5e366313c33fd0d5ca09b8702754"
  },
  {
    "url": "assets/js/15.497d5650.js",
    "revision": "32916d011f35e1b212fd0796c6d07714"
  },
  {
    "url": "assets/js/16.a3767e1a.js",
    "revision": "bf68765015927dfe0d2a2337add24142"
  },
  {
    "url": "assets/js/17.b9c303e7.js",
    "revision": "9b385adecb7a050efdb1b964b814507a"
  },
  {
    "url": "assets/js/18.f654c454.js",
    "revision": "9eeef358b2217ef047bcaeabbc69b689"
  },
  {
    "url": "assets/js/19.7d34d1d5.js",
    "revision": "7ca2e84c8d3681f9b80635b00a113166"
  },
  {
    "url": "assets/js/2.2a252c93.js",
    "revision": "cd4ce9f3e2b21d57302dcf0a5ea050a0"
  },
  {
    "url": "assets/js/20.22eb331b.js",
    "revision": "df5cf1af10e433fb39a7714a2c940b67"
  },
  {
    "url": "assets/js/21.288f9f0b.js",
    "revision": "d2c1df709c2754d111b85afb3f575b5e"
  },
  {
    "url": "assets/js/22.1e7e1982.js",
    "revision": "bad4d0559db6408ea5b241516c1a8bfd"
  },
  {
    "url": "assets/js/23.013460f0.js",
    "revision": "7be5de4d966800e0739b169dc3253122"
  },
  {
    "url": "assets/js/24.91247047.js",
    "revision": "2042c5497d12ea1e9c826a0c5af86b5d"
  },
  {
    "url": "assets/js/3.7bcbad5c.js",
    "revision": "957ce7df4e2a36a232e9d727efa9f2f5"
  },
  {
    "url": "assets/js/4.959b48a5.js",
    "revision": "430ce42765da9ce381f637b2d0be7faf"
  },
  {
    "url": "assets/js/5.ba562808.js",
    "revision": "5be042fd6b374677d4987b1f77936229"
  },
  {
    "url": "assets/js/6.b2d2af76.js",
    "revision": "4ff15f705520ebfebf746066e5bc3f7c"
  },
  {
    "url": "assets/js/7.d2eb7622.js",
    "revision": "d936eaf9dd76b9696e8dc6a97e572af9"
  },
  {
    "url": "assets/js/8.ac2cf0ae.js",
    "revision": "ff0ccd22ea1a932d1c71457c5ce29544"
  },
  {
    "url": "assets/js/9.c9f822a6.js",
    "revision": "ab2f0276fe5e1fb4dbe7388e3f292514"
  },
  {
    "url": "assets/js/app.44fe3bab.js",
    "revision": "85e6ade4326a564c596f4d53b431c9de"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "1e78a74a0a812bf56b9d461f87469f34"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "27dc7da978b75f813a954d7066227a6d"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "18e17e802ded74bee29ab0bae02a35be"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "b18a919221661a6a89a9a3a18ab289a4"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "62fb2004c4508705e9dec7ee9b98ca89"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "9ffdcc80e16886b92ae3e03a5738011a"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "0f1997696436d8f23cf9a979a26fe5fe"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "461e1487402df3a5db256aad9b69d794"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "59ed933f3feef66d5a8503002f8083c7"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "img/20210413174751.png",
    "revision": "fe1c038b0cf131102df440d14f07c236"
  },
  {
    "url": "img/20210413174752.png",
    "revision": "f83273a75356b3d9cf0782f01d3399e3"
  },
  {
    "url": "img/20210413174753.png",
    "revision": "1de3c0a8341a5835973e1c3410cbac87"
  },
  {
    "url": "img/home.png",
    "revision": "814566ef9f01d8c1d5d29cdca790e7a0"
  },
  {
    "url": "index.html",
    "revision": "8a358d51d5a023defaed5b7fd028c301"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "316e546a83da9ac53bc49c124cb9658f"
  },
  {
    "url": "jp/about/index.html",
    "revision": "63c967e95b61a64d62008d9687c9fe02"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "3319904ce92dc82f94ca3927f8b41532"
  },
  {
    "url": "jp/index.html",
    "revision": "9f9b7eaab5ff6710ef4d3d9118da0383"
  },
  {
    "url": "js/jquery.fancybox.min.js",
    "revision": "2e62b54f794ae2fae6a69feaad8f0820"
  },
  {
    "url": "js/jquery.slim.min.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "33c89e52307ba40b9ea357e5002bfd7e"
  },
  {
    "url": "kr/about/index.html",
    "revision": "9ff42218196222cb558fb3353f5ea1e4"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "7163b8d372478e1a3ce84653ba4d6b41"
  },
  {
    "url": "kr/index.html",
    "revision": "f2eede93b2f714425900282a0440c288"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "zh/about/contact/index.html",
    "revision": "0dcbe7cd8e0143f3fc5a798c51517e74"
  },
  {
    "url": "zh/about/index.html",
    "revision": "b296be825166dffd0df132992f13a108"
  },
  {
    "url": "zh/about/sponsor/index.html",
    "revision": "7ed8bac3910289a97065a557760e23c3"
  },
  {
    "url": "zh/index.html",
    "revision": "74bd91ae84cfdfd194a2459d6ee06fd3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
