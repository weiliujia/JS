(function () {
    let utils = (function () {
        function getCss(ele, attr) {
            var value = window.getComputedStyle(ele)[attr];
            var reg = /^-?(\d|[1-9]\d+)(\.\d+)?(px|pt|em|rem)?$/i;
            if (reg.test(value)) {
                value = parseFloat(value);
            }
            return value;
        }

        function setCss(ele, attr, value) {
            var reg = /^width|heigth|fontSize|(margin|padding)?(left|right|top|bottom)|(margin|padding)$/i;
            if (reg.test(attr)) {
                /px/.test(value.toString()) ? null : value += 'px';

            }
            ele.style[attr] = value;
        }


        function setGtoupCss(ele, obj = {}) {
            if (obj instanceof Object) {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        setCss(ele, key, obj[key]);
                    }
                }
            }
        }

        function css(...arg) {
            if (arg.length === 3) {
                setCss(...arg)
            } else {
                if (Object.prototype.toString.call(arg[1]) === 'object Object') {
                    setGtoupCss(...arg);
                } else {
                    return getCss(...arg)
                }
            }
        }

        return {css};
    })();
    let linear = function (time, duration, change, begin) {
        return time / duration * change + begin;
    };

    function animate(ele, target = {}, duration, callback) {
        if (typeof duration === 'function') {
            callback = duration;
            duration = 2000;
        }
        let timer = 0, begin = {}, change = {};
        for (var key in target) {
            begin[key] = utils.css(ele, key);
            change[key] = target[key] - begin[key];
        }
        ele.timer = setInterval(() => {
            timer += 17;
            if (timer >= duration) {
                clearInterval(ele.timer);
                utils.css(ele, target);
                callback && callback.call(ele);
                return
            }
            for (var key in change) {
                var cur = linear(timer, duration, change[key], begin[key]);
                utils.css(ele, key, cur)
            }
        }, 17)
    }

    window.animate = animate;
    window.utils = utils;

})();
