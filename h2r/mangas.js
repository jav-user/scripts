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
                                                  //         a.target="_blank"
                                                           a.onclick=wopen                                                          )
    document.querySelectorAll("a.title").forEach(a=>
                                                // a.target="_blank"
                                                 a.onclick=wopen
                                                )
    
    categories.forEach((category) => {
        var text = category.innerText.toLowerCase();
        // if(text == "paizuri") title.style.color="red"
        // if (text == "censored") title.style.color = "#00aae4"; //whiteblue
        if (text == "censored") title.style.color = "orange"
        if (text == "partial censorship") title.style.color =  "yellow";
        if (text == "un-censored") title.style.color =   "#0ED228"; //green

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

document.querySelector("a.btn-circle").target="_blank"
