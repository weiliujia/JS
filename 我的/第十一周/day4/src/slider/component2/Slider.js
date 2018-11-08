import React, { Component } from 'react';
import SliderItem from './SliderItem';
import SliderArrow from './SliderArrow';
import SliderDots from './SliderDots';
export default class Slider extends Component {
    constructor() {
        super();
        this.state={index:0}
    }
    go=(sped)=>{
        let index = this.state.index + sped;
        let list = this.refs.item.refs.ul;
        console.log(this.state.index+sped);
        
        if(index>this.props.imgs.length){
            list.style.transitionDuration= '0s';
           list.style.left = 0
           //let left = window.getComputedStyle(list).left;
         setTimeout(()=>{
            list.style.transitionDuration = '0.5s';
            this.setState({ index: 1 })
         },30)
          return
           
        }
        if(index<0){
            list.style.transitionDuration = '0s';
            list.style.left = this.props.imgs.length*-600+'px'
            let left = window.getComputedStyle(list).left;
            setTimeout(() => {
                list.style.transitionDuration = '0.5s';
                this.setState({ index:this.props.imgs.length-1 })
            },30)
            //list.style.transitionDuration = '0.5s';
            //this.setState({ index: 2 })
            return
        }
        
       
        
        this.setState({index})
    }
    turn=()=>{
        this.timer=setInterval(()=>{
           // console.log(1);
            this.go(1)
            //this.setState({ index: this.state.index+1})
        },1000)
    }
    componentDidMount(){
       this.turn()
    }
    render() {
        return <div className='content' onMouseEnter={()=>{clearInterval(this.timer)}} 
            onMouseLeave={() => { this.turn()}}>
            <SliderItem index={this.state.index} imgs={this.props.imgs} ref='item'/>
            <SliderArrow go={this.go}/>
            <SliderDots go={this.go} index={this.state.index} imgs={this.props.imgs}/>
        </div>

    }
}