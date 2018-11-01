
import React from 'react';
import ReactDOM from 'react-dom';
let arr = [1,2,3,4,5];
//将数组中的每一项循环到每一个li中
//在react中经常使用数组的map方法来便利数据，创建出新的dom

let ul = <ul>
    {arr.map((itme,index)=>{
        //item : 代表数组的每一项 index 代表每一项的索引：
        return <li key={index}>{itme}</li>
    })}
</ul>
ReactDOM.render(ul,window.root);
// 1. 箭头函数中的this指向上一级作用域中的this；
// 2. 没有arguments
// 3. 不能作为构造函数
// 4. 不能作为generator函数