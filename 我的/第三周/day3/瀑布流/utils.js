/**
 * Created by 刘徐强 on 2018/8/31.
 */

var utils = (function () {
    let flag = 'getComputedStyle' in window;

    /*
     * 获取当前浏览器可视窗口的属性
     * */
    function win(key, value) {
        if (value == undefined) {
            //获取一个属性值
            return document.documentElement[key] || document.body[key];
        }
        document.documentElement[key] = value;
        document.body[key] = value;
    }

    /*
     * 获取当前元素距离body的距离
     * */
    function offset(ele) {
        let l = ele.offsetLeft;
        let t = ele.offsetTop;
        let parent = ele.offsetParent;
        //如果父级参照物不是body的话
        while (parent.tagName !== 'BODY') {
            l += parent.clientLeft + parent.offsetLeft;
            t += parent.clientTop + parent.offsetTop;
            //需要不断的更新父级参照物
            parent = parent.offsetParent;
        }
        return {left: l, top: t}
    }

    /*
     * 类数组转数组的方法
     * */
    function toArray(likeAry) {
        try {
            return [].slice.call(likeAry);
        } catch (e) {
            //证明当前浏览器是 ie6-8
            let newAry = [];
            for (var i = 0; i < likeAry.length; i++) {
                newAry[newAry.length] = likeAry[i]

            }
        }
    }

    /*
     * JSON字符串转JSON对象
     * eval非常耗费性能，不建议使用
     * */
    function toJSON(str) {
        try {
            return JSON.parse(str)
        } catch (e) {
            return eval('(' + str + ')')
        }
    }

    /*
     * 获取n到m之间的一个随机数
     * Math.round(Math.random()*(m-n)+n)
     * */
    function getRandom(n, m) {
        n = Number(n);
        m = Number(m);
        if (n > m) {
            [n, m] = [m, n]
        }
        return Math.round(Math.random() * (m - n) + n)
    }

    /*
     * 获取当前元素的样式
     * //参数1：当前的元素 参数2：元素上的伪类【默认不写】
     * window.getComputedStyle：     【标准浏览器】
     * 获取当前元素计算后的样式，在内嵌中
     * ele.currentStyle()           【IE6-8】
     * */
    function getCss(ele, attr) {
        var value = window.getComputedStyle(ele)[attr];
        var reg = /^-?(\d|[1-9]\d+)(\.\d+)?(px|pt|em|rem)?$/i;
        //验证是否是带单位的值，如果带的话，就去掉单位转成数字
        if (reg.test(value)) {
            value = parseFloat(value)
        }
        return value
    }

    /*
     * 设置当前元素的样式
     * ele.style.xxx=xxx;
     * */
    function setCss(ele, attr, value) {
        var reg = /^width|height|fontSize|(margin|padding)?(left|top|right|bottom)|(maegin|padding)$/i;
        //判断传进来的属性是否是正则匹配的属性，如果匹配，判断一下要设置的属性值是否有单位，决定是否给其添加单位
        if (reg.test(attr)) {
            /px/.test(value.toString()) ? null : value += 'px'
        }
        ele.style[attr] = value;
    }

    /*
     * debugger 断点，主要适用于调试js代码用的
     * debugger 写在哪一行，js运行到哪一行就会暂停【除非没有加载到那一行js语句】debugger不会让浏览器运行js暂停
     * F8：跳转到下一个断点位置
     * F10：跳转下一行js代码,但是不会进入到函数中进行逐行调试
     * F11：会逐行进行调试【包括会进入到函数中进行调试】
     * */

    /*
     * 批量给元素设置样式
     * */
    function setGroupCss(ele, obj = {}) {
        if (obj instanceof Object) {
            for (var key in obj) {
                //for in循环会遍历obj这个对象上所有的可枚举属性
                //可枚举属性：obj上的私有属性和手动给obj设置的公有属性
                //obj天生自带的公有属性，属于obj的不可枚举属性
                if (obj.hasOwnProperty(key)) {
                    //我们只需要obj上的私有属性，通过hasOwnProperty这个属性拿到它的私有属性进行循环设置
                    setCss(ele, key, obj[key])
                }
            }
        }
    }

    /*
    * 将个getCss和setCss和setGroupCss绑定到一起，封装成一个方法css
    * */
    function css (...arg){
        //判断传入的参数的个数，如果个数为3个时候，那么我们使用setCss
        if(arg.length===3){
            setCss(...arg)
        }else{
            //如果传入的第二个参数为一个对象的时候，我们调用setGroupCss这个方法进行批量设置
            if(Object.prototype.toString.call(arg[1])==='[object Object]'){
                setGroupCss(...arg)
                //否则属于获取到当前元素的属性
            }else{
                return getCss(...arg)
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
        setGroupCss,
        css,

    }
})();
