import React from 'react'
let Local = (key) => (Component) => {
    //需要然后一个组件
    return class A extends React.Component {
        constructor() {
            super();
            this.state={[key]:''}
        }
        componentDidMount(){
            let val = localStorage.getItem(key);
            this.setState({ [key]: val })
        }
        render(){
            return <Component {...this.state}/>
        }
    }
}
export default Local





