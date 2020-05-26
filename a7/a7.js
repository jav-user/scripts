Array.from(document.querySelectorAll("#season a")).filter(a=>a.href.includes("/updated/")).forEach(a=>{
	var tr = a.parentNode.parentNode
	var lang = tr.children[3].innerText.toLowerCase().trim()
	var hearing = tr.children[6].innerText.trim()
	
	//console.log()
	var condition_lang =	lang=="dutch" 
				|| lang == "french"
				|| lang == "german"
				|| lang == "italian"
				|| lang.includes("portuguese")
				|| lang == "bulgarian"
				|| lang == "persian"
				|| lang == "hungarian"
				|| lang == "russian"
				|| lang == "romanian"
	
	var condition_hearing = hearing!=""
	
	if(condition_lang || condition_hearing){
		var classes = tr.className.split(" ")
		classes.push("sub_hide") 
		classes=classes.filter((c,i,a)=>a.indexOf(c)==i)
		tr.className = classes.join(" ")
// 		console.log(tr.className)
// 		console.log(tr)
		tr.remove()
	}
})

var subs_hidden = document.querySelectorAll(".sub_hide")
var hideSubs = function(){
   subs_hidden.forEach(tag=>{tag.remove()})
//   subs_hidden.forEach(tag=>{tag.style.display="none"})
}

// var showSubs=function(){
//   subs_hidden.forEach(tag=>{tag.style.display=""})
// }

hideSubs()
var buttons = document.querySelectorAll("#sl button")
buttons.forEach(bt => {
    var show = window.location.pathname.split("/")[2]
    var season = window.location.pathname.split("/")[3]
    var a = document.createElement("a")
    a.type = "button"
    a.href = `${window.location.origin}/season/${show}/${bt.innerText}`
    a.innerText = bt.innerText.trim()
    var parent = bt.parentNode
    bt.innerText = ""
    var button = document.createElement("button")
    if(season && a.innerText==season) button.style.fontWeight="bold"
	else if (!season && buttons.length==a.innerText) button.style.fontWeight="bold"
    button.append(a)
    bt.remove()
    parent.append(button)
        //parent.append(a)
    ///console.log(bt)
})

document.querySelectorAll("#season input[type=checkbox]").forEach(input=>{input.checked=true})
