import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Parent extends Component {
    constructor() {
        super();
        this.state = { num: "巴巴是乔治" }
    }
    // setChange=()=>{
    //     this.setState({num:"佩奇来了"})
    // }
    gaib=(num)=>{
        this.setState({...this.state,num})
    }
    render() {
        return <div>{this.state.num}
            <Child change={this.gaib}/>
        </div>
    }
}
class Child extends Component {
    constructor() {
        super();
    }
    render() {
        return <div>
            {/* <button onClick={this.props.change}>我要佩奇</button> */}
            <button onClick={()=>{this.props.change('巴巴是佩奇')}}>佩奇</button>
            <button onClick={() => { this.props.change('巴巴变回乔治了') }}>巴巴变回乔治了</button>
        </div>
    }
}

ReactDOM.render(<Parent />, window.root)