import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//在react实例生成的过程中，会不断调用一些函数，那么这些函数就是这个生命周期的钩子函数
//每一个组件都有自己的生命周期
class Count extends Component {
    static defaultProps = {
        //该对象会把属性放到实例的Props属性上
        //如果有值不再使用默认值，如果没有才使用该默认值
        b: '生命周期',


    }
    constructor() {
        super();
        console.log('2.constructor');
        this.state = { num: 100 }

    }
    //组件将要挂载所调用的钩子函数
    componentWillMount() {
        console.log('3.componentWillMount');
        //setState在componentWillMount是同步的
        this.setState({ num: 20 })
    }
    //组件挂载完成所调用的钩子函数
    //将常用于操作dom元素
    componentDidMount() {
        console.log('5.componentDidMount');
    }

    add = () => {
        //this.setState({ num: this.state.num + 1 })
        ReactDOM.unmountComponentAtNode(window.root);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        //当数据更新时，会先出发这个函数，如果该函数返回false，那么不会调用下边的钩子函数，如果返回true，会继续调用后面的钩子函数
        //nextProps代表下一次的属性
        //nextState代表下一次的状态
        console.log(nextProps, nextState);

        //return !(nextState.num%2)
        return true
        
    }
    //组件更新完成之后
    componentDidUpdate() {
        //当所有的子组件更新完成之后，才会触发父组件身上的这个钩子函数
        console.log('componentDidUpdate');
    }
    //当组件销毁时，触发该函数，组件销毁，DOM解构消失
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    //组件将要更新
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    //组件正在挂载
    render() {
        console.log('4.render');
        return <div > {this.state.num}
            <button onClick={this.add}>点我！</button>
            <Child m={this.state.num} />
        </div>
    }
}

//生命周期
//组件的初始化：defaultProps==>constructor==>componentWillMount==>render==>componentDidMount
//组件的数据更新：shouldComponentUpdate===>conponentWillUpdate===>conponentDidUpdate
class Child extends Component {
    constructor() {
        super();
    }
    componentWillReceiveProps() {
        //当第一次接受父组件传递过来的数据时，不执行该函数，之后，只要父组件状态发生改变
        console.log('componentWillReceiveProps');
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate-child");
        return true;
    }
    componentWillUpdate() {
        console.log("componentWillUpdate-child");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate-child");
    }
    render() {
        return <div>{this.props.m}</div>
    }
}
ReactDOM.render(< Count />, window.root)