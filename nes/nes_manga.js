var nesManga = function (){
CMD = ""
NUM = 0
var vm = this


vm.getLines = function (imgurls, folder){

    folder = folder ? folder : $("title").text().toValidFileName()

    var lines = []
    NUM = imgurls.length
    imgurls.forEach((imgu,i)=>{
        let num = `000000000${i+1}`.substr(-5)
        let line = `downf "${imgu}=${num}" "${folder} ${NUM}pp" "${window.location.host}"`;
        lines.push(line)
    })
    return lines.join("\n")
}

vm.getCmd = function(imgurls, folder){
    var lines = vm.getLines(imgurls, folder)
    var cmd = `D:\n${lines}\n`
    CMD = cmd
    return cmd
}
}


var nesMg = new nesManga()

