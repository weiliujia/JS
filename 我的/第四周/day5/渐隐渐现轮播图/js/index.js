//获取元素
let $outer = $('#outer');
let $swiper = $('.swiper');
let $focus = $('.focus');
let $left = $('.left');
let $right = $('.right');
let step = 0;
let timer = null;
let data = null;
//注意：用jq获取到还没有生效的元素没有dom映射

//请求数据
$.ajax({
    url: 'data.json',//请求地址
    method: 'get', //请求方式
    async: false,//是否异步
    dataType: 'json',//要求返回书籍格式
    success: function (n) {//成功执行的方法
        data = n;
        bindHtml();
    }
});
console.log(data);
//绑定数据
function bindHtml() {
    var imgStr = ``;
    var liStr = ``;
    $.each(data, function (index, item) {
        imgStr += ` <img data-src="${this.img}" alt="">`;
        liStr += `<li class="${index == 0 ? 'selected' : ''}"></li>`
    });
    $swiper.html(imgStr);
    $focus.html(liStr);
    lazyImg()
}
//延迟加载
function lazyImg() {
    $('.swiper img').each(function (index) {
        let that = this;
        let newImg = new Image();
        let url = $(this).attr('data-src');
        newImg.src = url;
        $(newImg).load(function () {
            $(that).attr('src', this.src);
            newImg = null;
            index === 0 ? $(that).fadeIn(500) : null;
        })
    })
}
timer = setInterval(autoMove, 2000);
function autoMove() {
    step++;
    if (step >= data.length) {
        step = 0;
    }
    console.log(step);
    $('.swiper img').eq(step).fadeIn().siblings().fadeOut();
    $('.focus li').eq(step).addClass('selected').siblings().removeClass('selected')
}
$('.outer').hover(function(){
    clearInterval(timer);
    $('#outer .left,#outer .right').fadeIn()
},function(){
    timer = setInterval(autoMove,2000);
    $('#outer .left,#outer .right').fadeOut()
});
$right.click(function () {
    autoMove();
});
$left.click(function () {
    step -= 2;
    if (step < -1) {
        step = data.length - 2
    }
    autoMove();
});
$('.focus li').hover(function () {
    step = $(this).index() - 1;
    autoMove();
});

