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
     var _src = $($img).attr("src")
     var src = _src.includes("/th/") && _src.includesSome(['imagetwist.com']) 
        ? _src.replace("/th/","/i/")
        : _src
     
     if(src.includes("img60.imagetwist.com")) src = src.replace(".jpg",".png") 
    
     var $a = $img.parent()
     $img.attr("src",src)

    $img.on("error", function () {
        $(this).attr("src", _src);
    });
     $a.attr("href", src)

     $a.parent().addClass("dgwt-jg-item jg-entry entry-visible") 
})


*/
