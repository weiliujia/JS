import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import {Provider} from 'react-redux';
import store from './store/index'
import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));


