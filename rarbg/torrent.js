if (window.location.pathname.startsWith("/torrent/")) {

    var imgPlugins = {}
    var batch = db.batch()

    Rarbg
        .collection("imgPlugins")
        .get()
        .then(q => {
            q.forEach(doc => {
                imgPlugins[doc.id] = function(imgSrc, link) {
                    var fn = doc.data().f
                    console.log(doc.id, fn)
                    return eval(fn)
                }
            })

            document.querySelectorAll("#description img").forEach(img => {
                var dominio = img.src.split("/")[2]
                var link = img.parentNode.href
                console.log("imgSrc", img.src)
                var id = dominio
                var newSrc = imgPlugins[id] ? imgPlugins[id](img.src, link) : img.src
                if (img.src != newSrc) {
                    console.log("newSrc: " + newSrc)
                    img.src = newSrc
                    img.parentNode.href = newSrc
                } else {
                    var ref = Rarbg.collection("missingPlugins").doc(id)
                    var doc = {
                        page: window.location.href,
                        imgSrc: img.src,
                        link: link,
                        date: Date.now(),
                        dateStr: new Date().toString()
                    }

                    batch.set(ref, doc)
                }
            })
            batch.commit()
        })


    var tds = Array.from(document.querySelectorAll("table tr td.lista")).map(td => td.innerText.trim()).filter(txt => txt.endsWith("MB") || txt.endsWith("GB"))
    var h1 = document.querySelector("h1")
    h1.innerText = h1.innerText + ` [${tds[0]}]`
}



















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






/*
var rarbgImg={
    "22pixx.xyz": src => src.replace("/s/","/i/")
                            .replace("/os/","/o/"),
    "imagecurl.com": src => src.replace("_thumb",""),
}
*/
