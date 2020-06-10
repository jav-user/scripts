const _nes = function () {
    var x = this;

    Array.prototype.filterIfIncludes = function (q, isOr) {
        var Q = Array.isArray(q) ? q : [q];
        Q = Q.toText().trim().toLowerCase();

        return this.filter((val) => {
            var sw = !isOr;
            Q.forEach((q) => {
                let includes = (val + "").trim().toLowerCase().includes(q);
                sw = isOr ? sw || includes : sw & includes;
            });
            return sw;
        });
    };

    // Array.prototype.includes = function (q, isOr) {
    //     var vm = this;
    //     var sw = !isOr;
    //     var Q = Array.isArray(q) ? q : [q];
    //     Q.forEach((q) => {
    //         let includes = vm.some((val) => (val + "").includes(q));
    //         sw = isOr ? sw || includes : sw & includes;
    //     });

    //     return sw;
    // };

    Array.prototype.includesEvery = function (q) {
        var vm = this;
        var sw = true;
        var Q = Array.isArray(q) ? q : [q];
        Q.forEach((q) => {
            let includes = vm.some((val) => (val + "").includes(q));
            sw = sw & includes;
        });

        return sw;
    };

    Array.prototype.includesSome = function (q) {
        var vm = this;
        var sw = false;
        var Q = Array.isArray(q) ? q : [q];
        Q.forEach((q) => {
            let includes = vm.some((val) => (val + "").includes(q));
            sw = sw || includes;
        });

        return sw;
    };

    Array.prototype.sortRandom = function () {
        return this.sort(() => 0.5 - Math.random());
    };

    Array.prototype.toCapitalize = function () {
        return this.map((el) =>
            typeof el == "string" ? el.toCapitalize() : el
        );
    };

    Array.prototype.toLowerCase = function () {
        return this.map((el) =>
            typeof el == "string" ? el.toLowerCase() : el
        );
    };

    Array.prototype.toUpperCase = function () {
        return this.map((el) =>
            typeof el == "string" ? el.toUpperCase() : el
        );
    };

    Array.prototype.toText = function () {
        return this.map((el) => el + "");
    };

    Array.prototype.trim = function () {
        return this.map((el) => (typeof el == "string" ? el.trim() : el));
    };

    Array.prototype.unique = function () {
        return this.filter((el, i, a) => a.indexOf(el) == i);
    };

    String.prototype.includesEvery = function (arr) {
        let str = this.toString().toLowerCase();
        let includes = (el) => str.includes((el + "").toLowerCase());
        return arr.every(includes);
    };

    String.prototype.includesSome = function (arr) {
        let str = this.toString().toLowerCase();
        let includes = (el) => str.includes((el + "").toLowerCase());
        return arr.some(includes);
    };

    String.prototype.startsWithEvery = function (arr) {
        let str = this.toString().toLowerCase();
        let includes = (el) => str.startsWith((el + "").toLowerCase());
        return arr.every(includes);
    };

    String.prototype.startsWithSome = function (arr) {
        let str = this.toString().toLowerCase();
        let includes = (el) => str.startsWith((el + "").toLowerCase());
        return arr.some(includes);
    };

    String.prototype.toCapitalize = function () {
        let text = this.toString();
        let wordsArray = text.toLowerCase().split(" ");

        let capsArray = wordsArray.map((word) => {
            if (word.trim() == "") return word;
            return word.replace(word[0], word[0].toUpperCase());
        });

        return capsArray.join(" ");
    };

    String.prototype.copy = function () {
        var vm = this.toString();
        console.log("string... ", vm);
        var tempInput = document.createElement("input");
        tempInput.value = vm;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        return true;
    };
    
    x.copy = function(str){
        var vm = str
        console.log("string... ", vm);
        var tempInput = document.createElement("textarea");
        tempInput.value = vm;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        return true;
    }

    x._get = function () {
        var search = window.location.search.split("?")[1];
        var data = {};
        if (!search) return data;
        search.split("&").forEach((s) => {
            var key = s.split("=")[0];
            var value = s.split("=")[1];
            data[key] = value;
        });
        return data;
    };

    x.addStyle = function (href, id, delay) {
        if (!delay) delay = 0;
        var link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet"
        link.type= "text/css"

        link.href = href + "?var=" + x.randomBetween(100, 1000);
        var head = document.querySelector("head");
        if (!head.querySelector(`link[id=${id}]`)) {
            setTimeout(() => {
                head.appendChild(link);
            }, delay * 1000);
        }
    };

    x.addScript = function (src, id, delay) {
        if (!delay) delay = 0;
        var script = document.createElement("script");
        script.id = id;
        script.type = "text/javascript"
        script.src = src + "?var=" + x.randomBetween(100, 1000);
        var head = document.querySelector("head");
        if (!head.querySelector(`script[id=${id}]`)) {
            setTimeout(() => {
                head.appendChild(script);
                console.log("Added script "+id)
            }, delay * 1000);
        }
    };

    x.addScriptOnce = function (src, id, delay) {
        if (!delay) delay = 0;
        var jq = document.createElement("script");
        jq.id = id;
        jq.src = src;
        var head = document.querySelector("head");
        if (!head.querySelector(`script[src="${src}"]`))
            setTimeout(() => {
                head.appendChild(jq);
                console.log("Added script "+id)
            }, delay * 1000);
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

    x.getTimezone=()=> new window.Intl.DateTimeFormat().resolvedOptions().timeZone
    
    x.cdn = function (_lib, v, min) {
        var libs = {
            jquery: {
                mask: "https://code.jquery.com/jquery-$v$.$min$js",
                v: {
                    3: "3.5.1",
                    2: "2.2.4",
                    1: "1.12.4",
                },
            },
            "firebase-app": {
                mask: "https://www.gstatic.com/firebasejs/$v$/firebase-app.js",
                v:{
                    7: "7.14.4",
                }
            },
              "firebase-database": {
                mask: "https://www.gstatic.com/firebasejs/$v$/firebase-database.js",
                v:{
                    7: "7.14.4",
                }
            }, "firebase-firestore": {
                mask: "https://www.gstatic.com/firebasejs/$v$/firebase-firestore.js",
                v:{
                    7: "7.14.4",
                }
            }
        };

        var getCdn = function () {
            var lib = libs[_lib];
            v = v ? v : Object.keys(lib.v).sort().reverse()[0];
            min = min ? "min." : "";
            return lib.mask
                .replace("$v$", lib.v[v])
                .replace("$min$", min)
                .replace("..",".");
        };

        return getCdn();
    };
    
    String.prototype.toValidFileName = function() {
    return this
        .replace(/[?]/g, '_')
        .replace(/[:]/g, '-')
        .replace(/[;]/g, ',')
        .replace(/[*]/g, '')
        .replace(/[/]/g, '-')
        .replace(/[\\]/g, '-')
        .replace(/[{]/g, '[')
        .replace(/[}]/g, ']')
        .replace(/["]/g, '\'')
        .replace(/[>]/g, ']')
        .replace(/[<]/g, '[')
        .replace(/[|]/g, '-')

    // return this.replace(/[ &\/\\#,+()$~%.'":*?<>{}]/g, "_")
}
};

const nes = new _nes();
