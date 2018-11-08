import React, { Component } from 'react';

export default class SliderDots extends Component {
    constructor() {
        super();
    }
    render() {
        return <div className='dian'>
            {this.props.imgs.map((item, index) => {
                if (index === this.props.imgs.length - 1) {
                    return null
                }
                return <span key={index} className={this.props.index == index || this.props.index === this.props.imgs.length - 1 && index === 0 ? 'active' : ''} onClick={()=>this.props.turn(index-this.props.index)}></span>
               

            })}
        </div>
    }
}
