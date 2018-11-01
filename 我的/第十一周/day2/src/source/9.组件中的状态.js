
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//状态：是组件自己私有的，是可以更改的
//props：属性
//state：状态
class Dev extends Component{
    constructor(){
        super()
        //一般会在constructor中定义状态
        this.state = {count:1}
    }

    //在类的原型上定义事件行为的方法
    add=()=>{
        //  this.state=8;//不会导致使徒的刷新
        //  this.setState({count:this.state.count+1})
        //  setState:是对当前组件状态的修改的方法，并且可以调用render方法重新执行，从而让视图刷新
        //  this.setState((prev)=>({count:prev.count+1}))
        //  this.setState((prev) => ({count: prev.count + 1}))
        //  setState 还可以传递一个函数，函数的参数是代表上一次的状态



        //  this.setState({count: this.state.count + 1})
        //  this.setState({count: this.state.count + 1})
        this.setState({
            count: this.state.count +1
        })



   
    }
    render(){
        //console.log(this);//state
        //this.state = 1000;
        return <div>
            <p> {this.state.count} </p>
            <button onClick={this.add}>+</button>
        </div>
    }
}
//react 中的事件绑定
//1.事件行为遵循驼峰命名
//2.事件行为的属性值的大括号中不能为空
ReactDOM.render(<Dev/>,window.root)


