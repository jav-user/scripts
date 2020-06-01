var whiteList = [
    "bath",
    "bathroom intercourse",
    "brother and sister",
    "defloration",
    "happy sex",
    "harem",
    "incest",
    "incest as a subplot",
    "partial censorship",
    "romance",
    "school girls",
    "school life",
    "secret crush",
    "serialized",
    "un-censored",
    "x-ray",
];
var blackList = [
    "bestiality",
    "censored",
    "furry",
    "futanari",
    "shemale",
    "yaoi",
];

document.querySelectorAll(".book-grid-item").forEach((item) => {
    var title = item.querySelector(".title-text");
    var categories = item.querySelectorAll(".cat-container a.btn.btn-custom");
    var img = item.querySelector("img");
    if (item.className.includes("bookmarked")) {
        img.style.opacity = "0.5";
        title.parentNode.style.background = "rgba(15, 20, 78, 0.75)";
    }
    
    if(title.innerText.trim()==""){
        title.innerText="["+img.alt+"]"
    }
    item.title = title.innerText
    
    var wopen = "window.open(window.location.href,'_blank');window.open(this.href,'_self');"

    
    document.querySelectorAll(".overlay-button a").forEach(a=>
                                                           a.target="_blank"
                                                        //   a.onclick=wopen  
                                                          )
    document.querySelectorAll("a.title").forEach(a=>
                                                a.target="_blank"
                                                 //a.onclick=wopen
                                                )
    
    categories.forEach((category) => {
        var text = category.innerText.toLowerCase();
        var rose = "#E8ADAA"
        var green = "#0ED228"
        var whiteblue = "#00aae4"
        var yellow = "yellow"
        var orange = "orange"
        // if(text == "paizuri") title.style.color="red"
        // if (text == "censored") title.style.color = "#00aae4"; //whiteblue
        if (text == "censored") title.style.color = rose
        if (text == "partial censorship") title.style.color =  orange
        if (text == "un-censored") title.style.color = yellow

        if (whiteList.indexOf(text) != -1) {
            category.style.color = "yellow";
            category.style.fontWeight="bold";
        }

        if (blackList.indexOf(text) != -1) {
            category.style.color = "red";
            category.style.fontWeight="bold";
        }
    });
});


//Manga

var btns_circle = document.querySelectorAll("a.btn-circle")

btns_circle.forEach((btn,i)=>{
    btn.target="_blank"
    setTimeout(()=>{
        btn.click()
    },(i+1)*1000)
})

//Down
 var btn_download =  document.getElementById("dl-button")
 var url = window.location.href
 if(url.includes("/download/")) btn_download.click()


var bookmark = document.querySelectorAll(".dropdown-menu .usrBookmark")[0]
if(bookmark) bookmark.click()

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
    document.querySelector("body").onclick = () => {
        toCopy.copy();
    };
}

 
