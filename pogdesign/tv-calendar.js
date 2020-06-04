//document.querySelectorAll(".eptxt").forEach(ep=>ep.remove())
$(".eptxt").remove();
document.querySelectorAll("div.ep.info").forEach((ep) => {
	var eptxt = Array.from(ep.querySelectorAll("a"))
		.map((a) => a.innerText.trim())
		.join(" ")
		.toLowerCase()
		.replace("shield","s.h.i.e.l.d")

	var url = `https://rarbgweb.org/torrents.php?category=18;41;49&search=${eptxt}&order=seeders&by=DESC`;
	var $el = $(`<a class="eptxt" href="${url}" target="_blank">
			rarbg
			</a>`);
	var $a = $(ep).find("p a");
	//console.log($a);
	var color = $a.eq(0).css("color");
	var bg = $(ep).css("backgroundColor");
	var css = {
		//textAlign:"center",
		fontSize: "11px",
		backgroundColor: bg,
		color: color,
		fontWeight: "bold",
		borderRadius: "3px",
		//border:"none",
		borderWidth: "1px",
		borderColor: color,
	};

	var cssHover = {
		//textAlign:"center",
		fontSize: "11px",
		backgroundColor: "black",
		color: "yellow",
		fontWeight: "bold",
		borderRadius: "5px",
		borderWidth: "1px",
		borderColor: color,
	};
	$el.css(css);
	$el.attr("title", eptxt);

	$el.hover(
		function () {
			$(this).css(cssHover);
		},
		function () {
			$(this).css(css);
		}
	);
	//$el.on("click", function () {
	//	eptxt.copy();
	//});
	$a.eq(1).after($el);
});
