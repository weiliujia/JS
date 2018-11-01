
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter); //将router-link 和router-view 变成全局组件
import Home from '../page/home.vue';
import List from '../page/list.vue';
import Collect from '../page/collect.vue';
import User from '../page/user.vue';




let routes = [
    {path:'/',component:Home},
    {path: '/home',component: Home},
    {path: '/list',component: List,name:'mList'},
    {path: '/collect', component: Collect},
    {path: '/user',component: User},
    {path:'*',redirect:'/home'}

]
let router = new VueRouter({
    routes
})
export default router