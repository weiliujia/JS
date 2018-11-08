import React,{Component} from 'react';
export default class SliderItem extends Component{
    constructor(){
        super()
    }
  
    render(){
        let style = {
            width:this.props.imgs.length*400+'px',
            
            left:this.props.index*-400+'px',
            transition: `left 0.5s linear`
        }
        return <ul className="wrapper" style={style} ref='ul'>
        {this.props.imgs.map((item,index)=>(
            <li key={index}><img src={item} alt="" key={index}/></li>
        ))}
        </ul>
    }
}


