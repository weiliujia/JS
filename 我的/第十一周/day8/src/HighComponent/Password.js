import React, { Component } from 'react'
import Local from './Local'
 class Password extends Component {
    // constructor(){
    //     super();
    //     this.state={Password:''};
    // }
    // componentDidMount(){
    //     let Password = localStorage.getItem('Password');
    //     this.setState({ Password: Password})
    // }
    render() {
        return (
            <div>
                <input type='text' value={this.props.Password} onChange={()=>{}}/>
            </div>
        )
    }
}
export default Local('Password')(Password)
