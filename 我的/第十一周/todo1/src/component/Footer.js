import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions/index'
 class Footer extends Component {
    constructor() {
        super();
    }
    render() {
        return <div>
            <ul className="nav nav-pills" onClick={(e)=>{
                console.dir(e.target)      
                let type= e.target.dataset.type;
                this.props.changeType(type)
        }}>
                <li role="presentation" className={this.props.type==='all'?'active':''}><a href="#" data-type='all'>全部任务</a></li>
                <li role="presentation" className={this.props.type === 'finish' ? 'active' : ''}><a href="#" data-type='finish'>已完成</a></li>
                <li role="presentation" className={this.props.type === 'unfinish' ? 'active' : ''}><a href="#" data-type='unfinish'>未完成</a></li>
            </ul>
        </div>
    }
}
export default connect(state => ({ ...state.todo }), actions)(Footer)