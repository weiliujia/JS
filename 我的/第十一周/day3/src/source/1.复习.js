import React,{Component} from 'react';
import ReactDOM from 'react-dom';

let a = <div id='box'>123</div>
//let box = document.getElementById("box");
//只能获取上下文是document下的元素
//由于元素没有放入真实的DOM中，所有获取结果为null


//组件
/* 
  1.function
  2.class

*/
 function Build(a){
    return <div>{a.n}</div>
}


class Con extends Component{
    constructor(){
        super();
        //组件将数组包装成一个对象赋值给当前实例的props属性
        //在constructor中不能直接获取传递过来的属性，需要constructor的参数接收一下，才可以获取
    }
    render(){
        return <div>{this.props.h}</div>
    }
}

//属性和状态
//只要这两个数据发生变化，视图会随着刷新
//属性：从父组件传递过来的；由于react是单项数据流，所以不能更改
//状态：是自己私有的；是可以修改的，通过setState去更改装改，从让视图刷新

ReactDOM.render(
<div > 
    < Build n = "1"/> 
    <Con h="2"/>
    </div>,window.root,function(){
    //回调函数是真实dom都渲染完毕之后执行的该函数
let box = document.getElementById("box");
console.log(box);

})