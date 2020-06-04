//clear();
$(".eptxt").remove();
document.querySelectorAll("div.ep.info").forEach((ep) => {
	var eptxt = Array.from(ep.querySelectorAll("a"))
		.map((a) => a.innerText.trim())
		.join(" ")
		.toLowerCase()
		.replace("shield", "s.h.i.e.l.d");

	var urlSeed = `https://rarbgweb.org/torrents.php?category=18;41;49&search=${eptxt}&order=seeders&by=DESC`;
	var urlDate = `https://rarbgweb.org/torrents.php?category=18;41;49&search=${eptxt}&order=data&by=DESC`;

	var $el = $(`
			<span class="eptxt">
				<span><b>Rarbg:</b></span>
				<span><a  href="${urlSeed}" target="_blank">seed</a></span>
				<span><a  href="${urlDate}" target="_blank">date</a></span>
			</span>
			<br/>
			<span class="eptxt">
				<a  href="#">copy</a>
			</span>
`);
	var $a = $(ep).find("p a");
	//console.log($a);
	var color = $a.eq(0).css("color");
	var bg = $(ep).css("backgroundColor");
	var css = {
		//float: "left",
		fontSize: "10px",
		color: color,
		fontWeight: "bold",
		marginRight: "2px",
		marginLeft: "2px",
		//	inline: "display-block"
	};

	var cssHover = {
		fontSize: "10px",
		color: "yellow",
		fontWeight: "bold",
	};

	$el.find("a").css(css);
	$el.find("a").attr("title", eptxt);
	$el.find("span").css({ float: "left" });

	$el.find("a").hover(
		function () {
			$(this).css(cssHover);
		},
		function () {
			$(this).css(css);
		}
	);
	$el.find("a")
		.eq(2)
		.on("click", function () {
			eptxt.copy();
		});
	$a.eq(1).after($el);
});
