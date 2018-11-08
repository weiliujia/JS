//高阶组件
//高阶函数
// function fn(a){
//     return function fn(b){
//         return function fn(c){
//             return a+b+c
//         }
//     }
// }

// let fn=(a)=>(b)=>(c)=>a+b+c

// fn(1)(2)(2)

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Username  from './Username' 
import Password from './Password' 
ReactDOM.render(<div>
    <Username/>
    <Password />
</div>,window.root)

