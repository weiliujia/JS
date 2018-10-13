let waterfall = (function () {
    let box = document.getElementById('box');
    let uls = box.getElementsByTagName('ul');
    uls = utils.toArray(uls);
    let data = null;
    let minH = null;
    let winH = utils.win('clientHeight');
    let imgs = document.getElementsByTagName('img');


    function ajax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'product.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                data = utils.toJSON(xhr.responseText);
                bindHtml(20);
            }
        };
        xhr.send();
        console.log(data);
    }

    function bindHtml(n) {
        for (var i = 0; i < n; i++) {
            uls.sort(function (a, b) {
                return a.offsetHeight - b.offsetHeight
            });
            let num = utils.getRandom(0, 23);
            uls[0].innerHTML += `<li>
            <div style="height: ${data[num].height}px">
                <img data-src="${data[num].img}" alt="">
                </div>
                <p>这是第${num}张图片</p>
        </li>`;
            minH = uls[0].offsetHeight;
        }
    }

    function scrollFn() {
        let winT = utils.win('scrollTop');
        if (winH + winT > minH) {
            bindHtml(10);
        }
        lazy();
    }

    function lazy() {
        for (var i = 0; i < imgs.length; i++) {
            lzayImg(imgs[i]);
        }
    }

    function lzayImg(ele) {
        if (ele.load)return;
        let imgH = ele.offsetHeight;
        let imgT = utils.offset(ele).top;
        let winT = utils.win('scrollTop');
        if (winH + winT > imgH + imgT) {
            let newImg = new Image;
            newImg.src = ele.getAttribute('data-src');
            newImg.onload = function () {
                ele.src = this.src;
                newImg = null;
                ele.load = true;
                ele.parentNode.style.background = 'none';
                Jx(ele);
            }
        }
    }

    function Jx(ele) {
        let opacity = utils.css(ele, 'opacity');
        ele.timer = setInterval(() => {
            opacity += 0.04;
            utils.css(ele, 'opacity', opacity);
            if (opacity >= 1) {
                clearInterval(ele.timer);
                utils.css(ele, 'opacity', 1);
            }

        }, 13)
    }

    return {
        init: function () {
            ajax();
            window.onscroll = scrollFn;
            lazy();
        }
    }
})();
