import React, { Component } from 'react'
import Local from './Local'
class Username extends Component {
    // constructor(){
    //     super();
    //     this.state={user:''}
    // }
    // componentDidMount(){
    //     let user = localStorage.getItem('Username');
    //     this.setState({user:user})
    // }
    render() {
        return (
            <div>
                <input type='text' value={this.props.Username} onChange={()=>{}}/>
            </div>
        )
    }
}
export default Local('Username')(Username)