var imgPlugins = {}
var missingPlugins = {}

Rarbg
    .child("imgPlugins")
    .once("value")
    .then(s => {
        s.forEach(sn => {
            imgPlugins[sn.key] = function(imgSrc, link) {
                return eval(sn.val())
            }
        })

        document.querySelectorAll("#description img").forEach(img => {
            var dominio = img.src.split("/")[2]
            var link = img.parentNode.href
            console.log("imgSrc", img.src)
            var id = encrypt(dominio)
            var newSrc = imgPlugins[id] ? imgPlugins[id](img.src, link) : img.src
            if (img.src != newSrc) {
                console.log("newSrc: " + newSrc)
                img.src = newSrc
                img.parentNode.href = newSrc
            } else {
                missingPlugins[id] = {
                    page: window.location.href,
                    imgSrc: img.src,
                    link: link
                }
            }
        })

        Rarbg.child("missingPlugins").update(missingPlugins)

    })

/*
var rarbgImg={
    "22pixx.xyz": src => src.replace("/s/","/i/")
                            .replace("/os/","/o/"),
    "imagecurl.com": src => src.replace("_thumb",""),
}
*/
