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
     var _src = $($img).attr("src")
     var src = _src.includes("/th/") && _src.includesSome(['imagetwist.com']) 
        ? _src.replace("/th/","/i/")
        : _src
     
     if(src.includes("img60.imagetwist.com")) src = src.replace(".jpg",".png") 
    
     var $a = $img.parent()
     $img.attr("src",src)
//      $img.attr("onerror",_src)
    $img.on("error", function () {
        $(this).attr("src", _src);
    });
    // var $figure = $(`<figure class="dgwt-jg-item jg-entry entry-visible" data-size="1011x1400" style="width: 179px; height: 248.22px; top: 8px; left: 8px;"></figure>`)
     $a.attr("href", src)
//      $figure.append($a.clone())
//      $a.parent().appent($figure)
//      $a.remove()
     $a.parent().addClass("dgwt-jg-item jg-entry entry-visible") 
})


