import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route ,Redirect,Switch} from 'react-router-dom';

//定义三个静态的 组件

//切换路径显示不同的组件
let Home = () => (<div>Home</div> )
let User = () => (<div>User</div>)
let Personal = () => (<div>Personal</div>)


//HashRouter ,Route 这都都是一个组件，HashRouter组件包裹着所有的路由组件
//HashRouter 只能有一个子组件
//Route 代表的是一条路由 :常用两个属性，一个是path 代表当前的路径， component 代表对应的组件
//Redirect:重定向组件
//Switch:只要匹配合适的路径，就不在向下匹配
ReactDOM.render(
    <HashRouter>
        <div>
            {/* 浏览器路由包含此路径name就会把其他显示出来 */}
            <Switch> 
                <Route path='/' exact={true} component={Home} />
                <Route path='/user' component={User} />
                <Route path='/personal' component={Personal} />
                <Redirect to='/' />
            </Switch>
            
        </div>
    </HashRouter>
    , window.root)