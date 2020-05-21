const rarbgImg={
    "22pixx.xyz": src => src.replace("/s/","/i/")
}

$("#description img").each((i,img)=>{
    var dominio = img.src.split("/")[2]
    var link = img.parentNode.href
    console.log(img.src)
    var newSrc = rarbgImg[dominio] ? rarbgImg[dominio](img.src, link) : img.src 
    if(img.src != newSrc){
        console.log("newSrc: "+ newSrc)
        img.src = newSrc
        img.parentNode.href = newSrc
    }
})
