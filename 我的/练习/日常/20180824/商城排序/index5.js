/**
 * Created by 机械革命 on 2018/8/25.
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
        data = JSON.parse(xhr.responseText);
    }
};
xhr.send();
console.log(data);

function bindHtml(data) {
    str=``;
    data.forEach(function (item,index) {
        str += ` <li>
                <img src="${item.img}" alt="">
                <p class="title">${item.title}</p>
                <p class="hot">热度${item.hot}</p>
                <del>￥9999</del>
                <span>￥${item.price}</span>
                <p class="time">上架时间：${item.time}</p>
            </li>`
    });
    shopList.innerHTML=str;
}
bindHtml(data);

for (var i = 0; i < buttons.length; i++) {
    buttons[i].index = -1;
    buttons[i].onclick = function () {
        //每次点击的时候，让元素身上 自定义属性发生变化
        this.index *= -1;

        var value = this.getAttribute('attrName');//盖特额吹逼幼特
        productSort(value,this.index);
        changeArrow.call(this);
        clearArrow.call(this);
    }
}

function productSort(value,index) {
    if(value === 'time'){
        data.sort(function (a,b) {
            return (new Date(a.time))-(new Date(b.time))*index
        })
    }else{
        data.sort(function (a,b) {
            return (a[value])-(b[value])*index
        })
    }
    bindHtml(data);
}

function changeArrow() {
    var down = this.children[1];
    var up = this.children[0];
    if(this.index<0){
        down.classList.add('bg');
        up.classList.remove('bg');
    }else{
        down.classList.remove('bg');
        up.classList.add('bg');
    }
}
function clearArrow() {
    for (var i = 0; i < buttons.length; i++) {
        if (this != buttons[i]){
            buttons[i].children[1].classList.remove('bg');
            buttons[i].children[0].classList.remove('bg');
            buttons[i].index = -1;
        }
    }
}
