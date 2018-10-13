function waterfall() {
    this.box = document.getElementById('box');
    this.uls = box.getElementsByTagName('ul');
    this.uls = utils.toArray(this.uls);
    this.data = null;
    this.minH = null;
    this.winH = utils.win('clientHeight');
    this.imgs = box.getElementsByTagName('img');

    this.init = function () {
        this.ajax();
        window.onscroll = this.scrollFn.bind(this);
        this.lazy();
    }
}
waterfall.prototype ={
    constructor:waterfall,
    ajax:function ajax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get','product.json',false);
        xhr.onreadystatechange =  ()=> {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)){
            this.data = utils.toJSON(xhr.responseText);
            this.bindHtml(20);
            }
        };
        xhr.send();
        console.log(this.data);
    },
    bindHtml:function (n) {
        for (var i = 0; i < n; i++) {
          this.uls.sort(function (a,b) {
              return a.offsetHeight - b.offsetHeight;
          });
            let num = utils.getRandom(0,21);
            this.uls[0].innerHTML+=`<li>
            <div style="height: ${this.data[num].height}px">
                <img data-src="${this.data[num].img}" alt="">
                </div>
                <p>这是第${num}张图片</p>
        </li>`;
            this.minH = this.uls[0].offsetHeight;
        }
    },
    scrollFn:function () {
       let winT = utils.win('scrollTop');
       if (winT+this.winH>this.minH){
          this.bindHtml(20);
       }
       this.lazy();
    },
    lazy:function () {
        for (var i = 0; i < this.imgs.length; i++) {
            this.lazyImg(this.imgs[i])
        }
    },
    lazyImg:function (ele) {
        let that = this;
        if (ele.load)return;
        let imgH = ele.offsetHeight;
        let imgT = utils.offset(ele).top;
        let winT = utils.win('scrollHeight');
        if (winT+this.winH>imgT+imgH){
            let newImg = new Image;
            newImg.src = ele.getAttribute('data-src');
            newImg.onload = function () {
                ele.src = this.src;
                newImg = null;
                ele.load = true;
                ele.parentNode.style.background = 'none';
                that.JyJx(ele);
            }
        }
    },
    JyJx:function (ele) {
        let opacity = utils.css(ele,'opacity');
        ele.timer = setInterval(()=>{
            opacity += 0.04;
            utils.css(ele,'opacity',opacity);
            if (opacity>=1){
                clearInterval(ele.timer);
                utils.css(ele,'opacity',1);
            }
        },13)
    }
};