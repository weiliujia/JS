import React, { Component } from 'react'

export default class Detail extends Component {
    constructor(){
        super()
    }
    render() {
        console.log(this.props.match.params.id);
        console.log(user);
        
        let id = this.props.match.params.id;
        let user = JSON.parse(localStorage.getItem('userList'));
        let current = user.filter((item)=>item.id==id)
        return (
            <div>
                {current[0].user}
            </div>
        )
    }
}


