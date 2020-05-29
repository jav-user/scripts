if (window.location.pathname.startsWith("/torrent/")) {

    var imgPlugins = {}

    var TorrentName = null
    var TorrentSize = null
    var TorrentPoster = null
    var clicked = false
    var batch = db.batch()

    //Iniciar


    Rarbg
        .collection("imgPlugins")
        .get()
        .then(q => {

            var strPlugins = {}


            if (q.size) {
                console.log("Conected!!")
                document.querySelector("h1").style.color = "green"
                q.forEach(doc => {
                    var fn = doc.data().f
                    if (fn) {
                        strPlugins[doc.id] = fn
                        imgPlugins[doc.id] = function(imgSrc, link) {
                            console.log(doc.id, fn)
                            return eval(fn)
                        }
                    }
                })
                Lockr.set("strPlugins", strPlugins)
                
                console.log("imgPlugins", imgPlugins)
                console.log("strPlugins", strPlugins)
                doImages()
                batch.commit()
            } else {
                console.log("not connected");
                document.querySelector("h1").style.color = "purple"
                var strPlugins = Lockr.get("strPlugins")
                for (var id in strPlugins) {
                    var fn = strPlugins[id]
                    imgPlugins[id] = function(imgSrc, link) {
                        console.log(id, fn)
                        return eval(fn)
                    }
                }
                
                console.log("imgPlugins", imgPlugins)
                console.log("strPlugins", strPlugins)
                doImages()
                batch.commit()
            }





        })
        //     .catch(err => {
        //         console.log("err", err)

    // })

    var doImages = function(err) {
        document.querySelectorAll("#description img").forEach(img => {
            var dominio = img.src.split("/")[2]
            var link = img.parentNode.href
            console.log("imgSrc", img.src)
            var id = dominio.trim()
            var newSrc = imgPlugins[id] ? imgPlugins[id](img.src, link) : img.src
            var mPlug = Rarbg.collection("missingPlugins").doc(id)
            var iPlug = Rarbg.collection("imgPlugins").doc(id)
            if (img.src != newSrc) {
                console.log("newSrc: " + newSrc)
                img.src = newSrc
                img.style.maxWidth = "750px"
                img.parentNode.href = newSrc
                batch.delete(mPlug)

                batch.update(iPlug, {
                    hasf: true
                })


            } else {

                var doc = {
                    page: window.location.href,
                    imgSrc: img.src,
                    link: link,
                    date: Date.now(),
                    dateStr: new Date().toString()
                }


                batch.set(mPlug, doc)
                    //try{
                batch.set(iPlug, {
                        hasf: false
                    }, {
                        merge: true
                    })
                    //  }catch(err){console.log("err",err)}
            }
        })
    }


    // var trs = Array.from(table.children[0].querySelectorAll(":scope > tr"))
    // trs.forEach(tr=>console.log(tr.children[0].innerText))

    // var table = document.querySelectorAll("table.lista")[0]
    // var trs = Array.from(table.children[0].querySelectorAll(":scope > tr"))
    // var queryTD = function(q) {
    //     return trs.filter(tr => tr.children[0].innerText.trim().toLowerCase().startsWith(q.toLowerCase()))[0].children[1]
    // }


    //TorrentName
    var h1 = document.querySelector("h1")
    TorrentName = h1.innerText

    //TorrentSize
    var tds = document.querySelectorAll("table tr td.lista")
    var arr = Array
        .from(tds)
        .map(td => td.innerText.trim())
        .filter(txt => txt.endsWith("MB") || txt.endsWith("GB"))
    TorrentSize = arr[0]


    h1.innerText = TorrentName + ` [${TorrentSize}]`

    //TorrentPoster
    var tdPoster = Array.from(document.querySelectorAll("td"))
        .filter(td => td.innerText.trim().startsWith("Poster"))[0]

    TorrentPoster = tdPoster.parentNode.querySelector("img").src

    //MagnetOnClick
    var as = document.querySelectorAll("a[href]")
    var mgt = Array.from(as).filter(a => a.href.startsWith("magnet:"))[0]
    var tor = Array.from(as).filter(a => a.href.endsWith(".torrent"))[0]

    mgt.onclick = function() {

        var torrent = {
            name: TorrentName,
            size: TorrentSize,
            url: window.location.href,
            poster: TorrentPoster,
            torrent: tor.href,
            magnet: mgt.href,
            date: Date.now(),
            dateStr: new Date().toString(),
        }

        if (!clicked) {
            Rarbg.collection("Torrents").doc(`${TorrentName} [${TorrentSize}]`).set(torrent)
                .then(r => {
                    clicked = true
                    mgt.parentNode.style.backgroundColor="#B9E5FF"
                    console.log(mgt.parentNode)
                    console.log("clicked")
                })

        } else {
            console.log("Already clicked!!")
        }

        // clicked = true
    }



}
