var utils = (function () {
    /*
    * offset方法：求出当前元素的距离body的偏移量
    * */
    function offset(ele) {
        let l = ele.offsetLeft;
        let t = ele.offsetTop;
        //如果元素的父级有定位，那么元素距离body的偏移量不真实
        let parent = ele.offsetParent;
        while (parent){//直到parent为null【当parent上一次循环为body的时候】，才进不来这个循环
            l+=parent.offsetLeft+parent.clientLeft;
            t+=parent.offsetTop+parent.clientTop;
            //需要不断的更新parent,让parent重新赋值，等于父级的父级参照物
            parent = parent.offsetParent;
        }
        return {left:l,top:t,}
    }
    /*
    * 浏览器盒子模型
    * */
    function win(attr,value) {
        //判断第二个参数有没有传入，如果有传，证明我要是设置，如果没有传，只是来求值
        if (value == undefined){
            return document.documentElement[attr] || document.body[attr]
        }
        document.documentElement[attr] = value;
        document.body[attr] = value;
    }
    /*
    * 类数组转数组
    * */
    function toArray(likeAry) {
        try{
            //通过改变slice中的this，克隆一份像likeAry一样的数组
            return [].slice.call(likeAry)
        }catch (e){
            var newAry = [];
            for (var i = 0; i < likeAry.length; i++) {
                newAry.push(likeAry[i])
            }
            return newAry
        }
    }
    /*
    * getCss
    * 想要获取某一个元素上的样式属性
    * */
    function getCss(ele,attr) {
       let value=  window.getComputedStyle(ele)[attr];
        //获取到的value是一个字符串
        //而且我们需要拿到这个值进行计算，带有单位的值，需要去掉单位
        let reg = /^-?(\d|[1-9]\d+)(\.\d+)?(px|pt|em|rem|%)?$/i;
        if (reg.test(value)){
            value = parseFloat(value)
        }
        return value
    }
    /*
    * setCss
    * 给一个元素设置一个相对应的样式
    * */
    function setCss(ele,attr,value) {
        //需要给能都添加像素单位的属性名进行过滤
        let reg =/^(width|height|fontSize|(margin|padding)|(margin|padding)?(left|right|top|bottom))$/i;
        if (reg.test(attr)){
            /px/.test(value.toString())?null:value+='px';
        }
        ele.style[attr] = value;

    }
    /*
    * setGrounpCss
    * 批量给元素设置样式
    * */
    function setGroupCss(ele,obj={}) {
        if (Object.prototype.toString.call(obj)==='[object Object]'){
            for (var key in obj) {
                //for in 循环对象上的可枚举属性【对象的私有属性+给对象设置的共有属性】天生自带的公有属性是不包括的
                if (obj.hasOwnProperty(key)){//判断obj中的值是否是私有的
                    setCss(ele.key.obj[key])
                }
            }
        }
    }
    function css(...arg) {
        //判断传入的参数的个数，如果个数为3个的时候，那么我们使用的setCss
        if (arg.length===3){
            setCss(...arg)
        }else{
            //如果传入的第二个参数为一个对象的时候，我们调用的setGtoupCss这个方法进行设置
            if (Object.prototype.toString.call(arg[1])==='[object Object]'){
                setGtoupCss(...arg)
            }else {
                //否则属于获取到当前元素的属性
                return  getCss(...arg)
            }
        }
    }

    return {
        offset,
        win,
        toArray,
        getCss,
        setCss,
        setGroupCss,
        css,
    }
})();
