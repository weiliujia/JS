import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Slider from './component1/Slider'
import './index1.css'
let imgs = [require('./img/1.gif'), require('./img/2.gif'), require('./img/3.gif'),require('./img/1.gif')]


ReactDOM.render(<Slider
imgs={imgs}
/>,window.root)