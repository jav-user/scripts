const rarbgImg={
    "22pixx.xyz": src => src.replace("/s/","/i/")
}

$("#description img").each((i,img)=>{
    var dominio = img.src.split("/")[2]
    var link = img.parentNode.href
    console.log(img.src)
    var src = rarbgImg[dominio] ? rarbgImg[dominio](img.src, link) : img.src 
    if(img.src!=src){
        img.src=src
        img.parentNode.href=src
    }
})
