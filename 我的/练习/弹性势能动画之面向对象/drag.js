class Drag {
    constructor(ele) {
        this.ele = ele;
        this.ele.addEventListener('mousedown', this.down.bind(this), false)
    }

    down(e) {
        e.preventDefault();
        this.l = e.clientX - this.ele.offsetLeft;
        this.t = e.clientY - this.ele.offsetTop;
        this.MOVE=this.move.bind(this);
        this.UP=this.up.bind(this);
        document.addEventListener('mousemove',this.MOVE,false);
        document.addEventListener('mouseup',this.UP,false);

    }

    move(e) {
        this.ele.style.left = e.clientX - this.l +'px';
        this.ele.style.top = e.clientY - this.t +'px';
        fire.call(this.ele,'dragMove',e)
    }

    up(e) {
        document.removeEventListener('mousemove',this.MOVE,false);
        document.removeEventListener('mouseup',this.UP,false);
        fire.call(this.ele,'dragUP',e)
    }
}