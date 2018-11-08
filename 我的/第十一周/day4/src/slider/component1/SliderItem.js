import React, { Component } from 'react';

export default class SliderItem extends Component {
    constructor() {
        super();
    }
    render() {
        let style={
            width:this.props.imgs.length*400+'px',
            left: this.props.index * -400 + 'px',
            transition:`left 0.5s linear`
        }
        return <ul className='ul' style={style} ref='ul'>
            {this.props.imgs.map((item,index)=>{
               return <li key={index}><img src={item} key={index}/></li>
            })}
        </ul>
    }
}
