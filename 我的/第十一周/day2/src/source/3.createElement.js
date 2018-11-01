import React from 'react'; //react 是react核心模块
import ReactDOM from 'react-dom'; //提供和DOM相关的功能，会在window下新增一个ReactDOM属性，ReactDOM 属性下有一个render方法，render方法将react元素或者组件插入到页面
let a = <div>789</div>

//JSX 元素实际上是React.createElement的一个语法糖
// React.createElement(type,prop,children)
//type: 当前的标签类型
//prop：行间属性
//children： 子节点:从第三个实参开始，代表当前元素的子节点

let b = React.createElement("p", {arr: "123"}, "小猪佩奇", React.createElement("span",null,"乔治"),React.createElement("span",null,"佩奇")) //null不能省略不写
console.log(b);

ReactDOM.render(b,window.root)