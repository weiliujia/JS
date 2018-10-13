/**
 * Created by 机械革命 on 2018/8/24.
 */
var header = document.getElementById('header');
var buttons = header.getElementsByTagName('a');
var shopList = document.getElementById('shopList');
var data = null;
//请求数据
var xhr = new XMLHttpRequest();
xhr.open('get','data/product.json',false);
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200){
        data = JSON.parse(xhr.responseText)
    }
};
xhr.send();
console.log(data);

//将数据绑定到页面中
function bindHtml() {
    str=``;
    data.forEach(function (item,index) {
        str+=`<li>
                <img src="${item.img}" alt="">
                <p class="title">${item.title}</p>
                <p class="hot">热度${item.hot}</p>
                <del>￥9999</del>
                <span>￥${item.price}</span>
                <p class="time">上架时间：${item.time}</p>
            </li>`
    });
    shopList.innerHTML=str
}
bindHtml(data);
// 4.给每一个按钮添加点击事件实现排序
for (var i = 0; i < buttons.length; i++) {
    buttons[i].index=-1;
    buttons[i].onclick = function () {
        this.index*=-1;
        var value = this.getAttribute('attrName');
        px.call(this,value);
        tianjatou.call(this);
        cleartou.call(this);
    }
}
function px(value) {
    var _this=this;
    if (value==='time'){
        data.sort(function (a,b) {
            return (new Date(a.time))-(new Date(b.time))*_this.index
        })
    }else{
        data.sort(function (a,b) {
            return (a[value])-(b[value])*_this.index
        })
    }
    bindHtml(data);
}
// 5.点击的时候让箭头显示
function tianjatou() {
    var down = this.children[1];
    var up = this.children[0];
    if(this.index<0){
        down.classList.add('bg');
        up.classList.remove('bg');
    }else {
        down.classList.remove('bg');
        up.classList.add('bg');
    }
}

function cleartou() {
    for (var i = 0; i < buttons.length; i++) {
        if(this!=buttons[i]){
            buttons[i].children[1].classList.remove('bg');
            buttons[i].children[0].classList.remove('bg');
            buttons.index=-1
        }
    }
}