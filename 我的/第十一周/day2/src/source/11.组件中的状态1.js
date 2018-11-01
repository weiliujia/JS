import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class Dev extends Component{
    constructor(){
        super()
        this.state = {con:10}
    }
    add=()=>{
        this.setState({con:this.state.con+1})
    }
    render(){
        return <div>
            <div className="div1" style={{color:"red"}}>{this.state.con}</div>
            <button onClick={this.add}>++</button>
        </div>
    }
}

ReactDOM.render(<Dev/>,window.root)
