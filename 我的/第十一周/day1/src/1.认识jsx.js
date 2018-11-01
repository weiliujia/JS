//JSX :JS +XML 的组合，可以在js中编写html元素
import React from 'react';
import ReactDOM from 'react-dom';
//将<div>132</div>这个元素放进全局下id名为root的元素中
ReactDOM.render(<div>132</div>,document.getElementById('root'))