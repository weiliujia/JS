function on(ele, type, fn) {
    if (!ele['my' + type]) {
        ele['my' + type] = [];
    }
    let a = ele['my' + type];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === fn) {
            return
        }
    }
    a.push(fn)
}
function off(ele, type, fn) {
    let a = ele['my' + type];
    if (a && a.length > 0) {
        for (let i = 0; i < a.length; i++) {
            if (a === fn) {
                a[i] = null;
            }
        }
    }

}
function fire(type, e) {
    let a = this['my' + type];
    if (a&&a.length>0){
        for (let i = 0; i < a.length; i++) {
            if (typeof a[i]==='function'){
                a[i].call(this,e);
            }else{
                a.splice(i,1);
                i--;
            }
        }
    }
}
