(function () {
    let data = null;
    $.ajax({
        url: 'data/data.json',
        success: function (res) {
            console.log(res);
            if (res && res.length > 0) {
                data = res;
                bindHtml(res);
                moveCard(res);
            }
        }
    })
    //将数据绑定到页面
    function bindHtml(data) {
        var str = '';
        data.forEach(res => {
            str +=
                `
              <li class="card">
                 <i class="fa ${res}"></i>
             </li>
            `
        });
        $('.deck').html(str);
    }

    //乱序排列卡片
    function moveCard(data) {
        let len = data.length;
        let randomNum = null;
        var c = null;
        while (len > 0) {
            randomNum = Math.floor(Math.random() * len); //16 0-15
            len--;
            $('.deck li').eq(len).children('i').attr('class', `fa ${data[randomNum]}`);
            // data[len] data[randomNum]
            c = data[len];
            data[len] = data[randomNum];
            data[randomNum] = c;
        }
        console.log(data);

    }

    var b = true;
    var moveStep = 0;
    $('.deck').on('click', 'li', function () {
        let card = $(this).attr('class') //card
        if (card === 'card') {
            if (b) {
                b = false;
                time();
            }


            let openLength = $('.open').length;
            let index = $(this).index();
            switch (openLength) {
                case 0:
                    $('.deck li').eq(index).addClass('open show');
                    window.index1 = index;
                    break;
                case 1:
                    $('.deck li').eq(index).addClass('open show');
                    window.index2 = index;

                    moveStep++;
                    $('.moves').html(moveStep);
                    if (moveStep == 20 || moveStep == 40) {
                        $('.stars li').eq(0).remove();
                    }

                    var str1 = $('.deck li').eq(index1).children('i').attr('class');
                    var str2 = $('.deck li').eq(index2).children('i').attr('class');
                    if (str1 == str2) {
                        $('.deck li').eq(index1).removeClass('open show').addClass('match animated bounce');
                        $('.deck li').eq(index2).removeClass('open show').addClass('match animated bounce');
                        setTimeout(() => {
                            $('.deck li').removeClass(' animated bounce');
                        }, 1000)
                    } else {
                        $('.deck li').eq(index1).removeClass('open show').addClass('wrong animated wobble');
                        $('.deck li').eq(index2).removeClass('open show').addClass('wrong animated wobble');

                        setTimeout(() => {
                            $('.deck li').removeClass('wrong animated wobble');
                            /*  $('.deck li').eq(index1).removeClass('wrong animated wobble');
                             $('.deck li').eq(index2).removeClass('wrong animated wobble'); */
                        }, 1000);

                    }
                    if ($('.match').length === $('.deck li').length) {
                        setTimeout(() => {
                            //卡片显示时间停止
                            clearInterval(t);
                            successCard();
                        }, 1000);
                    }
                    break;
                default:
                    ;
            }
        }
    })

    //事件开始显示
    var num = 1,
        t;

    function time() {
        t = setInterval(() => {
            $('.timer').html(num++);
        }, 1000)
    }
    $('.reset').on('click', function () {
        $('.stars').html('<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>');
        $('.moves').html(0);
        $('.timer').html(0);
         $('.deck li').removeClass('open show match');
        moveCard($('.deck li').length);
        clearInterval(t);
    })

    function successCard() {
        $('.c-box').css('display','block');
        $('.c-box').addClass('animated bounceIn');
        var step = $('.moves').html();
        var time = $('.timer').html();
        let length = $('.stars li').length;
        let str = '';
        while (length > 0) {
            length--;
            str += ' ★';
        }
        $('.c-box ul li[val="1"]').html('Stars:' + str);
        $('.c-box ul li[val="2"]').html('Moves:' + step);
        $('.c-box ul li[val="3"]').html('Timer:' + time);
    }
    $('.fa-close').on('click', function () {
        $('.c-box').css('display','none');
        $('.c-box').removeClass('animated bounceIn').addClass('animated bounceOut');
        $('.stars').html('<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>');
        $('.moves').html(0);
        $('.timer').html(0);
         $('.deck li').removeClass('open show match');
        moveCard($('.deck li').length);
        clearInterval(t);
    })

})()