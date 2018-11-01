//定义一个Element的类
class Element{
    constructor(type,attr,children){
        //将函数createElement传过来的参数，都放在当前实例私有属性上
        this.type = type;
        this.attr = attr;
        this.children = children;
    }
    render(){
        //将虚拟dom转化成真实dom this==>element的实例
        let ele = document.createElement(this.type);
          for (let key in this.arrt) {
              let val = key
                 if (key === 'className') {
                     val = 'class'
                 }
                 if (key === 'htmlFor') {
                     val = 'for'
                 }
              ele.setAttribute(val, this.attr[key])
          }
          this.children.forEach((item,index) => {
              //如果该数组成员是一个虚拟dom，需要继续调用render
             let newEle = item instanceof Element? item.render():document.createTextNode(item);
             ele.appendChild(newEle)
          });
        return ele;

    }
}

let React = {
    createElement(type, attr, ...children) { //把第三个以及之后的参数都放进children的数组中
        return new Element(type,attr,children);
      
    }
}
let ReactDOM = {
    //element 是虚拟dom
    //appendChild：必须接受一个真实dom
    //
    render(element, container) {
        container.appendChild(element.render())
    }
}

let a = React.createElement('div',{a:4,b:5},"小小",React.createElement('span',null,"ppp"));
ReactDOM.render(a,window.root)