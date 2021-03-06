var Banner = (function () {
    //获取元素
    let outer = document.getElementById('outer');
    let swiper = document.getElementById('swiper');
    let focus = document.getElementById('focus');
    let imgs = swiper.getElementsByTagName('img');
    let lis = focus.getElementsByTagName('li');
    let left = outer.getElementsByTagName('a')[0];
    let right = outer.getElementsByTagName('a')[1];
    let data = null;
    let step = 0;
    let isClick=true;


    //请求数据
    function ajax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                data = JSON.parse(xhr.responseText);
                bindHtml();
            }
        };
        xhr.send();
        console.log(data);
    }

    //绑定数据
    function bindHtml() {
        let imgStr = ``, lisStr = ``;
        for (var i = 0; i < data.length; i++) {
            imgStr += `<div><img data-src="img/${data[i].src}" alt=""></div>`;
            lisStr += ` <li class=${i === 0 ? 'selected' : ''}></li>`
        }
        imgStr += `<div><img data-src="img/${data[0].src}" alt=""></div>`;
        swiper.innerHTML = imgStr;
        focus.innerHTML = lisStr;
        utils.css(swiper, 'width', 1000 * (data.length + 1));
        lazyImg();
    }

    //渐隐渐现
    function lazyImg() {
        for (let i = 0; i < imgs.length; i++) {
            let cur = imgs[i];
            let newImg = new Image;
            newImg.src = cur.getAttribute('data-src');
            newImg.onload = function () {
                cur.src = this.src;
                newImg = null;
                animate(cur, {opacity: 1}, 500)
            }
        }
    }

    //开始轮播
    function aoto() {
        timer = setInterval(autoMove, 2000)
    }

    function autoMove() {
        if (step >= data.length) {
            step = 0;
            utils.css(swiper, 'left', 0)
        }
        step++;
        animate(swiper, {left: step * -1000}, 1000, function () {
            isClick=true;
        });
        focusTip();
    }

    //小球跟着
    function focusTip() {
        for (let i = 0; i < lis.length; i++) {
            if (step === i) {
                lis[i].classList.add('selected');
            }else {
                lis[i].classList.remove('selected');
            }
            if(step===data.length){
                lis[0].classList.add('selected');
            }
        }
    }
    //划入划出
    function mousemove() {
        outer.onmousemove=function () {
            clearInterval(timer);
            utils.css(left,'display','block');
            utils.css(right,'display','block');
        };outer.onmouseout=function () {
            clearInterval(timer);
            timer = setInterval(autoMove, 2000);
            utils.css(left,'display','none');
            utils.css(right,'display','none');
        }
    }

    //点击左右
    function Click() {
        right.onclick=function () {
            if (isClick){
                isClick=false;
                autoMove();
            }
        };left.onclick=function () {
            if (isClick){
                isClick=false;
                if(step<=0){
                    step=data.length;
                    utils.css(swiper,'left',step*-1000)
                }
                step--;
                animate(swiper,{left:step*-1000},1000,function () {
                    isClick=true;
                });
            }
            focusTip();
        }
    }
    //点击球
    function ClickTip() {
        for (let i = 0; i < lis.length; i++) {
            lis[i].onclick=function () {
                if (isClick){
                    isClick=false;
                    step=i-1;
                    autoMove();
                }
            }
        }
    }


    return {
        init: function () {
            ajax();
            aoto();
            mousemove();
            Click();
            ClickTip();
        }
    }
})();
