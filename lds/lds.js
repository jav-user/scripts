function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var url = "https://stage-5pkq5bmu.letydoesstuff.com/wp-content/uploads/sites/2/rewards/2019-$m_PhotosetA/HD-$n/LetyDoesStuff_Reward_2019-$m_PhotosetA-HD.zip"

var urls = []
for (var i = 0; i < 10000; i++) {
    var abc = "abcdefghijklmnopqrst"

    var ABC = abc.toUpperCase()
    var num = "01234546789"
    var str = abc + ABC + num

    var rand = ""
    for (var j = 0; j < 8; j++) {
        rand += str.charAt(randomIntFromInterval(0, str.length - 1))
    }
    //var rand=
    var cod = rand
        //var cod=rand.join("").substr(0,8)
        //console.log(cod)

    var n = Math.floor(Math.random() * 12 + 1)
    n = '00' + n
    n = n.substr(n.length - 2, 2)

    urls.push(url.replace("$n", cod).replace("$m", n).replace("$m", n))
}
var u = urls.join("\n")
copy(u)
console.log(u)
