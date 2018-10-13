### 变量提升：
- 是一个阶段，在当前作用域下，代码执行之前，对带var和function的关键字的进行声明和定义
 var关键字 是进行声明   例如：var num   
 function关键字  是声明和定义  例如 fn = FFF000
 
函数定义步骤：
1.开辟一个堆内存，假设引用地址是FFF000;
2.将函数体的内容以字符串的形式存入到该内存
3.将引用地址赋值给函数名（fn），fn代表整个函数体

函数执行的步骤：
1.开辟一个私有的作用域
2.将函数体的字符串转换成JS代码，代码从上往下执行 
注意：每次函数运行时都会开辟一个私有作用域，私有作用域之间没有关联

代码的步骤：
1.开辟一个私有作用域
2.形参赋值
3.变量提升
4.代码从上往下执行

全局作用域：页面加载时形成  全局变量
私有作用域：函数运行时形成  私有变量：带var关键字和形参
概念：函数运行时产生的封闭的空间，保护里面的变量不受外界的污染
作用域链查找的顺序：
1.判断下是否是私有变量，若是，则与外界无关
2.若不是，则往上级作用域查找，若还没找到，则继续往上查找，直到window,若window下也没有则会报错
上级作用域：只跟函数定义有关，跟函数执行无关，函数在哪定义的，上级作用域就是谁


## 变量提升细节知识点
- 函数作为值存在时不会变量提升(只会对等号前面的进行变量提升)
  - 函数表达式
  - 函数作为返回值
- return 后面的不会变量提升，但是return下面还是要变量提升
- 重名变量 不会重复声明，但会重复定义 
- 不管条件是否成立，带var关键字的会变量提升,带function关键字，标准浏览器下会声明但不会定义，IE浏览器下会声明+定义
- 自执行函数本身不会变量提升，自执行函数里面的内容还是要进行变量提升

## 闭包
 - 是一种机制,当函数运行时形成一个保护里面的变量不受外界污染的私有作用域，称为是闭包
 闭包的作用：
  - 封装性
  - 保护作用
 - 闭包常见的几种形式
   - 自执行函数  
   外界如何访问闭包里的内容？ window.xx = xxx
   闭包里的内容如何拿到外界的内容？ 传参的方式：形参和实参
   - 柯里化函数 (函数的内部再返回函数) 预处理机制 bind方法封装利用这个思想
   (首先提前把公共的内容处理，把返回的小函数里会用到公共的内容，最后等需要的时候再执行返回的小函数，这种思想指预处理的机制)
   function fn(){
     //设置一些公共的内容
     return function(){}
   }
   - 闭包中返回对象
     - 解决闭包里内容共享问题
     
  //作用域销毁 this  面向对象设计模式（构造函数，原型模式）
   
  


 