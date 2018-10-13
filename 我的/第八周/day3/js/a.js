/**
 * Created by 97629 on 2018/10/11.
 */
console.log(10);
let aaa = 1234;


function sum(a, b) {
    return a + b
}
sum(1,3);
let obj = {
    name:'zf',
    age:9
};
exports=obj;
exports.sum = sum; //

//console.log(1000);  //位于exports 下面的代码仍然是可以执行的