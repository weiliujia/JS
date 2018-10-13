let path = require('path');


console.log(path.relative()); //输出的当前文件夹所在的绝对路径


console.log(__dirname); // 当前文件所在文件夹的路径
console.log(__dilename); //当前文件所在的路径 

console.log(path.relative(__dirname,'7.js'));



