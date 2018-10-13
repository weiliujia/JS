let shopStom = function () {
    this.header = document.getElementById('header');
    this.buttons = header.getElementsByTagName('a');
    this.shopList = document.getElementById('shopList');
    this.data = null;
    this.init = function () {
        this.ajax();
        this.bindHtml(this.data);
        this.Dj()
    }
};
shopStom.prototype = {
    constructor: shopStom,
    ajax: function ajax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/product.json', false);
        xhr.onreadystatechange = (() => {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                this.data = JSON.parse(xhr.responseText);
            }
        });
        xhr.send();
        console.log(this.data);
    },
    bindHtml: function (data) {
        let str = ``;
        this.data.forEach(function (item, index) {
            str += `<li>
                <img src="${item.img}" alt="">
                <p class="title">${item.title}</p>
                <p class="hot">热度${item.hot}</p>
                <del>￥9999</del>
                <span>￥${item.price}</span>
                <p class="time">上架时间：${item.time}</p>
            </li>`;
            this.shopList.innerHTML = str;
        })
    },
    Dj: function () {
        for (var i = 0; i < this.buttons.length; i++) {
            let taa = this;
            let but = this.buttons[i];
            this.buttons[i].index = -1;
            this.buttons[i].onclick = function () {
                console.log(this.index *= -1);
                let value = this.getAttribute('attrName');
                taa.px(value, this.index);
                taa.tianjiatou(but);
                taa.cleartou(but)
            }
        }
    },
    px: function (value, index) {

        if (value === 'time') {
            this.data.sort((a, b) => {
                return (new Date(a.time) - new Date(b.time)) * index
            })
        } else {
            this.data.sort((a, b) => {
                return (a[value]) - (b[value]) * index
            })
        }
        this.bindHtml(this.data)
    },
    tianjiatou: function (but) {
        let down = but.children[1];
        let up = but.children[0];
        if (but.index < 0) {
            down.classList.add('bg');
            up.classList.remove('bg')
        } else {
            down.classList.remove('bg');
            up.classList.add('bg')
        }
    },
    cleartou: function (but) {
        for (var i = 0; i < this.buttons.length; i++) {
            if (but != this.buttons[i]) {
                this.buttons[i].children[0].classList.remove('bg')
                this.buttons[i].children[1].classList.remove('bg')
                this.buttons[i].index = -1
            }
        }
    }
};
