import React, { Component } from 'react';
export default class SliderDots extends Component{
    constructor(){
        super()
    }
    render(){
        return <div className='focus'>
            {this.props.imgs.map((item,index)=>{
                if(index===this.props.imgs.length-1){
                    //如果当前的索引到最后一张时，不需要返回任何的span，这是一张重复的而图片，为了无缝滚动
                    return null
                }
                //当
                // return <span key={index} className={this.props.index === index || this.props.index === this.props.imgs.length-1 && index === 0 ?'active':''} onClick={()=>{this.props.goo(index-this.props.index)}}></span>
                return <span key={index} className={this.props.index === index || this.props.index-index === this.props.imgs.length - 1  ? 'active' : ''} onClick={() => { this.props.goo(index - this.props.index) }}></span>
                //index - this.props.index 让目标状态-初始状态0
            })}
        </div>
    }
}