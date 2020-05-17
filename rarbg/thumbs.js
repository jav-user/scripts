//rarbg.com thumbnails

document.querySelectorAll("a[title][onmouseover]").forEach((v)=>{
if(v.onmouseover){
 var omo=v.onmouseover.toString()
 var url=omo.split("'")[2].split("\\")[0]
 v.parentNode.parentNode.querySelector("img").src=url
 //v.onmouseover=null
}

})
