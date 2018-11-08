import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';

class User extends Component {
    constructor() {
        super();
        this.state={sum:0}
    }
    changeSum=()=>{
        //这个函数利用了事件的冒泡传播，触发了div身上的onChange事件
        //console.log(100);
        //console.log(this.refs.a);
        this.setState({sum:Number(this.refs.a.value)*Number(this.refs.b.value)})
        //1.获取元素上的方法，给当前元素加上ref属性，当前元素就会挂载到当前实例的refs的属性上 this.refs.a

        //2.ref接受一个函数，并且函数第一个参数代表当前的元素
                
    }
    render() {
        return <div onChange={this.changeSum}>
            <input type="text" ref="a"/>*
            < input type = "text" ref={(x)=>this.b=x}/>=
            {this.state.sum}
             </div>
    }
}
ReactDOM.render(<User/>, window.root)