import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import PropTypes from 'prop-types'
export class App extends Component {
    constructor() {
        super()
        this.state={color:'red'}
    }
    static childContextTypes={//定义上下文类型
        color: PropTypes.string,
        setColor: PropTypes.func,
    }
    getChildContext(){//获取上下文，返回一个对象
        return { color: this.state.color, setColor: this.setColor}
        
    }
    setColor=()=>{
        this.setState({
            color:'green'
        })
    }
    render() {
        return (
            <div>
                <Header/>
            </div>
        )
    }
}
ReactDOM.render(<App />, window.root)



