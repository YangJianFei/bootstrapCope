/* eslint no-console:off */

(function () {
  'use strict'

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js'/*tpa=https://v4.bootcss.com/sw.js*/).then(function (registration) { // eslint-disable-line compat/compat
        console.log('ServiceWorker registration successful with scope: ', registration.scope)
      }).catch(function (err) {
        console.log('ServiceWorker registration failed: ', err)
      })
    })
  } else {
    console.log('Service workers are not supported.')
  }
}())
