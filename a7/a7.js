Array.from(document.querySelectorAll("#season a")).filter(a=>a.href.includes("/updated/")).forEach(a=>{
	var tr = a.parentNode.parentNode
	var lang = tr.children[3].innerText.toLowerCase().trim()
	var hearing = tr.children[6].innerText.trim()
	//console.log()
	var condition_lang = 	 lang=="dutch" 
											|| lang=="french"
											|| lang=="german"
											|| lang=="italian"
											|| lang.includes("portuguese")  
	var condition_hearing = hearing==""
	if(condition_lang || condition_hearing){
		var classes = tr.className.split(" ")
		classes.push("sub_hide") 
		classes=classes.filter((c,i,a)=>a.indexOf(c)==i)
		tr.className = classes.join(" ")
		console.log(tr.className)
	}
})

var subs_hidden = document.querySelectorAll(".sub_hide")
var hideSubs = function(){
  subs_hidden.forEach(tag=>{tag.style.display="none"})
}

var showSubs=function(){
  subs_hidden.forEach(tag=>{tag.style.display=""})
}
