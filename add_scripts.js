var addScript=function(src,id){
    var jq=document.createElement("script")
    jq.id=id
    jq.src=src
    var head=document.querySelector("head")
    if(!head.querySelector(`script[src="${src}"]`))
         head.appendChild(jq)
}

addScript("https://code.jquery.com/jquery-3.5.0.min.js","jquery")
