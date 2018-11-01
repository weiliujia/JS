//组件的声明方式
//react 元素是组件的基本组成单位
//第一种：函数声明
/* 
   1. 组件的名字首字母必须大写，为了和JSX元素进行区分 
   2. 组件中必须返回一个顶级的react元素
   3. 组件定义之后，可以像react元素一样使用
 */
import React from 'react';
import ReactDOM from 'react-dom';

function Build(props) {
    //props : 接收到的是行间属性
    return <div > {props.a}</div>
}
let obj1 = {a:1}
//在组件中传递数据时，可以是属性的方式，可以采用丢向展开的方式进行传递
ReactDOM.render( <div>
        {/* <Build a="1"/> */}
        <Build {...obj1} v="1"/>
        <Build/>
        <Build/>
</div>,window.root)
//ReactDOM.render：
//1.在render执行时，回首先判断当前元素的行间属性是否是一个组件：
//2.如果是一个组件，把组件的行间属性打包成一个对象传给当前组件的函数，并且让函数执行，
//3.函数执行会产生一个返回值，会把返回值转化成正式的JSX，并且插入到根元素中