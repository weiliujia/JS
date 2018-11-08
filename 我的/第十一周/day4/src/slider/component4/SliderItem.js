import React, { Component } from 'react';
export default class SliderItem extends Component {
    constructor() {
        super();
    }
    render() {
        let style={
            width:(this.props.imgs.length+1)*800+'px',
            left:this.props.index*-800+'px',
            transition:`left 0.5s linear`
        }
        return <ul className='waring' style={style} ref='ul'>
            {this.props.imgs.map((item,index)=>{
                return <li key={index}><img src={item} alt="" key={index}/></li>
            })}
            <li ><img src={this.props.imgs[0]} alt=""  /></li>
        </ul>
    }
}