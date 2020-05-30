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

nes.addScript("https://code.jquery.com/jquery-3.5.1.min.js","jquery")
nes.addScript("https://jav-user.github.io/lockr/lockr.js","lockr")
nes.addScript("https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js","firebase-app")
nes.addScript("https://www.gstatic.com/firebasejs/7.14.4/firebase-database.js","firebase-database",0.5)
nes.addScript("https://www.gstatic.com/firebasejs/7.14.4/firebase-firestore.js","firebase-firestore",0.5)

nes.addScript("https://jav-user.github.io/scripts/fire/config.js","fire-config",1)
nes.addScript("https://jav-user.github.io/scripts/rarbg/init.js","rarbg-init",1.5)
nes.addScript("https://jav-user.github.io/scripts/rarbg/torrents.js","rarbg-torrents",2)
nes.addScript("https://jav-user.github.io/scripts/rarbg/torrent.js","rarbg-torrent",2)


