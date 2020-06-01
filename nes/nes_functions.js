const _nes = function () {
    var x = this;
    Array.prototype.sortRandom = function () {
        return this.sort(() => 0.5 - Math.random());
    };
    
    Array.prototype.unique = function(){
        return this.filter((el,i,a)=>a.indexOf(el)==i)
    }
    
    String.prototype.copy = function(){
        var vm =this.toString()  
        console.log("string... ", vm)
        var tempInput = document.createElement("input");
        tempInput.value = vm;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        return true
    }
    x._get=function(){
        var search = window.location.search.split("?")[1]
        var data = {}
        if(!search) return data
        search.split("&").forEach(s=>{
            var key = s.split("=")[0]
            var value = s.split("=")[1]
            data[key]=value
        })
        return data
    }
    x.addScript = function (src, id, delay) {
        if(!delay) delay = 0
        var jq = document.createElement("script");
        jq.id = id;
        jq.src = src + "?var=" + x.randomBetween(100, 1000);
        var head = document.querySelector("head");
        if (!head.querySelector(`script[src="${src}"]`)) setTimeout(()=>{head.appendChild(jq)},delay*1000)
    };

    x.orderObj = function (obj) {
        const ordered = {};
        Object.keys(obj)
            .sort()
            .forEach((key) => (ordered[key] = obj[key]));
        return ordered;
    };

    x.randomBetween = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
};

const nes = new _nes()
