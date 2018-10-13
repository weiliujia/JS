let QQMusic = (function () {
    let $header = $('.QQMusic>header'),
        $main = $('.main'),
        $footer = $('.QQMusic>footer'),
        $playBtn = $('.playBtn'),
        $songWord = $('.songWord'),
        $runTime = $('.runTime'),
        $innerL = $('.innerL'),
        $endTime = $('.endTime'),
        myAudio = $('#audio')[0];
    let timer = null;
    let $oPs = null;

    //设置main部分的高度= 一屏的高度-头部的高度-尾部的高度-main的margin-songWord的padding
    function setHeight() {
        let winH = document.documentElement.clientHeight || document.body.clientHeight;

        let h = winH - $header.height() - $footer.height() - parseInt($main.css('margin-top')) - parseInt($songWord.css('padding-top')) * 2;
        $main.css("height", h + 'px');
    }

    function bindHtml(ary) {
        let newStr = ``;
        ary.forEach(function (item, index) {
            newStr += `<p m="${item.m}" s="${item.s}">${item.w}</p>`;
        });
        $songWord.html(newStr);
        $oPs = $songWord.find('p');
    }

    function btnRotate() {
        myAudio.addEventListener('canplay', function () {
            //console.log(1);
            //btnRotate();
            playMusic()
        },false);
    }


    /* myAudio.addEventListener('canplay', function () {
     console.log(1);
     //btnRotate();
     //playMusic()
     },false);*/

    function playMusic() {
        if ($playBtn.hasClass('rotateClass')) {
            $playBtn.removeClass('rotateClass');//移除类名,图标阿停止
            myAudio.pause();  //音频文件停止播放
        } else {
            $playBtn.addClass('rotateClass');  //添加类名，音乐图标转动
            myAudio.play(); //音频播放
            computedTime();
        }
    }

    $playBtn.singleTap(function () {
        playMusic();
    });
    function formatTime(time) {
        let m = parseInt(time / 60);
        m = m < 10 ? '0' + m : m;
        let s = parseInt(time - m * 60);
        s = s < 10 ? '0' + s : s;
        return `${m}:${s}`;

    }

    function computedTime() {
        // console.log(myAudio.duration);//音频文件的总播放时间啊，秒
        let duration = myAudio.duration;
        $endTime.html(formatTime(duration));
        timer = window.setInterval(function () {
            let curT = myAudio.currentTime;
            $runTime.html(formatTime(curT));
            if (curT >= duration) {
                clearInterval(timer);
                $songWord.css('transform','translate(0)');
                $playBtn.removeClass('rotateClass');
            } else {
                //匹配歌词
                matchLyric();
            }
            $innerL.css("width", curT / duration * 100 + '%');
        }, 500)
    }

    //匹配歌词
    let posY = 0;

    function matchLyric() {
        //获取一播放时间的分钟数和秒数，然后所有P标签中筛选出相同的分钟数和秒数p标签，给这个p标签添加类名active
        let curTime = formatTime(myAudio.currentTime);
        curTime.split(':');//["00":"05"]
        let [m, s] = curTime.split(':');
        //console.log(m, s);
        let $curP = $oPs.filter(`[m='${m}']`).filter(`[s='${s}']`);
        //console.log($curP.length);
        if ($curP.length === 0)return;//一个都没找到
        if ($curP.hasClass('active'))return;
        $curP.addClass('active').siblings().removeClass('active');
        let index = $curP.index();
        if (index>2){
            posY-=$curP[0].offsetHeight;//累加网上移动的距离，由于网上移动是负值，所以是累减移动的距离
            $songWord.css('transform',`translateY(${posY}px)`);
        }
    }

    return {
        init: function () {
            setHeight();
            $.ajax({
                url: 'data.json',
                dataType: 'json',
                success: function (data) {
                    //console.log(data);
                    let str = data.lyric;
                    let ary = [];
                    let reg = /\[(\d{2}):(\d{2})\.\d+\]([^\[]+)/g;
                    str.replace(reg, function ($0, $1, $2, $3) {
                        //$0: 正则匹配的内容
                        //$1: 第一个分组的内容
                        //$2: 第二个分组的内容
                        //$3: 第三个分组的内容
                        let obj = {};
                        obj.m = $1;
                        obj.s = $2;
                        obj.w = $3;
                        ary.push(obj);
                    });
                    //console.log(ary);
                    bindHtml(ary);
                    //playMusic();
                    btnRotate();
                }
            })

        }
    }
})();
QQMusic.init();
