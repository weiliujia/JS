
class Element{
    constructor(type, props, children) {
        this.type=type
        this.props = props
        this.children=children
    }
    render(){
        let  ele=document.createElement(this.type)
        for(let key in this.props){
            let val = key
            if(key==='className'){
                val='class'
            }
            if(key==='htmlFor'){
                val='for'
            }
            ele.setAttribute(val,this.props[key])
        }
        this.children.forEach((item,index) => {
            let newEle = item instanceof Element?item.render():document.createTextNode(item)
            ele.appendChild(newEle)
        });
        return ele
    }
}






let React = {
    creactElement(type,props,...children){
        return new Element(type, props, children)
    }

}
let ReactDom = {
    render(element,container){
        container.appendChild(element.render())
    }

}




//