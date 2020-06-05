var ext = ""
RES =""
var getImgs = function(){
ext = ext ? "."+ext : ""
var imgs = Array
                .from(document
                .querySelectorAll(
".gallery-item-visible.gallery-item.gallery-item-hidden.gallery-item-preloaded"))
                .map(img=>img.src)
                .filter((el,i,a)=>a.indexOf(el)==i)


               
var title = document.querySelector("title").innerText
var dominio = window.location.host

var lines = imgs.map((img,i)=>{
    var name =("000000000" +(i+1)).substr(-5) + ext
    var line = (`downf "${img}=${name}" "${title} _PAGES_" "${dominio}"` )
    return line
})

var res = lines.join("\n")+"\n"
res = `D:
cd D:/Down/node\n` + res 
res = res.replace(/_PAGES_/g, `${imgs.length}pp`)
//res = ""
res = res + `webpdir "${dominio}/${title} ${imgs.length}pp"\n`
console.log(res)
console.log(imgs.length)
// copy(res)
RES = res
return res
}
//copy(getImgs())
var interval = setInterval(()=>{console.clear();getImgs()},10*1000)

var copiar = function

document.querySelector("#comp-js277b4gimgimage").onclick = function(){

}
