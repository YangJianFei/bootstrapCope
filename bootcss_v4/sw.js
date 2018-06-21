self.importScripts('workbox-sw.prod.v2.1.2.js'/*tpa=https://v4.bootcss.com/assets/js/vendor/workbox-sw.prod.v2.1.2.js*/)

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
  {
    "url": "https://v4.bootcss.com/assets/brand/bootstrap-outline.svg",
    "revision": "9537646a9202cb5dca44e9034c1b414b"
  },
  {
    "url": "https://v4.bootcss.com/assets/brand/bootstrap-punchout.svg",
    "revision": "372e344ac243c4fa7c6c8b8a2af0e5ff"
  },
  {
    "url": "bootstrap-social-logo.png"/*tpa=https://v4.bootcss.com/assets/brand/bootstrap-social-logo.png*/,
    "revision": "1e9e93d863b7811934889f9aac89c7de"
  },
  {
    "url": "bootstrap-social.png"/*tpa=https://v4.bootcss.com/assets/brand/bootstrap-social.png*/,
    "revision": "56be615bbca4502de5d55d721dae917f"
  },
  {
    "url": "https://v4.bootcss.com/assets/brand/bootstrap-solid.svg",
    "revision": "ea931a5b98a97e8b8658d9f6d537329e"
  },
  {
    "url": "docs.min.css"/*tpa=https://v4.bootcss.com/assets/css/docs.min.css*/,
    "revision": "e057f1d22ea453044032d4e775455163"
  },
  {
    "url": "bootstrap-stack.png"/*tpa=https://v4.bootcss.com/assets/img/bootstrap-stack.png*/,
    "revision": "7384412324c769e447d3c4f86e9ff068"
  },
  {
    "url": "bootstrap-themes.png"/*tpa=https://v4.bootcss.com/assets/img/bootstrap-themes.png*/,
    "revision": "3976b58ff407451e8e8b598fdcde2cd2"
  },
  {
    "url": "android-chrome-192x192.png"/*tpa=https://v4.bootcss.com/assets/img/favicons/android-chrome-192x192.png*/,
    "revision": "643718426d0a7d60036217ba988155be"
  },
  {
    "url": "android-chrome-512x512.png"/*tpa=https://v4.bootcss.com/assets/img/favicons/android-chrome-512x512.png*/,
    "revision": "eb512e79165f504fd4da4d2758d5584b"
  },
  {
    "url": "apple-touch-icon.png"/*tpa=https://v4.bootcss.com/assets/img/favicons/apple-touch-icon.png*/,
    "revision": "042a7e9fdd293212aca19150aef71b0d"
  },
  {
    "url": "favicon-16x16.png"/*tpa=https://v4.bootcss.com/assets/img/favicons/favicon-16x16.png*/,
    "revision": "50c62448d4014e5fb411887c05c2935b"
  },
  {
    "url": "favicon-32x32.png"/*tpa=https://v4.bootcss.com/assets/img/favicons/favicon-32x32.png*/,
    "revision": "fed84e16b6ccfe88ee7ffaae5dfefd34"
  },
  {
    "url": "https://v4.bootcss.com/assets/img/favicons/manifest.json",
    "revision": "eed73af41f4e55d335b5b3fa8c78538d"
  },
  {
    "url": "mstile-144x144.png"/*tpa=https://v4.bootcss.com/assets/img/favicons/mstile-144x144.png*/,
    "revision": "84892991321e7998ca4c80ae21175f78"
  },
  {
    "url": "mstile-150x150.png"/*tpa=https://v4.bootcss.com/assets/img/favicons/mstile-150x150.png*/,
    "revision": "61821c45a353e259bb83f9b0d338f5e8"
  },
  {
    "url": "mstile-310x150.png"/*tpa=https://v4.bootcss.com/assets/img/favicons/mstile-310x150.png*/,
    "revision": "913e1b81006831c72a7bca38e4125edb"
  },
  {
    "url": "mstile-310x310.png"/*tpa=https://v4.bootcss.com/assets/img/favicons/mstile-310x310.png*/,
    "revision": "29d79a7e648876504496211f003c4076"
  },
  {
    "url": "mstile-70x70.png"/*tpa=https://v4.bootcss.com/assets/img/favicons/mstile-70x70.png*/,
    "revision": "386d71707992eb91fc53df303e99c2e7"
  },
  {
    "url": "https://v4.bootcss.com/assets/img/favicons/safari-pinned-tab.svg",
    "revision": "6b6b78894033fd91ce75affb548d8e67"
  },
  {
    "url": "docs.min.js"/*tpa=https://v4.bootcss.com/assets/js/docs.min.js*/,
    "revision": "57d17213c9994a9ed6e58a0c00a76870"
  },
  {
    "url": "application.js"/*tpa=https://v4.bootcss.com/assets/js/src/application.js*/,
    "revision": "c8ce5772bf76f81e59448d126f4f9aa6"
  },
  {
    "url": "ie-emulation-modes-warning.js"/*tpa=https://v4.bootcss.com/assets/js/src/ie-emulation-modes-warning.js*/,
    "revision": "fe80ecce8d355bac77f7bd95639ad04a"
  },
  {
    "url": "pwa.js"/*tpa=https://v4.bootcss.com/assets/js/src/pwa.js*/,
    "revision": "4de108c33799a18cec3362c52e333eff"
  },
  {
    "url": "anchor.min.js"/*tpa=https://v4.bootcss.com/assets/js/vendor/anchor.min.js*/,
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "clipboard.min.js"/*tpa=https://v4.bootcss.com/assets/js/vendor/clipboard.min.js*/,
    "revision": "3e5e0fa949e0e7c5ed5fed7b4cc0ee00"
  },
  {
    "url": "holder.min.js"/*tpa=https://v4.bootcss.com/assets/js/vendor/holder.min.js*/,
    "revision": "6266d87979b32f717d298f7adf36984a"
  },
  {
    "url": "jquery-slim.min.js"/*tpa=https://v4.bootcss.com/assets/js/vendor/jquery-slim.min.js*/,
    "revision": "5f48fc77cac90c4778fa24ec9c57f37d"
  },
  {
    "url": "popper.min.js"/*tpa=https://v4.bootcss.com/assets/js/vendor/popper.min.js*/,
    "revision": "70d3fda195602fe8b75e0097eed74dde"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js"/*tpa=https://v4.bootcss.com/assets/js/vendor/workbox-sw.prod.v2.1.2.js*/,
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "bootstrap-grid.css"/*tpa=https://v4.bootcss.com/dist/css/bootstrap-grid.css*/,
    "revision": "29a16726680195da6a8c78f234880607"
  },
  {
    "url": "bootstrap-grid.min.css"/*tpa=https://v4.bootcss.com/dist/css/bootstrap-grid.min.css*/,
    "revision": "6ba2de34dbaa851bb52c96c7bd33352e"
  },
  {
    "url": "bootstrap-reboot.css"/*tpa=https://v4.bootcss.com/dist/css/bootstrap-reboot.css*/,
    "revision": "7dc6d49bddb587f471ed62358e743727"
  },
  {
    "url": "bootstrap-reboot.min.css"/*tpa=https://v4.bootcss.com/dist/css/bootstrap-reboot.min.css*/,
    "revision": "4e559333725069a33a9d0f3387652ea5"
  },
  {
    "url": "bootstrap.css"/*tpa=https://v4.bootcss.com/dist/css/bootstrap.css*/,
    "revision": "d59729439a203fc474f5677b8d18d8bb"
  },
  {
    "url": "bootstrap.min.css"/*tpa=https://v4.bootcss.com/dist/css/bootstrap.min.css*/,
    "revision": "450fc463b8b1a349df717056fbb3e078"
  },
  {
    "url": "bootstrap.bundle.js"/*tpa=https://v4.bootcss.com/dist/js/bootstrap.bundle.js*/,
    "revision": "6866f102282d95443edf73ca112b117b"
  },
  {
    "url": "bootstrap.bundle.min.js"/*tpa=https://v4.bootcss.com/dist/js/bootstrap.bundle.min.js*/,
    "revision": "98d2c1da1c0a495f8fc8ad144ea1d3d2"
  },
  {
    "url": "bootstrap.js"/*tpa=https://v4.bootcss.com/dist/js/bootstrap.js*/,
    "revision": "d810a38ca2781735a27cba0625a027db"
  },
  {
    "url": "bootstrap.min.js"/*tpa=https://v4.bootcss.com/dist/js/bootstrap.min.js*/,
    "revision": "14d449eb8876fa55e1ef3c2cc52b0c17"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/about/brand/index.html",
    "revision": "3e9343b9f22cc468e9de8207be3208f0"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/about/index.html",
    "revision": "7d75887d5c05abc133eba8f4df6b4842"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/about/license/index.html",
    "revision": "74f5e40d87f6372471791f71ee9d1c19"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/about/overview/index.html",
    "revision": "52b38378a95e165b8e1bb4f4e50f4430"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/about/translations/index.html",
    "revision": "4c9c8fd35c734f5138e71f1098fdca85"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/browser-bugs/index.html",
    "revision": "60c9319dfdc5a430d7b350ff7617a2e5"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/alerts/index.html",
    "revision": "c32dd2ed1af48e59f50aed9ec1e68d8a"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/badge/index.html",
    "revision": "a87bcb3051d34aca3719a9e3c410fc25"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/breadcrumb/index.html",
    "revision": "a9193d4e45a0fe44e6b0230e7539e2f5"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/button-group/index.html",
    "revision": "a6b25dedf1796fcd90e27ec465ad6332"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/buttons/index.html",
    "revision": "0c5ada80cfb5081a38cebc4f39186e88"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/card/index.html",
    "revision": "6178a14c466f9387121c4a073cbbc545"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/carousel/index.html",
    "revision": "6975453643320e195fe566fc566bc833"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/collapse/index.html",
    "revision": "4f5436b3a2270e0fdd37c0fe44b5a37a"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/dropdowns/index.html",
    "revision": "1c0c560a84355d25f31074fdf17d126a"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/forms/index.html",
    "revision": "eed08053bf9506c0872526fa7a7fc070"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/index.html",
    "revision": "90b23e8e8e4e58b70eed37110e291d31"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/input-group/index.html",
    "revision": "055c7737f7a500823a63807c46cc1626"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/jumbotron/index.html",
    "revision": "b874b14b2825c3d39699e662d811419f"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/list-group/index.html",
    "revision": "3eaadb9e03124baf2d6c56a2d6348ebf"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/modal/index.html",
    "revision": "bd2fe1c69a39414ac5570ac239acbe19"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/navbar/index.html",
    "revision": "f05e1caf6622d16a8d3ce3749c56b233"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/navs/index.html",
    "revision": "7b0a5cd6507a0dda48b38bad30ba0b72"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/pagination/index.html",
    "revision": "668576843efa802714bb253cc68efdf6"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/popovers/index.html",
    "revision": "8ad785113a70e889a2da0fbf490dbc4f"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/progress/index.html",
    "revision": "05cd786b15772673e9aa202a16677ee6"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/scrollspy/index.html",
    "revision": "827a102fbca745eec0998957183cc07f"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/components/tooltips/index.html",
    "revision": "2e3ed8945ee352ebf3a9efcedc3ed6d4"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/content/code/index.html",
    "revision": "65f0b09fa1d1a05933863989b435fb36"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/content/figures/index.html",
    "revision": "df33d9addaa18b59ccdb46a31ea7d95c"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/content/images/index.html",
    "revision": "0b40f6fbcf3c1ef3c9215845f1518952"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/content/index.html",
    "revision": "251b9bf13da2e1daf10f3b1845880c10"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/content/reboot/index.html",
    "revision": "a389c70ad00f1ce980e91273f31485c6"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/content/tables/index.html",
    "revision": "43dfe60c0dbef13a5e653fcb0d440d0d"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/content/typography/index.html",
    "revision": "1abeff7f71ffa7d2053c206d0492d450"
  },
  {
    "url": "album.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/album/album.css*/,
    "revision": "e8343131a0fefafe6ae0f37db6d10f3c"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/album/index.html",
    "revision": "ee306dba780df6bbbc65a41a921eed8a"
  },
  {
    "url": "blog.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/blog/blog.css*/,
    "revision": "cb98d3e8033940a716641516d2cb857b"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/blog/index.html",
    "revision": "a2ed4d2f91ce433338a74bd5f49e949e"
  },
  {
    "url": "carousel.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/carousel/carousel.css*/,
    "revision": "e1ef0ffa84cc98db13f90dd02b9981e7"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/carousel/index.html",
    "revision": "3efc2981b6da173142086ce9d8aac1d2"
  },
  {
    "url": "form-validation.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/checkout/form-validation.css*/,
    "revision": "d13d35a0c04021ceacd8c153719860bc"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/checkout/index.html",
    "revision": "6dce9885e791ab56d26b3c5f0a64af61"
  },
  {
    "url": "cover.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/cover/cover.css*/,
    "revision": "61f7cbbe930976e62264268abe51ebd3"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/cover/index.html",
    "revision": "b5b832918044dc3c65fa51367919c8c5"
  },
  {
    "url": "dashboard.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/dashboard/dashboard.css*/,
    "revision": "a04ae1b7ceba4aaeb3bc7fe3c72a6d40"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/dashboard/index.html",
    "revision": "0d87db1b20149ea817c06f09f03acfde"
  },
  {
    "url": "floating-labels.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/floating-labels/floating-labels.css*/,
    "revision": "5a7fc5962d7981d2c5f9af28f785a0c5"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/floating-labels/index.html",
    "revision": "e16e25d95c2a41f6d3d8ff7b94b82936"
  },
  {
    "url": "grid.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/grid/grid.css*/,
    "revision": "4cd2e5cc5e19dc692d50ed6f077154ef"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/grid/index.html",
    "revision": "1a634e4a3281204f8d46c5fdaea35a96"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/index.html",
    "revision": "6b24d54e15325f161e0a18df1fd5e08f"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/jumbotron/index.html",
    "revision": "f12ea5ddc2c4905bc50b8a705afcbce9"
  },
  {
    "url": "jumbotron.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/jumbotron/jumbotron.css*/,
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/navbar-bottom/index.html",
    "revision": "35d8cd3a5a267e316ab45f480a191eeb"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/navbar-fixed/index.html",
    "revision": "1ce40c76fb831fb9bfb81f7a04705555"
  },
  {
    "url": "navbar-top-fixed.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/navbar-fixed/navbar-top-fixed.css*/,
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/navbar-static/index.html",
    "revision": "86ce704638e9227d79683e9928ad258a"
  },
  {
    "url": "navbar-top.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/navbar-static/navbar-top.css*/,
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/navbars/index.html",
    "revision": "cb279d345c72f6f4fab4a17df396696e"
  },
  {
    "url": "navbar.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/navbars/navbar.css*/,
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/offcanvas/index.html",
    "revision": "0dc41bce7d5407fe4e54a7fe3164cbc1"
  },
  {
    "url": "offcanvas.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/offcanvas/offcanvas.css*/,
    "revision": "65b3d835fd0f90b00844adc8974be45b"
  },
  {
    "url": "offcanvas.js"/*tpa=https://v4.bootcss.com/docs/4.0/examples/offcanvas/offcanvas.js*/,
    "revision": "5c0edf2d5a4d88ec65e801c0f58ef23a"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/pricing/index.html",
    "revision": "7d57728ad57ca9de41aea23222ad5204"
  },
  {
    "url": "pricing.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/pricing/pricing.css*/,
    "revision": "1e170831b26afb7a6bcde4f0bc2cb29b"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/product/index.html",
    "revision": "3d998656a2f6de3e938b18ee6f3d98f9"
  },
  {
    "url": "product.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/product/product.css*/,
    "revision": "139ada632a48dc6b96a46a265a2cc60c"
  },
  {
    "url": "album.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/album.png*/,
    "revision": "685d5277fdf6f04aefbcbe01ba93e9ef"
  },
  {
    "url": "blog.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/blog.png*/,
    "revision": "d06dc15ae8285908ec7ba9f4b1f98a44"
  },
  {
    "url": "carousel.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/carousel.png*/,
    "revision": "dc04e087b8ad4f000fa64e266812fc0f"
  },
  {
    "url": "checkout.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/checkout.png*/,
    "revision": "030255900e0b73653cf6a2d074f17b31"
  },
  {
    "url": "cover.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/cover.png*/,
    "revision": "ece97a4eb488c46a86a67d61db25dda2"
  },
  {
    "url": "dashboard.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/dashboard.png*/,
    "revision": "2fc93187d09b5b8c342b962576eaf39e"
  },
  {
    "url": "floating-labels.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/floating-labels.png*/,
    "revision": "fae0436f9d026a67778f3a37d29b3dfc"
  },
  {
    "url": "grid.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/grid.png*/,
    "revision": "cb63b8b5fd89749a2d87342876306dd8"
  },
  {
    "url": "jumbotron.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/jumbotron.png*/,
    "revision": "0f579cb67e8c8535d8fffef7d17b7e45"
  },
  {
    "url": "navbar-bottom.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/navbar-bottom.png*/,
    "revision": "0cefd6caed82af75be57d758633d9094"
  },
  {
    "url": "navbar-fixed.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/navbar-fixed.png*/,
    "revision": "1d38f157f0bbbd90957044d30eaef242"
  },
  {
    "url": "navbar-static.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/navbar-static.png*/,
    "revision": "2ff01be7ee251fc5c7f51ccf9de5f48d"
  },
  {
    "url": "navbars.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/navbars.png*/,
    "revision": "d4fbce8e1e38d78a5134e6be05cdd4d7"
  },
  {
    "url": "offcanvas.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/offcanvas.png*/,
    "revision": "c581d49a56f3e9d0d1753195c62e719a"
  },
  {
    "url": "pricing.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/pricing.png*/,
    "revision": "e33e2f37741c6d15c99f3378e2e551ea"
  },
  {
    "url": "product.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/product.png*/,
    "revision": "af74e4f7ddfc8cf2a44a9c601881329f"
  },
  {
    "url": "sign-in.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/sign-in.png*/,
    "revision": "9e4bf345a8c21403868f70b777efb483"
  },
  {
    "url": "starter-template.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/starter-template.png*/,
    "revision": "1761d4e831e7c0659962e1abdb95421f"
  },
  {
    "url": "sticky-footer-navbar.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/sticky-footer-navbar.png*/,
    "revision": "428112965cf6826db55bcc6db07d9e5f"
  },
  {
    "url": "sticky-footer.png"/*tpa=https://v4.bootcss.com/docs/4.0/examples/screenshots/sticky-footer.png*/,
    "revision": "59b69c34997abee3d477f836d44ce8a3"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/sign-in/index.html",
    "revision": "0739de40d4fb2333772503ff6a475b18"
  },
  {
    "url": "signin.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/sign-in/signin.css*/,
    "revision": "9c798c2cdaef45f59a916c2051cbe197"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/starter-template/index.html",
    "revision": "c7e901f8203094969c3e25ff764531ca"
  },
  {
    "url": "starter-template.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/starter-template/starter-template.css*/,
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/sticky-footer-navbar/index.html",
    "revision": "7830566087ec33cf521e970266962ae2"
  },
  {
    "url": "sticky-footer-navbar.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/sticky-footer-navbar/sticky-footer-navbar.css*/,
    "revision": "c5c610f36d8c2a89e7d587880ee0cd68"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/sticky-footer/index.html",
    "revision": "7f8a7abbce45fa7d948f8fe3a41c3545"
  },
  {
    "url": "sticky-footer.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/sticky-footer/sticky-footer.css*/,
    "revision": "09630d01995ef9c0f8fc9ae622f00466"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/examples/tooltip-viewport/index.html",
    "revision": "9a79ac79c088c8913be8f1b73cad5352"
  },
  {
    "url": "tooltip-viewport.css"/*tpa=https://v4.bootcss.com/docs/4.0/examples/tooltip-viewport/tooltip-viewport.css*/,
    "revision": "59ee4352f399bfe798346b4be4a5f88f"
  },
  {
    "url": "tooltip-viewport.js"/*tpa=https://v4.bootcss.com/docs/4.0/examples/tooltip-viewport/tooltip-viewport.js*/,
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/extend/approach/index.html",
    "revision": "2d117a887fb8bcd0c012ea2c329376f9"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/extend/icons/index.html",
    "revision": "07f374bfd21bc65a13487d01a723984e"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/extend/index.html",
    "revision": "9842562b5f3c58e2b52b652f32ece2b3"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/getting-started/accessibility/index.html",
    "revision": "3ba8d1bb28e64108fbe4e1da7dbf935b"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/getting-started/best-practices/index.html",
    "revision": "8bdd5c2daefce1ffe16aac488d81d4c4"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/getting-started/browsers-devices/index.html",
    "revision": "9788f154fe13a13b7c51a87e54122ce2"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/getting-started/build-tools/index.html",
    "revision": "2595250aba751a034b1e43234e738b44"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/getting-started/contents/index.html",
    "revision": "27009ba3d14da220e895ab887c8a1288"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/getting-started/download/index.html",
    "revision": "8115ad5d607176bb9cb0389c1cd2a343"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/getting-started/index.html",
    "revision": "0c8a42b49437382f69e80425b0c7b521"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/getting-started/introduction/index.html",
    "revision": "d09a622a796250aeeb915ae50384dd24"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/getting-started/javascript/index.html",
    "revision": "12321b099f1e3a985e2c97d302df1526"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/getting-started/options/index.html",
    "revision": "b6249d5838911025579dc7eea47369cc"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/getting-started/theming/index.html",
    "revision": "d87d8d66c3bf30ed54ff2296d5c8f588"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/getting-started/webpack/index.html",
    "revision": "1764f5de35a8c8ea8430cb6ab9946434"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/history/index.html",
    "revision": "7d75887d5c05abc133eba8f4df6b4842"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/index.html",
    "revision": "0c8a42b49437382f69e80425b0c7b521"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/layout/grid/index.html",
    "revision": "cb242ba6142842135ceeffc2980f421b"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/layout/index.html",
    "revision": "c893e8a8d8a7b419719c52bd6f33ee7a"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/layout/media-object/index.html",
    "revision": "7494acf31cf6712440f2ff145ca2ebf9"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/layout/overview/index.html",
    "revision": "e40aeccb68f70df147a7700d9ccd5d7e"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/layout/utilities-for-layout/index.html",
    "revision": "972e9ba975818901b5db24251a701ecd"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/migration/index.html",
    "revision": "c8fe9fb4badd01bfaf43e547c8814197"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/team/index.html",
    "revision": "7d75887d5c05abc133eba8f4df6b4842"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/utilities/borders/index.html",
    "revision": "584256da6d61f760d55eae5e6bb6a807"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/utilities/clearfix/index.html",
    "revision": "a0ed04fcd5b473db5fb77684e8e22db7"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/utilities/close-icon/index.html",
    "revision": "b7fb8d881bba9ef1fca67bf79e61dcf5"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/utilities/colors/index.html",
    "revision": "3a5f748220f3cec9bb620eeca3d59b75"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/utilities/display/index.html",
    "revision": "5f4b2f151deffef5c1a12b46877d5124"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/utilities/embed/index.html",
    "revision": "b90613bdaaf99f1a784b21277ad9f461"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/utilities/flex/index.html",
    "revision": "e63209441472e919d1351a4dc401bed7"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/utilities/float/index.html",
    "revision": "eb831bbfe86ee2d1ce057fa5ee1b587d"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/utilities/image-replacement/index.html",
    "revision": "adc219154f99ad79731d2474392a392a"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/utilities/index.html",
    "revision": "c197f670331e7beec69ccb3ee6f8eba4"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/utilities/position/index.html",
    "revision": "dffe05591d073de660c85618274d0b35"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/utilities/screenreaders/index.html",
    "revision": "f9818fa2f4c6dead5dff05cda7e73622"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/utilities/sizing/index.html",
    "revision": "50c6d7b3ddb07fc62eba875eccbc376e"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/utilities/spacing/index.html",
    "revision": "380ec3d8893703f71b95f19ddd83ef3e"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/utilities/text/index.html",
    "revision": "67c6b8a7c7482fbe5eb0c1e8c3c8ab4c"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/utilities/vertical-align/index.html",
    "revision": "81312b9b1f92e7f86abe9263be6f8995"
  },
  {
    "url": "https://v4.bootcss.com/docs/4.0/utilities/visibility/index.html",
    "revision": "22ec31b5c826494413aff03d3228327a"
  },
  {
    "url": "https://v4.bootcss.com/docs/getting-started/index.html",
    "revision": "0c8a42b49437382f69e80425b0c7b521"
  },
  {
    "url": "https://v4.bootcss.com/docs/index.html",
    "revision": "0c8a42b49437382f69e80425b0c7b521"
  },
  {
    "url": "https://v4.bootcss.com/examples/index.html",
    "revision": "f9d89cd913abd1596e89ff1972ec4dc4"
  },
  {
    "url": "https://v4.bootcss.com/index.html",
    "revision": "e034338303946a45483ae1873f79b56f"
  },
  {
    "url": "https://v4.bootcss.com/redirects.json",
    "revision": "a9a6bd3e08f73a1c33c4a90442784994"
  },
  {
    "url": "sw.js"/*tpa=https://v4.bootcss.com/sw.js*/,
    "revision": "42f72988cbd613ae00b4a2c3390712ae"
  }
])
