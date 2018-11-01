import React from 'react';
import ReactDOM from 'react-dom';
function tick(){
    let a =new Date().toLocaleString();
    ReactDOM.render(<div>{a}</div>,document.querySelector('#root'))
}
//ReactDOM.render : 可以让视图重新渲染
tick()
setInterval(tick,1000)