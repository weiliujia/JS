import React from 'react'
import ReactDOM from 'react-dom'
class Dev extends React.Component{
    constructor(){
        super();
        this.state = {con:10}
    }
    add=()=>{
this.setState({con:this.state.con+1})
    }
    
    render(){
        return <div>
            <p>{this.state.con}</p>
            <button onClick={this.add}>++</button>
        </div>
    }
}


ReactDOM.render(<Dev/>,window.root);
