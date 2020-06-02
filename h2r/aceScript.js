// ==UserScript==
// @name H2R
// @namespace H2R
// @match *://hentai2read.com/*
// @grant none
// @require https://jav-user.github.io/scripts/nes/nes_functions.js?a=2
// @require https://jav-user.github.io/scripts/h2r/aceScript.js?a=1
// ==/UserScript==

var pathsMangas = ["bookmark", "hentai-list"];

var pathsNoManga = [
	"documentation",
	"faqs",
	"favorite",
	"gaming",
	"hentai-search",
	"profile",
	"ranking",
	"reading-list",
	"tag-doujnshi",
];

var path = window.location.pathname;
path = path.substr(-1) == "/" ? path : path + "/";

var pathsMangas = pathsMangas.map((el) => `/${el}/`);
var pathsNoManga = pathsNoManga.map((el) => `/${el}/`);

var isMangas = path.startsWithSome(pathsMangas) || path == "/";
var isDownload = path.startsWith("/download/");
var isManga = !isMangas && !isDownload && !path.startsWithSome(pathsNoManga);

nes.addScript('https://code.jquery.com/jquery-3.5.1.min.js','jq')
nes.addScript("https://jav-user.github.io/scripts/nes/nes_functions.js","jq")

if(isMangas) nes.addScript("https://jav-user.github.io/scripts/h2r/mangas.js","h2r-mangas",1);	

if(isManga) nes.addScript("https://jav-user.github.io/scripts/h2r/manga.js","h2r-manga",1);

if(isDownload) nes.addScript("https://jav-user.github.io/scripts/h2r/download-manga.js","h2r-download",1);



