var waterfall = (function () {
    let box = document.getElementById('box');
    let uls = box.getElementsByTagName('ul');
    uls = utils.toArray(uls);
    let data = null;
    let minH = null;
    let stop = 0;
    let imgs = box.getElementsByTagName('img');
    let winH = utils.win('clientHeight');

    function ajax(num) {
        let xhr = new XMLHttpRequest();
        xhr.open('get','product.json',false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
                data = utils.toJSON(xhr.responseText);
                bindHtml(num)
            }
        };
        xhr.send();
        console.log(data);
    }

    function bindHtml(n) {
        for (var i = 0; i < n; i++) {
            uls.sort((a,b)=>{
                return a.offsetHeight - b.offsetHeight
            });
            let num = utils.getRandom(0,21);
            uls[0].innerHTML+=`<li>
            <div style=" height: ${data[num].height}px" >
                <img data-src="${data[num].img}" alt="">
                </div>
                <p>这是第${num}张图片</p>
        </li>`;
            minH = uls[0].offsetHeight;
        }

    }
    function scrollFn(num) {
        let winT = utils.win('scrollTop');
        if (winT+winH>minH){
            stop++;
            if (stop>5){
                alert('呜呜呜呜');
                window.onscroll =null;
                return
            }
            bindHtml(num)
        }
        lazy();
    }
    function lazy() {
        for (var i = 0; i < imgs.length; i++) {
            lazyImg(imgs[i])
        }
    }
    function lazyImg(ele) {
        if (ele.load)return;
        let imgT = utils.offset(ele).top;
        let imgH = ele.offsetHeight;
        let winT = utils.win('scrollTop');
        if (winT+winH>imgT+imgH){
            let newImg = new Image;
            let url = ele.getAttribute('data-src');
            newImg.src = url;
            newImg.onload = function () {
                ele.src = this.src;
                newImg = null;
                ele.load = true;
                ele.parentNode.style.background = 'none';
                fedaFn(ele);
            }
        }
    }
    function fedaFn(ele) {
        let opacity = utils.css(ele,'opacity');
        ele.timer = setInterval(()=>{
            opacity+=0.04;
            utils.css(ele,'opacity',opacity);
            if (opacity>=1){
                clearInterval(ele.timer);
                utils.css(ele,'opcaity',1)
            }
        },13)
    }



    return{
        init:function (num) {
            ajax(num);
            window.onscroll = scrollFn.bind(null,num);
            lazy();
        }
    }
})();
