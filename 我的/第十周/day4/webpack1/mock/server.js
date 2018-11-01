let http = require('http');
let fs = require('fs');
let url = require('url');
let sliders = require('./sliders');
http.createServer((req,res)=>{

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") return res.end();//后台配置，测试请求的连接性，是否已连接


   

    let {pathname,query} = url.parse(req.url,true)
  /*   if(pathname==='/sliders'){
        res.setHeader('Content-Type','application/json;charset=utf-8');
        res.end(JSON.stringify(sliders))
    } */

    //热门图书
    if(pathname==='/hotbooks'){
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        let books = fs.readFileSync('./book.json','utf-8');
        res.end(JSON.stringify(books));
        return
    }

    //收藏书籍
    if (pathname === '/collectbook'){
        var str= ``;
        req.on('data',res=>{
            str+=res;
        });
        req.on('end',re=>{
         var newStr = JSON.parse(str);
         let ary = fs.readFileSync('./collectBook.json', 'utf-8') ;
         ary = JSON.parse(ary)
         ary.push(newStr)
         fs.writeFileSync('./collectBook.json', JSON.stringify(ary), 'utf-8');
         res.end()
        })
    }
   
}).listen(9997,()=>{
    console.log('9997启动成功');
    
})