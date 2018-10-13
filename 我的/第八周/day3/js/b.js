//console.log(require); //require 是一个函数 作用是获取对用的模块

//console.log(window); //node 中的全局变量 是  global 而不是window

//console.log(global.require);
//node执行时 一个模块就是一个私有有作用域
//require module ... 全局属于这个模块的私有变量 部署以glpbal
let qqq = require('./a.js'); //require 中的参数是另一个模块的路径
//console.log(qqq); //这个qqq 是一个空对象 原因是就是 a.js 中没有导出的操作，
//require 可以上引用的文件执行 ，但是

console.log(qqq.sum(10, 10));

//let qqq = require('./a'); //.js 的后缀可以省略

