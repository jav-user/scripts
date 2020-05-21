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

}
