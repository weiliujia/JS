import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class User extends Component {
    constructor() {
        super();
        this.state = {number:100}
    }
    change=(key,e)=>{
        
        //受控组件如果想更改内容，必须通过更改状态影响内容
        //当事件触发的时刻，name事件对象是存在的，当方法执行完成，那么会被默认值null

        //受控组件一般是针对表单元素的；

        //onChange  onKeydown  onkeyup
        this.setState({number:e.target.value})
    }
    render() {
        //组件依赖于状态
        return <div >
            <input type="text" value={this.state.number} onChange={(e)=>{this.change(1,e)}}/>{this.state.number}
            </div>
    }
}
ReactDOM.render(<User/>, window.root)