var imgPlugins = {}
var batch = db.batch()
    // var missingPlugins = {}

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

/*
var rarbgImg={
    "22pixx.xyz": src => src.replace("/s/","/i/")
                            .replace("/os/","/o/"),
    "imagecurl.com": src => src.replace("_thumb",""),
}
*/
