//$("#btn_copy").remove()

var $btn = $("<button id='btn_copy'>Copy All</button>")

$(".post-inner.clearfix > h1").after($btn)

$("#btn_copy").on("click",function(){
    var imgurls = Array.from($(".dgwt-jg-item > a")).map((a)=>(a.href))
    nesMg.getCmd(imgurls)
    nes.copy(CMD)
    alert(NUM + " images copied!")
})


$("img[src]").each((i,img)=>{
     var $img = $(img)
     var src = $($img).attr("src")
     src = src.includes("/th/") && src.includesSome(['imagetwist.com']) 
         ? src.replace("/th/","/i/").replace(".jpg",".png") 
        : src
     var $a = $img.parent()
     $a.attr("href", src)
     $a.parent().addClass("dgwt-jg-item jg-entry entry-visible") 
})


