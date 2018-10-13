(function () {
    class Callbacks {
        has(type, fn) {//判断事件池中是否有没有这个方法
            if (this[type] && this[type] instanceof Array) {//this是实例  判断他有没有
                return this[type].includes(fn);//includes 判断数组中有没有这个参数，返回布尔值

            }
        }

        add(type, ...arg) {//向事件池中添加相对应的方法
            this[type] = (this[type] && this[type] instanceof Array) || []; //如果实例上的type属性没有，或者不是一个数组，我都让他为空数组
            arg.forEach(item => {
                if (typeof item === 'function' && !this[type].includes(item)) {
                    //判断要向事件池中添加的属性是否是一个函数，或者之前已经添加过了
                    this[type].push(item);
                }
            })
        }

        remove(type, ...arg) {//移除事件池中相对应方法
            if (this[type] && this[type] instanceof Array) {
                //循环我要移除的函数数组
                for (let i = 0; i < arg.length; i++) {
                    let cur = arg[i];//cur 就是要移除的每一个函数
                    if (this[type].includes(cur)) {
                        let n = this[type].indexOf(cur);//找出重复的那一项在事件池中的索引位置
                        this[type][n] = null;//将是事件池中的那一项清除即可
                    }
                }
            }
        }

        fire(type, ...arg) {//type是哪一个事件池，...arg是函数执行的参数集合
            if (this[type]) {
                for (let i = 0; i < this[type].length; i++) {
                    let cur = this[type][i];//表示事件池中的每一项
                    if (typeof cur === 'function') {
                        cur.apply(this, arg);//让是函数的值执行并且传参，再改变函数中的this
                    } else {
                        this[type].splice(i, 1);
                        i--;
                    }
                }
            }
        }
    }
    class Drag extends Callbacks {
        constructor(ele) {
            super();
            this.ele = ele;
            //计算盒子最大的宽度
            this.maxL = (document.documentElement.clientWidth || document.body.clientWidth) - this.ele.offsetWidth;
            this.maxT = (document.documentElement.clientHeight || document.body.clientHeight) - this.ele.offsetHeight;
            window.addEventListener('resize',()=>{
                this.maxL = (document.documentElement.clientWidth || document.body.clientWidth) - this.ele.offsetWidth;
                this.maxT = (document.documentElement.clientHeight || document.body.clientHeight) - this.ele.offsetHeight;
            });
            //按住小球
            let down = (e) => {
                //求出鼠标距离盒子内边框的距离
                this.l = e.clientX - this.ele.offsetLeft;
                this.t = e.clientY - this.ele.offsetTop;
                //按下小球实现拖动，为防止鼠标丢失给document添加方法；
                document.addEventListener('mousemove', move, false);
                //添加小球抬起方法
                document.addEventListener('mouseup', up, false);
                clearInterval(this.ele.flytimer);
                clearInterval(this.ele.droptimer);
            };
            let move = (e) => {
                //小球运动的绝对定位的值
                this.ele.style.left = e.clientX - this.l + 'px';
                this.ele.style.top = e.clientY - this.t + 'px';
                //this.getSpeed();
                this.fire('mySpeed')
            };
            let up = (e) => {
                document.removeEventListener('mousemove', move, false);
                //抬起以侯清除
                document.removeEventListener('mouseup', up, false);
                //this.fly();
                //this.drop();
                this.fire('boll')
            };
            this.ele.addEventListener('mousedown', down, false)
        }

        getSpeed() {
            //求出小球最后移动的距离
            if (!this.prevSpeed) {
                //如果一开始没有速度先记录一下第一次的速度
                this.prev = this.ele.offsetLeft;
            }
            //有了速度之后，把新的速度减去老的速度就是我们要求的速度
            this.speed = this.ele.offsetLeft - this.prevSpeed;
            //计算之后新的速度变成老的速度
            this.prevSpeed = this.ele.offsetLeft;
        }

        fly() {//盒子左右运动
            let flySpeed = this.speed;
            //清除定时器 =>盒子停止得时候

            this.ele.flytimer = setInterval(() => {
                if (Math.abs(flySpeed) < 0.5) {
                    clearInterval(this.ele.flytimer);
                    return
                }
                flySpeed *= 0.98;//0.98 => 指数衰竭
                let L = this.ele.offsetLeft + flySpeed;
                //盒子模型的13个属性 => 四舍五入的整数
                if (L >= this.maxL) {//盒子飞到最大位置掉头
                    L = this.maxL;//盒子到头直接等于终点
                    flySpeed *= -1;
                } else if (L <= 0) {//盒子飞到最小位置掉头
                    L = 0;
                    flySpeed *= -1;
                }
                console.log(flySpeed);
                this.ele.style.left = L + 'px';
            }, 17)
        }

        jump(){
            this.add('boll',this.fly,this.drop);//把两个方法添加到ball这个事件池中
            this.add('mySpeed',this.getSpeed);
        }
        //垂直降落
        drop() {
            let dropSpeed = 9.8;
            let flag = 0;
            this.ele.droptimer = setInterval(() => {
                if (flag>=2){//当flag的值大于等于2的时候，说明盒子已经两次循环停留在最底部了，盒子已经静止了，我们需要清除定时器
                    clearInterval(this.ele.droptimer);
                    return;
                }
                dropSpeed += 9.8;
                dropSpeed*=0.98;
                let T = this.ele.offsetTop + dropSpeed;
                //希望小球到底部弹起来
                if(T>=this.maxT){
                    T=this.maxT;
                    dropSpeed*=-1;
                    flag++;
                }else {
                    flag=0;
                }
                this.ele.style.top = T + 'px';
            }, 17)
        }
    }
    window.Callbacks = Callbacks;
    window.Drag = Drag;
})();