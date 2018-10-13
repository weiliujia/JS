var utils = (function () {
    let flag = 'getComputedStyle' in window;

    function win(key, value) {
        if (value == undefined) {
            return document.documentElement[key] || document.body[key]
        }
        document.documentElement[key] = value;
        document.body[key] = value;
    }

    function offset(ele) {
        let l = ele.offsetLeft;
        let t = ele.offsetTop;
        let parent = ele.offsetParent;
        while (parent.tagName !== 'BODY') {
            l += parent.clientLeft + parent.offsetLeft;
            t += parent.clientTop + parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {left: l, top: t}
    }

    function toArray(likeAry) {
        try {
            return [].slice.call(likeAry);
        } catch (e) {
            let newAry = [];
            for (var i = 0; i < likeAry.length; i++) {
                newAry[newAry.length] = likeAry[i];

            }
        }
    }

    function toJSON(str) {
        try {
            return JSON.parse(str)
        } catch (e) {
            return eval('(' + str + ')')
        }
    }

    function getRandom(n, m) {
        n = Number(n);
        m = Number(m);
        if (n > m) {
            [n, m] = [m, n]
        }
        return Math.round(Math.random() * (m - n) + n)
    }

    function getCss(ele, attr) {
        var value = window.getComputedStyle(ele)[attr];
        var reg = /^-?(\d|[1-9]\d+)(\.\d+)?(px|pt|rem|em)?$/i;
        if (reg.test(value)) {
            value = parseFloat(value);
        }
        return value;
    }

    function setCss(ele,attr,value) {
var reg=/^width|height|fonSize|(margin|padding)?(left|reight|top|buttom)|(margin|padding)$/i;
        if (reg.test(attr)){
    /px/.test(value.toString())?null:value+='px'
        }
        ele.style[attr]=value
    }
    function setGtoupCss(ele,obj={}) {
        if (obj instanceof Object){
            for(var key in obj){
                if (obj.hasOwnProperty(key)){
                    setCss(ele,key,obj[key])
                }
            }
        }
    }
    function css(...arg) {
        if (arg.length===3){
            setCss(...arg)
        }else {
            if (Object.prototype.toString.call(arg[1])==='object Object'){
                setGtoupCss(...arg);
            }else {
                return getCss(...arg);
            }
        }
    }

    return {
        win,
        offset,
        toArray,
        toJSON,
        getRandom,
        getCss,
        setCss,
        setGtoupCss,
        css,
    };

})();
