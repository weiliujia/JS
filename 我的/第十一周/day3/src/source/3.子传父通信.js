import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.css"
class Panel extends Component{
    constructor(){
        super();
        this.state={color:"success",a:1,b:2}
    }
    changeColor =(color)=>{
        //因为状态只能自己进行修改：需要将此方法传递到子组件中，档子组件中的事件出发时，调用次函数,子组件通过传递过去的方法改变父组件中的状态
        this.setState({...this.state,color})
    }
    render(){
       return <div className="container">
       <div className={`panel panel-${this.state.color}`}> 
       <Header change={this.changeColor}/>
       </div>
       </div>
    }
}
class Header extends Component{
    constructor(){
        super()
    }
    render(){
        return <div className="panel-heading">
            <button onClick={()=>{this.props.change('danger')}}>变红</button>
            <button onClick={()=>{this.props.change('warning')}}> bianhuang</button>
            {/* { <button onClick={this.props.change}> 改变颜色</button> } */}
        </div>
    }
}

ReactDOM.render(<Panel/>,window.root)