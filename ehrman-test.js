
var urls=[]
var errors=[]

var addScript=function(src,id){
    var jq=document.createElement("script")
    jq.id=id
    jq.src=src
    var head=document.querySelector("head")
    if(!head.querySelector(`script[src="${src}"]`))
         head.appendChild(jq)
}

addScript("https://code.jquery.com/jquery-3.5.0.min.js","jquery")



clear()



var downloadFile=function(data){

var req = new XMLHttpRequest();
  req.open("GET", data.pdf, true);
  req.responseType = "blob";

  req.onload = function (event) {
    var blob = req.response;
    console.log(blob.size);
    var link=document.createElement('a');
    link.href=window.URL.createObjectURL(blob);
    link.download=data.file;
    link.click();
  };

  req.send();

}

var getMonth=function(m){

var months={}
months["JAN"]="01"
months["FEB"]="02"
months["MAR"]="03"
months["APR"]="04"
months["MAY"]="05"
months["JUN"]="06"
months["JUL"]="07"
months["AUG"]="08"
months["SEP"]="09"
months["OCT"]="10"
months["NOV"]="11"
months["DEC"]="12"

return months[m]

}

var getDay=function(n){
  return ('0000' + n).slice(-2);
}

var ajax=function(url){

$.get(url,function(res){
var vm={}
 var doc = $(res)

var dt=doc.find(".post_date")
var d=dt.find(".day").text()
var day = getDay(d)
var m = dt.find(".month").text()
var month= getMonth(m)
var year=dt.find(".year").text()

vm.dt=`${year}-${month}-${day}`
 vm.title=doc.filter('title').text().split("–")[0]+"(ehrmanblog.org)"
 vm.pdf = doc.find(".dkpdf-button")[0].href
 vm.next = doc.find(".wp-post-navigation-pre a")[0].href
vm.file=vm.dt+" "+vm.title+".pdf"
vm.urls=doc.find("article a").map((i,v)=>v.href).filter((i,v)=>!v.includes("ehrmanblog.org"))
$.merge(urls,vm.urls)
console.log(vm)
downloadFile(vm)
setTimeout(function(){
 //clear()
 ajax(vm.next)
},3*1000)

// console.log(doc)
}).fail(function(err){
console.log("error",err)
errors.push(url)
setTimeout(function(){
 if(errors.length<=30){
    ajax(url)
 }
},10*1000)
}) 


} 

ajax("https://ehrmanblog.org/ben-witherington-critique/")
