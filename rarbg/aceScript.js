// ==UserScript==
// @name Rarbg
// @namespace Rarbg
// @match *://rarbgweb.org/*
// @grant none
// @require https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js
// @require https://www.gstatic.com/firebasejs/7.14.4/firebase-database.js
// @require https://www.gstatic.com/firebasejs/7.14.4/firebase-firestore.js
// @require https://code.jquery.com/jquery-3.5.1.min.js
// @require https://jav-user.github.io/scripts/fire/config.js?a=12
// @require https://jav-user.github.io/lockr/lockr.js?a=1
// @require https://jav-user.github.io/scripts/rarbg/init.js?a=12
// @require https://jav-user.github.io/scripts/rarbg/torrents.js?a=true
// @require https://jav-user.github.io/scripts/rarbg/torrent.js?a=35
// ==/UserScript==


nes.addScript("https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js","firebase-app")
nes.addScript("https://www.gstatic.com/firebasejs/7.14.4/firebase-database.js","firebase-database")
nes.addScript("https://www.gstatic.com/firebasejs/7.14.4/firebase-firestore.js","firebase-firestore")
nes.addScript("https://code.jquery.com/jquery-3.5.1.min.js","jquery")
nes.addScript("https://jav-user.github.io/lockr/lockr.js","lockr")

setTimeout(()=>{
  nes.addScript("https://jav-user.github.io/scripts/fire/config.js","fire-config")
  nes.addScript("https://jav-user.github.io/scripts/rarbg/init.js","rarbg-init")
  nes.addScript("https://jav-user.github.io/scripts/rarbg/torrents.js","rarbg-torrents")
  nes.addScript("https://jav-user.github.io/scripts/rarbg/torrent.js","rarbg-torrent")
},1000)

