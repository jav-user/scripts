// ==UserScript==
// @name Manga Fox
// @namespace Manga Fox
// @match http://fanfox.net/manga/*/*/*/1.html
// @require https://jav-user.github.io/scripts/nes/nes_functions.js
// @require https://jav-user.github.io/scripts/mangaplugins/fanfox.net/chapter.js
// @grant none
// ==/UserScript==

var manga, chapter, numpages, images, cmd, lines;

function getPages() {
  // manga = window.location.pathname
  //   .split("/")[2]
  //   .replace(/[_]/g, " ")
  //   .toCapitalize();

  manga = $(".reader-header-title-1 a").text();

  chapter = window.location.pathname.split("/")[4].replace(/[a-z]/g, "");

  numpages = Array.from($("a[data-page]"))
    .map((a) => $(a).attr("data-page"))
    .sort((a, b) => a - b)
    .pop();
  // if (images.length == numpages) {
  //   doneImgs(numpages);
  //   return false;
  // }
  images = [];

  $el.find("#getpages").attr("disabled", true);
  doAjaxImgs();
}

async function doAjaxImgs() {
  var $data = {
    url: "chapterfun.ashx",
    data: {
      cid: chapterid,
      page: 1,
      key: $("#dm5_key").val(),
    },
    type: "GET",
  };
  for (var i = 1; i <= numpages; i++) {
    $data.data.page = i;
    console.log("i... " + i);
    var done = await $.ajax($data).then(ajaxImgs);
    var percent = images.length/(numpages / 100);
    var txt =`Got... ${Number.parseFloat(percent).toFixed(2)}%`
    $getpages.text(txt);
    console.log(txt)

    if (done) break;
  }
  // $getpages.text("Get pages");
  doneImgs(i);
}

var ajaxImgs = (msg) => {
  eval(msg);
  console.log("d", d.length);
  d.forEach((imgu) => images.push("https:" + imgu));
  images = images.unique();
  console.log("images..." + images.length);
 
  return images.length == numpages;
};

var doneImgs = (it) => {
  console.log(it + " iterations");
  console.log(images);

  lines = [];

  images.forEach((img, i) => {
    var pgnum = `00000000000000${i + 1}`.substr(-5);
    var url = img.replace(/^\/\//, "https://");
    lines.push(
      `nddown "${url}==${pgnum}" "${manga}/${manga} - ${chapter} ${images.length}pp" "Manga Fox (${window.location.hostname})"`
    );
  });

  cmd = `D:\n${lines.join("\n")}\n`;

  // alert("Got " + lines.length + " pages");
  $el.find("#getpages").attr("disabled", false);
  $el.find("#copy").attr("disabled", false);
  // var sw = confirm("Copy?")
  // if(sw){ copyCmd()}
};

function copyCmd() {
  console.log(cmd);
  cmd.copy();
  alert("Copied " + lines.length + " pages");
}

var $el = $(`
      <span class="nes_element">
      <hr class="nes_element"/>
      <button 
        class="nes_element"
        id="getpages">
        Get Pages
     </button>
      <button 
        class="nes_element"
        id="copy" disabled>
        Copy
     </button>
    </span>
    `);

var $getpages = $el.find("#getpages");
$getpages.on("click", getPages);

var $copy = $el.find("#copy");
$copy.on("click", copyCmd);

$("body").prepend($el);
