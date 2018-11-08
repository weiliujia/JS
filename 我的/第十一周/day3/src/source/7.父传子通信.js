import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Parent extends Component {
    constructor() {
        super();
        this.state = { num: 100 }
    }
    add=(con)=>{
        this.setState({num:this.state.num+con})
    }
    render() {
        return <div>
            {this.state.num}
            <button onClick={this.add.bind(this,3)}>+3</button>
            <button onClick={()=>this.add(2)}>+2</button>
            <Child n={this.state.num}/>
        </div>
    }
}
class Child extends Component {
    constructor() {
        super();
    }
    render() {
        return <div>{this.props.n}</div>
    }
}

ReactDOM.render(<Parent />, window.root)