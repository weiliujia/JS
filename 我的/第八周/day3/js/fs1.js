/**/
let fs = require('fs');//引入文件读写模块

/*fs.readFile('./1.txt', 'utf-8', 'utf-8',
 //console.log(err);
 // err 只有读取失败时，才会有内容 ，他的值是读取的错误信息
 //读取成功时 他的值时null
 console.log(data); //err存在时 data是 undefinde
 });*/
//readFile 是一个异步操作
//readFileSync 是一个同步操作
//let data = fs.readFileSync('./1.txt', 'utf-8');
//console.log(data);
//console.log(123);

//fs.writeFile('./1.txt','this is xuxiang','utf-8',(err,data)=>{
//write 没有第二个参数
//   console.log(err);
//});
//writeFile 是个 异步执行
//writeFileSync 是同步
//console.log(123);

/*
 fs.appendFile('./1.txt','添加内容','utf-8',(err)=>{
 if (!err){//若err为null 则说明添加成功
 console.log('success');
 }
 });//这个是异步操作

 fs.appendFileSync('./1.txt','添加内容','utf-8',(err)=>{
 if (!err){//若err为null 则说明添加成功
 console.log('success');
 }
 });*/


function myAppend(url, str) {
    let data = fs.readFileSync(url, 'utf-8');
    fs.writeFileSync(url, data + str, 'utf-8')
}
myAppend('./1.txt', '这是自己的函数');
