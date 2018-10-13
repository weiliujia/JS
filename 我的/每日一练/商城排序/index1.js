var Shop = (function () {
    let header = document.getElementById('header');
    let buttons = header.getElementsByTagName('a');
    let shopList = document.getElementById('shopList');
    let data = null;

    function ajax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/product.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                data = JSON.parse(xhr.responseText);
                bindHtml(data);
            }
        };
        xhr.send();
        console.log(data);
    }

    function bindHtml(data) {
        let str = ``;
        data.forEach(function (item, index) {
            str += `<li>
            <img src="${item.img}" alt="">
            <p class="title">${item.title}</p>
            <p class="hot">热度${item.hot}</p>
            <del>￥9999</del>
            <span>￥${item.price}</span>
            <p class="time">上架时间：${item.time}</p>
        </li>`
        });
        shopList.innerHTML = str;
    }

    function Dj() {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].index = -1;
            buttons[i].onclick = function () {
                this.index *= -1;
                var value = this.getAttribute('attrName');
                px.call(this, value);
                tianjiatou.call(this);
                cleartou.call(this);
            }
        }
    }

    function px(value) {
        var that = this;
        if (value === 'time') {
            data.sort(function (a, b) {
                return (new Date(a.time)) - (new Date(b.time)) * that.index
            })
        } else {
            data.sort(function (a, b) {
                return (a[value]) - (b[value]) * that.index
            })
        }
        bindHtml(data)
    }

    //添加箭头
    function tianjiatou() {
        var down = this.children[1];
        var up = this.children[0];
        if (this.index < 0) {
            down.classList.add('bg');
            up.classList.remove('bg');
        } else {
            down.classList.remove('bg');
            up.classList.add('bg');
        }
    }

    //移除
    function cleartou() {
        for (var i = 0; i < buttons.length; i++) {
            if (this != buttons[i]) {
                buttons[i].children[0].classList.remove('bg');
                buttons[i].children[1].classList.remove('bg');
                buttons[i].index = -1;
            }
        }
    }

    return {
        init: function () {
            ajax();
            Dj();

        }
    }

})();
