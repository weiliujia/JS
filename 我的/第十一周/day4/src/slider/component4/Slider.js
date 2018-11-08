import React, { Component } from 'react';
import SliderItem from './SliderItem'
import SliderArrow from './SliderArrow'
import SliderDots from './SliderDots'
export default class Slider extends Component {
    constructor() {
        super();
        this.state={index:0}
    }
    go=(sped)=>{
        let index = this.state.index+sped;
        let uls=this.refs.Item.refs.ul;
        if(index>this.props.imgs.length){
            uls.style.transitionDuration = '';
            uls.style.left = 0;
            let left = window.getComputedStyle(uls).left;
            uls.style.transitionDuration = '0.5s';
            this.setState({index:1})
            return
        }
        if (index<0) {
            uls.style.transitionDuration = '';
            uls.style.left = this.props.imgs.length*-800+'px';
            let left = window.getComputedStyle(uls).left;
            uls.style.transitionDuration = '0.5s';
            this.setState({ index: this.props.imgs.length-1 })
            return
        }
      
        this.setState({index:this.state.index+sped})
    }
    turn=()=>{
        this.timer=setInterval(()=>{
            this.go(1)
        },1000)
    }
    componentDidMount(){
        this.turn()
    }
    render() {
        return <div className='content' onMouseEnter={()=>{clearInterval(this.timer)}} onMouseLeave={()=>{this.turn()}}>
            <SliderItem index={this.state.index} imgs={this.props.imgs} ref='Item'/>  
            <SliderArrow index={this.state.index} go={this.go}/>
            <SliderDots index={this.state.index} go={this.go} imgs={this.props.imgs}/>
        </div>
    }
}