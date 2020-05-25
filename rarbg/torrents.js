if (window.location.pathname.startsWith("/torrents.php")) {
    
     String.prototype.toByte=function(){
     var str = this.toString()
     var bytes=0
     var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
     sizes.forEach((size,i)=>{
        if(str.endsWith(size)){
            bytes = str.replace(size,"").trim()*(Math.pow(1000,i))
            return false
        }
     })
        return bytes
    }



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
        
            var size = a.parentNode
                         .parentNode
                         .children[3]
            var bytes=size.innerText.toByte()
            
            if(bytes<"10GB".toByte()){
                seasons().forEach(season=>{
                    if(a.innerText.includes("."+season+".")){
                       a.style.color="purple"
                       a.style.fontSize="12px"
                       size.style.color="purple"
                       size.style.fontWeight="bold"
                    }
                })
            
            if(a.innerText.includes("ION10")) {
                    a.style.color="green"
                    a.style.fontSize="12px"
                    size.style.color="green"
                    size.style.fontWeight="bold"
                }
            }

      })
}
