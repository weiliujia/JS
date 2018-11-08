import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Slider from './component2/Slider'
import './index2.css'
import a from './imgs/1.png'
import b from './imgs/2.jpg'
import c from './imgs/3.jpg'
let imgs = [{ src: a }, { src: b }, { src: c }]




ReactDOM.render( < Slider
    imgs={imgs}/> , window.root)