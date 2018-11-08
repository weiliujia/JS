import React, { Component } from 'react';
import { connect } from 'react-redux'
import actions from '../store/actions/index'
class Header extends Component {
    constructor() {
        super();
    }
    addTodo = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            this.props.add(e.target.value);
            e.target.value = ''
        }
    }
    unfinish=()=>{
       return this.props.todos.filter(item => !item.isSelected).length
    }
    render() {

        console.log(this.props.todos);

        return <div>
            <h3>亲，还有{this.unfinish()}件事未完成</h3>
            <input type="text" className='form-control' onKeyUp={this.addTodo} />
        </div>
    }
}
export default connect(state => ({ ...state.todo }), actions)(Header)