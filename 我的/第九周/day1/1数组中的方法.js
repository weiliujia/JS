/* 
forEach
map
for in
for of
filter
includes
find
some
every
reduce

*/
var ary = [4, 5, 6, 7, 8, 9, 1]

//map 将回调函数的返回值组成一个新数组
/* var newAry = ary.map((item,index)=>{
    return item*10;
})
console.log(newAry); */

//for in 便利对象
/* for (var key in ary) {
    console.log(key); //数组的索引
    console.log(ary[key]); //数组中的每一项
}

//for of 便利数组，不可便利对象
for (var item of ary) {
    console.log(item); //item对应的每一项

}
//直接便利对象会报错，调用【Object.keys()】
var obj = {name: 'zf',age: 8}
//console.log(Object.keys(obj));
for (var item of Object.keys(obj)) {
    console.log(item);

} */
//filter 过滤：将符合条件的值放到新的数组中
//1.遍历数组 2.将符合回调函数返回值的内容【判断为true】放到一个新的数组中
//原数组不变
/* var newAry = ary.filter((item, index) => {
    return item > 6
})
console.log(newAry, ary); */

//includes 判断数组当中是否有某项 有 =》true 没 false
/* var newAry = ary.includes(5);
console.log(newAry); */

//find 查找 =》找到符合条件的值并返回
//1.遍历数组 2.判断回调函数返回的布尔值，返回true，停止便利，直接将这个值【便利数组当前项】返回
/* var newAry = ary.find((item, index) => {
    return item > 6
})
console.log(newAry); */

//some 找true =>遍历数组中如果回调函数计算返回值计算为true，整体返回true，；全部便利后，都没有返回true，整体返回为false
/* var newAry = ary.some((item, index) => {
    return item > 10
})
console.log(newAry); */

//every 找false=> 1.遍历数组，2.如果回调函数返回值计算结果为false整体返回false
//如果计算结果为true，继续进行遍历，直到找到false，费则为true【当遍历结果后，全部返回true】否则为ture
/* var newAry = ary.every((item, index) => {
            return item>1
}) */

//reduce 返回两次计算后的结果
//1.遍历数组2.将毁掉函数返回值作为第一次的计算结果
//prev[初始值=》第一项的值，当循环第二次的时候，就是计算后的结果],
//next【数组第二项，从第二项一次向后获取】，
//index【next代表值所对应的索引】,
//input【当前数组】,
//遍历  ary.length-1次
//1.prev=》 4.next=》 5 index=》1 //这一次的计算结果 return xxx 【对应=》prev的值】
//2.prev=》undefined next =》 6 .. //第二次的计算结果 return xxx【对应=》prev的值】
var newAry = ary.reduce((prev,next,index,input)=>{
return prev +next.price
})
//调用reduce内置的方法可以实现数组中含有对象求和的操作，reduce第二个参数作为当前数组遍历的初始值