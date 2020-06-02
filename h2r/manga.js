

//Manga
var clicked = false

var openDownloads = function(){
    var btns_circle = document.querySelectorAll("a.btn-circle")

    btns_circle.forEach((btn,i)=>{
        btn.target="_blank"
        setTimeout(()=>{
            btn.click()
        },(i+1)*1000)
    })
}


var clickBookmark=function(){
    var bookmark = document.querySelectorAll(".dropdown-menu .usrBookmark")[0]
    if(bookmark) bookmark.click()
}
/*
var lastFile = document.querySelectorAll(".nav-chapters .text-muted small")[0];
if (lastFile) {
    var lastDate = lastFile.innerText;
    var dt = lastDate
        .split("]")[1]
        .replace("about", "")
        .replace("ago", "")
        .replace("s", "")
        .replace("minute", "m")
        .replace("hour", "h")
        .replace("day", "d")
        .replace("week", "W")
        .replace("month", "M")
        .replace("year", "Y")
        .replace(/ /g, "");

    var cpt = lastFile.parentNode.parentNode.innerText.split(" ")[0];

    var h3 = Array.from(document.querySelectorAll(".block-title")).filter(
        (h3) => h3.innerText.trim() == "DISCUSSION"
    )[0];
    var toCopy = `${cpt}:${dt}`;

    h3.innerText = `DISCUSSION: ${toCopy}`;
    var bookmark = document.querySelectorAll(".dropdown-menu .usrBookmark")[0]
    bookmark.onclick = () => {
        if(!clicked){
             toCopy.copy();
             //clickBookmarks()
             openDownloads()
             clicked = true
        }
       
    };
}*/

var mangaInfo = {};
var $mangaInfo = $(".list.list-simple-mini");
var $lis = $mangaInfo.find("li.text-primary");
$lis.each((i, li) => {
    var key = $(li).find("b").text().toLowerCase().trim();
    mangaInfo[key] = [];
    var $tags = $(li).find("a.tagButton");
    $tags.each((i, tag) => {
        mangaInfo[key].push({
            name: tag.innerText.toLowerCase().trim(),
            url: tag.href,
        });
    });
});

var downManga = function () {
    //var categories = mangaInfo["category"].map(cat=>{cat.name.includes()})
};

var $li = $(`<li class='text-primary'>`);
$li.append(`<b>Action</b>`);
var $button = $(`<button class='tagButton'>`);
$button.text("Download Manga");
$button.on("click", () => alert("parecfalso"));
$li.append($button[0]);

$mangaInfo.prepend($li[0]);
console.log($li[0]);

