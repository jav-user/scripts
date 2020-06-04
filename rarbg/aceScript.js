// ==UserScript==
// @name Rarbg
// @namespace Rarbg
// @match *://rarbgweb.org/*
// @grant none
// @require https://jav-user.github.io/scripts/nes/nes_functions.js?a=2
// @require https://jav-user.github.io/scripts/rarbg/aceScript.js?a=1
// ==/UserScript==

nes.addScript("https://code.jquery.com/jquery-3.5.1.min.js","jquery")
nes.addScript("https://jav-user.github.io/lockr/lockr.js","lockr")
nes.addScript("https://jav-user.github.io/scripts/nes/nes_functions.js","nes")
nes.addScript("https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js","moment")
nes.addScript("https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.25/moment-timezone-with-data.min.js","moment-tz",.5)

nes.addScript("https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js","firebase-app")
nes.addScript("https://www.gstatic.com/firebasejs/7.14.4/firebase-database.js","firebase-database",1)
nes.addScript("https://www.gstatic.com/firebasejs/7.14.4/firebase-firestore.js","firebase-firestore",1)

nes.addScript("https://jav-user.github.io/scripts/fire/config.js","fire-config",1.5)
nes.addScript("https://jav-user.github.io/scripts/rarbg/init.js","rarbg-init",1.75)
nes.addScript("https://jav-user.github.io/scripts/rarbg/torrents.js","rarbg-torrents",2)
nes.addScript("https://jav-user.github.io/scripts/rarbg/torrent.js","rarbg-torrent",2)


