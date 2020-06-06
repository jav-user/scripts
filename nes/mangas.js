var nesMangas = function (){
CMD = ""
NUM = 0
var vm = this


vm.getLines = function (imgurls, folder){

    folder = folder ? folder : $("title").text().toValidFileName()

    var lines = []
    NUM = imgurls.length
    imgurls.forEach((imgu,i)=>{
        let num = `000000000${i+1}`.substr(-5)
        let line = `downf "${imgu}=${num}" "${folder}" "${window.location.host}"`;
        lines.push(line)
    })
    return lines.join("\n")
}

nm.getCmd = function(imgurls){
    var lines = vm.getLines(imgurls)
    var cmd = `D:\n${lines}\n`
    CMD = cmd
    return cmd
}
}




