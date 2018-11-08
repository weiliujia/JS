import React, { Component} from 'react';
import SliderItem from './SliderItem'
import SliderDots from './SliderDots'
import SliderArrow from './SliderArrow'


export default class Slider extends Component {
    constructor() {
        super();
        this.state={index:0}
    }

    turn = (sped)=>{
        let index = this.state.index + sped;
        let list = this.refs.item.refs.ul;
        if(index===this.props.imgs.length){
           
            list.style.transitionDuration = '0s';
            list.style.left = 0 
            // console.log(window.getComputedStyle(this.refs.item.refs.ul).left);
            
            // let left = window.getComputedStyle(this.refs.item.refs.ul).left;
            // list.style.transitionDuration = '0.5s';
            
            // this.setState({index:1})
            setTimeout(() => {
                list.style.transitionDuration = "0.5s"
                // index = 1
                //this.setState({ index: 0 })
                this.setState({ index: 1 })
            }, 30)
            return
        }
        if(index<0){
            list.style.transitionDuration = '0s';
            list.style.left = (this.props.imgs.length-1) *-400+'px'
            setTimeout(() => {
                list.style.transitionDuration = "0.5s"
               
                this.setState({ index: 2 })
            }, 30)
            return
        }
        this.setState({index})
      
    }



    go=()=>{
        this.timer = setInterval(() => {
            // console.log(this.state.index);
            
          this.turn(1)
        }, 1000)
    }

    componentDidMount(){
        this.go()
    }


    render() {
        return <div className='content' onMouseEnter={() => { clearInterval(this.timer) }} onMouseLeave={()=>{this.go()}}>
          <SliderItem imgs={this.props.imgs} index={this.state.index} ref='item' /> 
            <SliderDots imgs={this.props.imgs} index={this.state.index} turn={this.turn}/>
            < SliderArrow turn={this.turn}/>
        </div>
    }
}
