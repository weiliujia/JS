import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './10.tuo.css'
class User extends Component {
    constructor() {
        super();
        this.state = {x:850,y:200}
    }
    darg=(e)=>{
        this.l = e.clientX - this.state.x;
        this.t = e.clientY - this.state.y;
       console.log(this.l);
       
        document.onmousemove = (e) => {
            var l = e.clientX - this.l;
            var t = e.clientY - this.t;
            this.setState({x:l,y:t})
           // console.log(this.state);
        
        }
        document.onmouseup = ()=>{
            document.onmousemove = document.onmouseup=null
        }
    }
    render() {
        return <div className="add"   style={{left:this.state.x+"px",top:this.state.y+"px"}}   onMouseDown={this.darg}></div>
    }
}
ReactDOM.render(<User />, window.root)