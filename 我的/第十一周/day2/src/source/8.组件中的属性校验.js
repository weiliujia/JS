import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; //引入属性校验模块
// 1. 组件中的数据来源有两个；
// 1. props，从外界传过来的是属性
// 2. state ：是组件中自己私有的；
// 组件中只有当属性或状态发生改变，才会重新渲染视图
class Text extends Component{
    static propTypes = {
        num:PropTypes.number.isRequired
    }
    static defaultProps={
        n:100
    }
    constructor(){
        super()
    }
    render(){
        return <div>{this.props.n}</div>
    }
}

ReactDOM.render(<Text num={1} n="999"/>,window.root)