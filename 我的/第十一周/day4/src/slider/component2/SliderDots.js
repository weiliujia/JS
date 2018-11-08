import React, { Component } from 'react';
export default class SliderDots extends Component {
    constructor() {
        super()
    }
    render() {
        return <div className='fous'>
            {this.props.imgs.map((item,index)=>{
                return <span key={index} className={this.props.index==index||this.props.index==this.props.imgs.length&&index===0?'active':''}onClick={()=>{this.props.go(index-this.props.index)}}></span>
            })}
        </div>

    }
}