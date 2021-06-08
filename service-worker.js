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
    "revision": "9f484823642e920edb255ad7308d9628"
  },
  {
    "url": "about/contact/index.html",
    "revision": "7dc16dee9645d89ab4f6aa67d72c4a13"
  },
  {
    "url": "about/index.html",
    "revision": "0e724c4ca9fd1f0630173ebb806c5a01"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "5fcbeecb87aa3b766f5d9334405f31a8"
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
    "url": "assets/js/10.d3e1c21b.js",
    "revision": "d441a14f3c784750e851484ddfc3ee59"
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
    "url": "assets/js/22.eb554474.js",
    "revision": "4591ec07fce4733ddf100dab734efdaa"
  },
  {
    "url": "assets/js/23.ae083067.js",
    "revision": "ec9f3a9858c52f28ea17452d147290b4"
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
    "url": "assets/js/7.ef1e1f0c.js",
    "revision": "fe5c791f01274cc1e84215027efbfc00"
  },
  {
    "url": "assets/js/8.3204edc2.js",
    "revision": "9f3aa1dd0f6aab4dd7c088e737781c0f"
  },
  {
    "url": "assets/js/9.0dd3a710.js",
    "revision": "fe9805ea194e76aae4d632bf0eb11b43"
  },
  {
    "url": "assets/js/app.23c92740.js",
    "revision": "ba1117fee43969c50d71f41d1309fd8f"
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
    "url": "img/about-contact.jpg",
    "revision": "e17f7b08c2eceb230a8fd0e0f8a5c5b3"
  },
  {
    "url": "img/about-me.jpg",
    "revision": "d68fe85a7d628a713ba209dd78c6ec28"
  },
  {
    "url": "img/about-sponsor.jpg",
    "revision": "002a3172d12c45de86c7efb95de61519"
  },
  {
    "url": "img/home-logo.gif",
    "revision": "96b6c3ba5b2184511c50756b3dfd9e9f"
  },
  {
    "url": "img/home.png",
    "revision": "814566ef9f01d8c1d5d29cdca790e7a0"
  },
  {
    "url": "index.html",
    "revision": "25914d8b81d7939508e623d75b7f6436"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "bb77128909c5b8dca6f8718504e2a4c6"
  },
  {
    "url": "jp/about/index.html",
    "revision": "f4ab7f5b4a22d172539ad76031285c5b"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "bd2c3ec1909bd6281f72979bed319786"
  },
  {
    "url": "jp/index.html",
    "revision": "99813adc412684fe39ec0d204d0bd259"
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
    "revision": "4731a0a3d13bf6a64ffc8008f5474cb0"
  },
  {
    "url": "kr/about/index.html",
    "revision": "b3ed468a310b213e775cbb684b4dc97e"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "29d3589e7c37a0350df92cccad5da97c"
  },
  {
    "url": "kr/index.html",
    "revision": "0ace6aac22c6156965a7e460ed1fc261"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "zh/about/contact/index.html",
    "revision": "8076105eed03f16ceca731f5684d8668"
  },
  {
    "url": "zh/about/index.html",
    "revision": "571050dcafb162f2f5e33055bbac9ef9"
  },
  {
    "url": "zh/about/sponsor/index.html",
    "revision": "2ee61f8c7304c8c978ac82b17979fc74"
  },
  {
    "url": "zh/index.html",
    "revision": "f45f1b98a77f6464d48fe7764eefa487"
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
