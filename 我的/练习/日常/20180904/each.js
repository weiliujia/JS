function each(obj,fn) {
    if ('length' in obj){
        for (var i = 0; i < obj.length; i++) {
           var cur = fn && fn.call(obj[i],i,obj[i]);
           if (cur === 'false'){
               break;
           }
        }
    }else {
        for (var key in obj){
            var cur = fn && fn.call(obj[key],key,obj[key]);
            if (cur === 'false'){
                break;
            }
        }
    }
}
each(lis,function (index,item) {
    console.log(item);
    if (item.innerHTML == 2){
        return false
    }
});
