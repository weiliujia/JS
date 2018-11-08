import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Paren extends Component {
    constructor() {
        super();
        this.state={num:1}
    }
    add=(e)=>{
        this.setState({num:e.target.value})
    }
    addd=(key,e)=>{
        this.setState({num:e.target.value})
    }
    render() {
        return <div>
            <input type="number" value={this.state.num} onChange={this.add}/>{this.state.num}
            <input type="number" value={this.state.num} onChange={(e)=>{this.addd(1,e)}} />{this.state.num}
        </div>
    }
}
ReactDOM.render(<Paren/>, window.root)