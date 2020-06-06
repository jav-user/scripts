
var imgurls = Array.from($(".dgwt-jg-item.jg-entry.entry-visible > a")).map((a)=>(a.href))

$("#btn_copy").remove()
var $btn = $("<button id='btn_copy'>Copy All</button>")
$(".post-inner.clearfix > h1").after($btn)
$("#btn_copy").on("click",function(){
    nesMg.getCmd()
    nes.copy(CMD)
    alert(NUM + " images copied!")
})
