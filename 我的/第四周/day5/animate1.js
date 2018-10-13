(function () {
    let utils = (function () {
        function getCss(ele, attr) {
            var value = window.getComputedStyle(ele)[attr];
            var reg = /^-?(\d|[1-9]\d+)(\.\d+)?(px|pt|em|rem)?$/i;
            if (reg.test(value)) {
                value = parseInt(value)
            }
            return value
        }


        function setCss(ele, attr, value) {
            var reg = /^width|height|fontSize|(margin|padding)?(left|right|top|bottom)|(margin|padding)$/i;
            if (reg.test(attr)) {
                /px/.test(value.toString()) ? null : value += 'px'
            }
            ele.style[attr] = value;
        }


        function setGtoupCss(ele, obj = {}) {
            if (obj instanceof Object) {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        setCss(ele, key, obj[key])
                    }
                }
            }
        }


        function css(...arg) {
            if (arg.length === 3) {
                setCss(...arg)
            } else {
                if (Object.prototype.toString.call(arg[1]) === '[object Object]') {
                    setGtoupCss(...arg)
                } else {
                    return getCss(...arg)
                }
            }
        }

        return {css}
    })();


    let linear = function (time, duration, change, begin) {
        return time / duration * change + begin
    };

    function animate() {

    }
})();
