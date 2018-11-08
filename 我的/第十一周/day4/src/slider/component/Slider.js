//创建了四个组件：其中Slider是集合组件
import React, { Component } from 'react'
import SliderItem from './SliderItem'
import SliderDots from './SliderDots'
import SliderArrow from './SliderArrow'
//export default 把当前组件导出
export default class Slider extends Component {
    constructor() {
        super();
        this.state = { index: 0 }
    }
    goo = (step) => {
        //根据不同的操作，控制step是不一样的
        let index = this.state.index + step
        let list = this.refs.item.refs.ul
        if (index === this.props.imgs.length) {
       // if (this.state.index === 3) {
            console.log(this.refs.item.refs.ul);
            //清空当前ul的动画过渡时间
            list.style.transitionDuration = '0s'
            list.style.left = 0
            setTimeout(() => {
                list.style.transitionDuration = "0.5s"
                // index = 1
                //this.setState({ index: 0 })
                this.setState({ index:1 })
            }, 30)
            return
        }
        if (index < 0) {
            list.style.transitionDuration = '0s'
            this.refs.item.refs.ul.style.left = (this.props.imgs.length - 1) * -400 + 'px'
            setTimeout(() => {
                this.refs.item.refs.ul.style.transitionDuration = "0.5s"
                //index = this.props.imgs.length - 2
                this.setState({ index:2 })
            }, 30)
            return

        }
       this.setState({ index })

    }
    go = () => {
        this.timer = setInterval(() => {
            // this.setState({ index: this.state.index + 1 })
            this.goo(1)
        }, 1000)
    }
    componentDidMount() {
        this.go()
    }
    render() {
        return <div className="container" onMouseEnter={() => { clearInterval(this.timer) }} onMouseLeave={() => { this.go() }}>
            <SliderItem ref='item' imgs={this.props.imgs} index={this.state.index} />
            <SliderDots imgs={this.props.imgs} index={this.state.index} goo={this.goo} />
            <SliderArrow goo={this.goo} />
        </div>
    }
}