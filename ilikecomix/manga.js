//$("#btn_copy").remove()

var $btn = $("<button id='btn_copy'>Copy All</button>")

$(".post-inner.clearfix > h1").after($btn)

$("#btn_copy").on("click",function(){
    var imgurls = Array.from($(".dgwt-jg-item > a")).map((a)=>(a.href))
    nesMg.getCmd(imgurls)
    nes.copy(CMD)
    alert(NUM + " images copied!")
})

/*
$("img[src]").each((i,img)=>{
     var $img = $(img)
     var src = $($img).attr("src")
     src = src.includes("/th/") ? src.replace("/th/","/i/") : src
     $img
        .parent().parent()
        .attr("href", src)
        .addClass("dgwt-jg-item") 
})

*/
