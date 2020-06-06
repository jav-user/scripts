var LINES = "";

async function getLastMangaChapters(last) {
  last = last ? last : 5;
  var $chapters = Array.from($(".chapter-name").slice(0, last)).reverse();
  var urls = {};
  var title = $("title").text().toValidFileName();
  var size = $chapters.length;
  for (const [i, chapter] of $chapters.entries()) {
    var url = chapter.href;
    var name = chapter.innerText;
    var folder = name.toValidFileName();
    console.log(size - i, folder);
    await new Promise((solve) => {
      $.get(url)
        .then((html) => {
          const imgs = [];
          const $html = $(html);
          const $imgs = $html.find(".container-chapter-reader img");
          console.log(url);

          $imgs.each((j, img) =>
            imgs.push(img.src || img.getAttribute("data-src"))
          );

          urls[folder] = imgs;
          console.log("imgs " + imgs.length);
          setTimeout((_) => {
            solve();
          }, 1500);
          //                 solve()
        })
        .catch((error) => {
          console.log("error", error);
          solve();
        });
    });

    var done = Object.keys(urls).length;
    var total = last;
    var percent = (done / total) * 100;
    var display = `Done ${done} of ${total} (${
      Math.round(percent * 100) / 100
    }%)`;
    $(".last_info span").text(display);
    // $list.text(list_text+" "+loading + "%")
  }

  var lines = [];

  for (const key in urls) {
    let chpu = urls[key];
    chpu.forEach((imgu, i) => {
      let num = ("000000000" + (i + 1)).substr(-5);
      let line = `downf "${imgu}=${num}" "${title}/${key}" "${window.location.host}"`;
      lines.push(line);
    });
  }

  return `D:
downn\n${lines.join("\n")}\n`;
}

var $form = $(`
   <div  class="last_info" style="display:none">
        <span></span>
        <button 
            id="copy_btn" 
            class="last_form">Copy</button>
   </div>
    <input  id="last_input" 
            class="last_form" 
            type='number'
            value=5
            min=1
            placeholder="Last Chapters"/>
    <button 
            id="last_btn" 
            class="last_form">Get</button>
`);
$(".last_form").remove();
$(".last_info").remove();
$(".info-image > .img-loading").after($form);
$("#last_btn").on("click", function () {
  $(".last_info").show();
  $(".last_form").hide();

  var last_count = $("#last_input").val();
  getLastMangaChapters(last_count).then((lines) => {
    LINES = lines;
    $(".last_form").show();
  });
  alert("Getting last " + last_count + " chapters");
});

$("#copy_btn").on("click", function () {
  nes.copy(LINES);
  alert("Copied!");
  $(".last_info").hide();
});
