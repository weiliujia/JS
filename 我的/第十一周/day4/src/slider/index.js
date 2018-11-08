import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from './component/Slider'
import './index.css'
let imgs = [require("./img/1.gif"), require("./img/2.gif"), require("./img/3.gif"), require("./img/1.gif")]



ReactDOM.render(<Slider

autoplay={true}
imgs={imgs}
/>, window.root)