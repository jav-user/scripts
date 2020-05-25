if (window.location.pathname.startsWith("/torrents.php")) {

    document.querySelectorAll(".lista2t a[title][onmouseover]").forEach((v) => {
        if (v.onmouseover) {

            var omo = v.onmouseover.toString()
            var url = omo.split("'")[2].split("\\")[0]
            var td = v.parentNode.parentNode.querySelector("td")
            td.align = "center"
            var img = v.parentNode.parentNode.querySelector("img")
            img.src = url
                //   console.log("url",url)
            var poster = url.split("/")
            poster[3] = 'posters2'
            poster[4] = poster[5] ? poster[5].substr(0, 1) : ""
            poster = poster.join("/")
            v.onmouseover = function() {
                return overlib(`<img style="max-height:500px" src="${poster}" border=0 onerror="this.src='${url}'"/>`)
            }
        }
    })


    var img = document.createElement("img")
    img.src = "https://i.imgur.com/RpqqCgl.jpg"

    for (var i = 0; i < 3; i++) {
        document.querySelector("body").append(img)
    }
    

    var seasons = function(){
        var ss=[]
        for(var i =1; i<=99;i++){
            var num = "000000"+i;
            var season ="S"+num.substr(-2)
            ss.push(season)
        }
        return ss
    }
    
    Array.from(document.querySelectorAll(".lista2t a")).filter(a=>a.href.includes("/torrent/"))
        .forEach(a=>{
        
            //var arr 
            
            seasons().forEach(season=>{
                if(a.innerText.includes("."+season+".")){
                   a.style.color="purple"
                   a.style.fontSize="12px"
                }
            })
            
            if(a.innerText.includes("ION10")) {
                a.style.color="green"
                a.style.fontSize="12px"
            }
                  //  "S01","S02","S03","S04","S05","S06","S07","S08","S09","S10",
                    //"S11","S12","S13","S14","S15","S16","S17","S18","S19","S20"

      })
}
