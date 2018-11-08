import React, { Component } from 'react'
import {connect} from 'react-redux'
import actions from '../store/actions/index'
class Body extends Component {
    constructor() {
        super();
    }
    delete=(id)=>{
        this.props.delete(id)
    }
    change=(id)=>{
        this.props.change(id)
    }
    finish=()=>{
        let todos
        if(this.props.type==='all'){
            todos=this.props.todos
        }
        if (this.props.type ==='finish'){
            todos = this.props.todos.filter(item => item.isSelected)
        }
        if (this.props.type === 'unfinish') {
            todos = this.props.todos.filter(item => !item.isSelected)
        }
        return todos
    }
    render() {
        console.log(this.props.todos);
        return <div>
            <ul className="list-group">
            {this.finish().map((item,index)=>{
                    return <li className="list-group-item" key={index}>
                        <input type="checkbox" checked={item.isSelected} onChange={() => { this.change(item.id)}}/>
                        {item.title}
                        <button className='btn btn-xs pull-right'  onClick={()=>{this.delete(item.id)}}>&times;</button></li>
                })}
            </ul>   
        </div>
    }
}
export default connect(state => ({ ...state.todo }), actions)(Body)