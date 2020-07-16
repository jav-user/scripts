// ==UserScript==
// @name Manga Fox
// @namespace Manga Fox
// @match http://fanfox.net/manga/*/*/*/1.html
// @require https://jav-user.github.io/scripts/nes/nes_functions.js?a=2
// @grant none
// ==/UserScript==

var manga, chapter, numpages, images;

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
  images = [];

  $el.find("#copy").attr("disabled", true);
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
    if (done) break;
  }
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

var doneImgs = (i) => {
  console.log(i + " iterations");
  console.log(images);

  var lines = [];

  images.forEach((img, i) => {
    var pgnum = `00000000000000${i + 1}`.substr(-5);
    var url = img.replace(/^\/\//, "https://");
    lines.push(
      `nddown "${url}==${pgnum}" "${manga}/${manga} - ${chapter}" "Manga Fox (${window.location.hostname})"`
    );
  });

  var cmd = `D:\n${lines.join("\n")}\n`;
  console.log(cmd);
  cmd.copy();
  alert("Copied " + lines.length + " images");
  $el.find("#copy").attr("disabled", false);
};

var $el = $(`
      <span class="nes_element">
      <hr class="nes_element"/>
      <button 
        class="nes_element"
        id="copy">
        Copy
     </button>
    </span>
    `);

$el.find("#copy").on("click", getPages);

$("body").prepend($el);
