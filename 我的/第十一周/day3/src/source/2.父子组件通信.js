//function
/* function a() {
    let b = 18;
} */
//class :定义的组件有this，状态，生命周期；
//在项目中，如果当前的元素是静态的，不变的，name一般会用function的方法来定义
//如果当前组件中的元素是由数据渲染出来的，一般会采用class的方法来定义


import React, { Component} from 'react';
import ReactDOM from 'react-dom';

class Parent extends Component {
    constructor() {
        super();
        //一般情况下，在constructor中定义状态
        this.state = {a:100}
        }
        addNum=(count)=>{
            this.setState({a:this.state.a+count})
        }
    render() {
        return <div> 
            <button onClick={()=>{this.addNum(3)}}>++</button>
            < button onClick = {this.addNum.bind(this,2)} > ++ </button>
            <Child m={this.state.a}/>
        </div>
    }
}
//一个组件在另一个组件中进行使用，那么这个组件就是另一个组件的子组件
class Child extends Component {
    constructor() {
        super();
    }
    render() {
        return <div >{this.props.m}</div>
    }
}


ReactDOM.render( < Parent /> , window.root)