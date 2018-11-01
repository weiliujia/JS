//alert('打包成功')
// import sum from './a.js' //是求平均数
// let a = sum('1',2,3,4,5,6)
// console.log(a);
// let c =b =>d=>e=>b+d+e;
// let x = c(1)(2)(3)

// console.log(x);

// document.write('123')

//通过es6的模块导入导出出来引入vue文件

import Vue from 'vue';
//vue 分为两个部分 一个是runtime 
//必须腰痛一个函数 render:funciton
//另外一个是complar vue实例上的 解析templat
import App from './App.vue';
//router
import router from './router';


import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, )

new Vue({
    el:'#app',
    render:h=>h(App),
    router
    
})



