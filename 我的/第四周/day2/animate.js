(function () {
    //utils方法
    let utils = (function () {
        function getCss(ele, attr) {
            var value = window.getComputedStyle(ele)[attr];
            var reg = /^-?(\d|[1-9]\d+)(\.\d+)?(px|pt|em|rem)?$/i;

            //验证是否带单位的值，如果带的话，去掉单位转化成数字
            if (reg.test(value)) {
                value = parseInt(value)
            }
            return value
        }

        /*yuan'su'de
         * 设置当前元素的样式
         * ele.style.xxx = xxx
         * */
        function setCss(ele, attr, value) {
            var reg = /^width|height|fontSize|(margin|padding)?(left|right|top|bottom)|(margin|padding)$/i;
            //判断传进来的属性是否是正则匹配的属性，如果匹配，判断一下要设置的属性值是否带有单位，决定是否给其添加单位
            if (reg.test(attr)) {
                // debugger;
                /px/.test(value.toString()) ? null : value += 'px'
                /*/^(px|pt|em|rem)$/*/
            }
            ele.style[attr] = value;
        }

        /*
         * debugger 断点，主要适用于调试js代码用的
         * debugger：写再哪一行，js运行到哪一行就会暂停【除非没有加载到哪一行js语句】debugger不会让浏览器运行js暂停
         * F8:跳转到下一个断点位置
         * F10；跳转下一行代码，但是不会进入到函数中进行逐行调试
         * F11:会逐行及逆行调试【包括进入到函数中逐行调试】
         * */


        /*
         * 批量给元素设置样式
         * */
        function setGtoupCss(ele, obj = {}) {
            if (obj instanceof Object) {
                for (var key in obj) {
                    //for in 循环会便利obj这个对象上的可枚举属性
                    //可枚举属性；obj上的私有属性和手动给obj设置的共有属性
                    //obj天生自带的公有属性，属于obj的不可枚举属性
                    if (obj.hasOwnProperty(key)) {
                        //我们只需要obj上的私有属性，通过hasOwnProperty这个属性拿到他是私有属性进行循环设置
                        setCss(ele, key, obj[key])
                    }
                }
            }
        }

        /*
         *将getCss和setCss和setGtoupCss绑定到一起，封装成一个方法css
         *
         * */
        function css(...arg) {
            //判断传入的参数的个数，如果个数为3个的时候，那么我们使用的setCss
            if (arg.length === 3) {
                setCss(...arg)
            } else {
                //如果传入的第二个参数为一个对象的时候，我们调用的setGtoupCss这个方法进行设置
                if (Object.prototype.toString.call(arg[1]) === '[object Object]') {
                    setGtoupCss(...arg)
                } else {
                    //否则属于获取到当前元素的属性
                    return getCss(...arg)
                }
            }
        }

        return {css}
    })();
    //匀速直线运动
    let linear = function (time, duration, change, begin) {
        return time / duration * change + begin
    };
    //1.当前元素 2.元素运动的终点 3.花费的时间 4.callback 动画完成之后的回调函数
    window.animate = function (ele, target = {}, duration, callback) {
        //如果没有给时间，但是设置回调函数
        if (typeof duration === 'function') {
            //就让形参callback等于设置的那个函数
            callback = duration;
            //时间给一个默认值 2000
            duration = 2000;
        }
        //开始给change设置
        let change = {}, timer = 0, begin = {};
        //需要循环target里面的每一项
        for (var key in target) {
            //拿到begin这个对象中的属性键值对，就是元素一开始身上原有的属性值
            begin[key] = utils.css(ele, key);
            //计算change【要变的属性】，通过让终点的值减去起点的值
            change[key] = target[key] - begin[key]
        }
        //在元素的自定义属性上添加一个定时器
        ele.timer = setInterval(() => {
            //定时执行的时候，让timer每一次都加17
            timer += 17;
            //当timer时间大于 我们设置的终点时间时
            if (timer >= duration) {
                //清除定时器
                clearInterval(ele.timer);
                //把元素设置为终点的值
                utils.css(ele, target);
                //判断回调函数存在，让回调函数执行，让回调函数中的this变成当前的元素
                callback && callback.call(ele);
                //加return不在让下面代码执行
                return
            }
            //要让元素发生动画需要循环change
            for (var key in change) {
                //求出每一项要改变的属性的值通过匀速直线运动公式
                var cur = linear(timer, duration, change[key], begin[key]);
                //通过utils给元素设置上
                utils.css(ele, key, cur)
            }
        }, 17)
    }
})();
/*
animate(box, {width: 200, height: 300}, 3000, function () {

});
*/
