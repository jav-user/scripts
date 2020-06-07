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
    // var $figure = $(`<figure class="dgwt-jg-item jg-entry entry-visible" data-size="1011x1400" style="width: 179px; height: 248.22px; top: 8px; left: 8px;"></figure>`)
     $a.attr("href", src)
//      $figure.append($a.clone())
//      $a.parent().appent($figure)
//      $a.remove()
     $a.parent().addClass("dgwt-jg-item jg-entry entry-visible") 
})


