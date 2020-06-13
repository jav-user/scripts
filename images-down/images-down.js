// ==UserScript==
// @name imagesDown
// @namespace imagesDown

// @grant none
// @require https://jav-user.github.io/scripts/nes/nes_functions.js?a=6
// @require https://jav-user.github.io/scripts/images-down/images-down.js?a=6
// ==/UserScript==

var fsDomain = null;

nes.addScript("https://jav-user.github.io/scripts/nes/nes_functions.js", "nes");
nes.addScript("https://jav-user.github.io/scripts/nes/nes_manga.js", "nesmg");
nes.addScript(
  "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.js",
  "cryptoJs"
);
nes.addScript(
  "https://jav-user.github.io/scripts/fire/addconfig.js",
  "fireconfig",
  0.5
);


var createGUI = function (query, rx) {
  console.log("$", $);
  $ = jQuery;
  var queryDefault = `Array.from($("img")).map(img=>img.src).unique()`;
  query = query ? query : queryDefault;

  var folder = $("title").text().toValidFileName() + " $pp";

  if (!rx) {
    rx = window.location.pathname;
    rx = rx.replace(/\/$/, "");
    rx = `^${rx}/{0,1}$`;
  }

  //let _rx = new RegExp(rx)
  console.log(query, rx);
  var $el = $(`
    <div class="nes-custom">
      <hr/>
        <button id="toggle-show">Show/Hide</button> 
        <button id="get-imgs" class="nes-form">Get Images</button>
         <hr class="nes-form"/>
         <span class="nes-form">
        <b>Query:</b> 
          <input id="query" type="text" value='${query}' size="${query.length}"/>
          <button id="query-test" class="nes-form">Test</button> 
          <button id="query-default" class="nes-form">Default</button> 
          <button name="save" class="nes-form">Save</button> 
        <br/><br/>
        <b>Folder:</b> 
          <input id="folder" type="text" value='${folder}' size="${folder.length}"  />
          <button id="folder-default" class="nes-form">Default</button> 
        <br/><br/>
        <b>Match:</b> 
          <input id="rx" type="text" value="${rx}" size="${rx.length}"  />
          <button id="rx-default" class="nes-form">Default</button> 
          <button name="save" class="nes-form">Save</button> 
        </span>
    </div>
`);

  $query = $el.find("#query");
  $btnQueryTest = $el.find("#query-test");
  $btnQueryDefault = $el.find("#query-default");
  $btnGetImgs = $el.find("#get-imgs");

  $folder = $el.find("#folder");
  $btnFolderDefault = $el.find("#folder-default");

  $rx = $el.find("#rx");
  $btnRxDefault = $el.find("#rx-default");

  $btnSave = $el.find("[name='save']");

  $btnQueryTest.on("click", () => {
    console.clear();
    let query = $query.val().trim();
    let imgs = getImgsByQuery(query);
    console.log("imgs", imgs);
    alert(`Tested ${imgs.length} images!!`);
  });

  $btnQueryDefault.on("click", () => {
    $query.val(query);
  });

  $btnGetImgs.on("click", () => {
    let query = $query.val().trim();
    let imgs = getImgsByQuery(query);
    console.log("imgs", imgs.join("\n"));
    let folder = $folder.val().trim().toValidFileName();
    let cmd = getLines(imgs, folder);
    console.log("cmd", cmd);
    alert(`Got ${imgs.length} images!!`);
    nes.copy(cmd);
  });

  $btnFolderDefault.on("click", () => {
    $folder.val(folder);
  });

  $rx.on("keyup", function () {
    matchPath($rx);
  });

  $btnRxDefault.on("click", () => {
    $rx.val(rx);
    matchPath();
  });

  $btnSave.on("click", () => {
    let query = $query.val().trim();
    let rx = $rx.val().trim();
    let matches = window.location.pathname.match(rx);
    if (matches) {
      var pathid = CryptoJS.MD5(rx).toString();
      fsDomain.collection("paths").doc(pathid).set({
        rx: rx,
        query: query,
        date: Date.now(),
      });
    } else {
      alert("No match!!");
    }
  });

  var matchPath = () => {
    var test = window.location.pathname.match($rx.val());
    console.log($rx.val());
    if (test) {
      $rx.css("color", "green");
    } else {
      $rx.css("color", "purple");
    }
  };

  matchPath($el.find("#rx"));

  $el.find("#toggle-show").on("click", function () {
    $el.find(".nes-form").fadeToggle();
  });

  $el.find("input").on("keyup", function () {
    let val = $(this).val();
    $(this).prop("size", val.length || 1);
  });

  $el.find("button").css("fontWeight", "bold");

  $("body").prepend($el.hide().fadeIn(1000));
  $el.find(".nes-form").hide();
};



var getImgsByQuery = function (query) {
  try {
    console.log("query", query);
    var imgs = eval(query);
    return imgs;
  } catch (err) {
    alert("Error at getImgsByQuery");
    console.log("error at getImgsByQuery: ", err);
    throw err;
    return null;
  }
};

var getLines = function (imgs, folder) {
  var pp = imgs.length + "pp";
  folder = folder.replace("$pp$", pp);
  var lines = imgs.map((img, i) => {
    var num = ("00000000" + (i + 1)).substr(-5);
    let line = `${img}=${num}`;
    return `nddown "${line}" "${folder}" "${window.location.hostname}"`;
  });
  return `D:\n${lines.join("\n")}\n`;
};

window.onload = function () {
  setTimeout((_) => {
    fsDomain = db.collection("getimgs_domains").doc(window.location.hostname);
    fsDomain
      .collection("paths")
      .orderBy("date", "desc")
      .get()
      .then(function (qs) {
        var paths = qs.docs;
        var path = {};
        for (var sn of paths) {
          var _path = sn.data();
          if (window.location.pathname.match(_path.rx)) {
            path = _path;
            break;
          }
        }

        createGUI(path.query, path.rx);
        console.log(path);
      });
  }, 3.5 * 1000);
};
