import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './lunbo.css'
import a from './banner.jpg'
import b from './banner1.png'
import c from './banner2.png'
let imgs=[{src:a},{src:b},{src:c}]



class Slider extends Component {
    constructor() {
        super();
        this.state={index:0}

    }
    go=(sped)=>{
        let index = this.state.index+sped
        if(index>this.props.imgs.length){
            this.refs.ul.style.transition=''
            this.refs.ul.style.left=0
            setTimeout(()=>{
                this.refs.ul.style.transition=this.props.speed+'s'
                index = 1
                this.setState({ index })
            },30)
           return
        }
        if(index<0){
            this.refs.ul.style.transition = ''
            this.refs.ul.style.left = this.props.imgs.length*-400+"px"
            setTimeout(()=>{
                this.refs.ul.style.transition = this.props.speed + 's'
                index = this.props.imgs.length -1
                this.setState({ index })
            },30)
return
        }
        this.setState({index})
    }
    turn=()=>{//轮播
        this.timer=setInterval(() => {
            // this.setState({ index: this.state.index + 1 })
            this.go(1)
        }, this.props.delay)
    }
    componentDidMount(){
        if(this.props.autoplay){
          this.turn()
        }
    }
    render() {
        let style={
            width:(this.props.imgs.length+1)*400+'px',
            left:this.state.index*-400+'px',
            transition:`left ${this.props.speed}s linear `
        }
        return <div className="content" onMouseEnter={()=>{clearInterval(this.timer)}} onMouseLeave={()=>{this.turn()}}>
            <span onClick={()=>{this.go(-1)}}>&lt;</span>
            <span className="right" onClick={() => { this.go(1) }}>&gt;</span>
            <div className="dian" >
               {this.props.imgs.map((item,index)=>(
                   <i key={index} className={this.state.index===index||this.state.index===this.props.imgs.length&&index===0?'active':''} onClick={()=>{this.go(index-this.state.index)}}></i>
               ))}
               
             </div>
            
            
        <ul style={style} ref="ul">
            {this.props.imgs.map((item,index)=>(
                <li key={index}><img src={item.src}  key={index}/></li>
            ))}
                <li><img src={this.props.imgs[0].src} /></li>
                
        </ul>
        </div>
    }
}






ReactDOM.render(< Slider
delay={1000}
speed={0.5}
autoplay={true}
imgs={imgs}
/>, window.root)