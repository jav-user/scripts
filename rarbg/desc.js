const rarbgImg={
    "22pixx.xyz": url => url.replace("/s/","/i/")
}

$("#description img").each((i,img)=>{
    var dominio = img.src.split("/")[2]
    console.log(img.src)
    var src = rarbgImg[dominio] ? rarbgImg[dominio](img.src) : img.src 
    img.src=src
    img.parentNode.href=src
})
