let http = require('http');
let fs = require('fs');
let url = require('url');

let server = http.createServer((req, res) => {
    //1.我们希望加载index.html
    //需要拿到请求的路径，顺便拿到请求的参数
    let {
        pathname,
        query
    } = url.parse(req.url, true)
    //哪的群殴爱你过去的李靖地址和请求参数
    if (pathname === '/') {
        //读取到index的数据
        let home = fs.readFileSync('./index.html', 'utf-8');
        //返回给前端
        res.end(home);
        return
    }

    if (pathname === '/performance-now.js.map' || pathname === '/favicon.ico') {
        res.end();
        return
    }

    let reg = /\.(\w+)$/g;
    if (reg.test(pathname)) {
        let con = fs.readFileSync('.' + pathname, 'utf-8');
        res.end(con);
        return
    }
    //开始第一步
    var dataUrl = './data.json';
    var dataSuc = {
        code: 0,
        msg: 'success',
        data: null
    }
    if (pathname === '/getList') {
        let con = fs.readFileSync(dataUrl, 'utf-8');
        //为了更加规范所以将数据添加到dataSuc
        dataSuc.data = con;
        res.end(JSON.stringify(dataSuc));
        return
    }

    //增加一个新客户
    if (pathname === '/addInfo') {
        var str = '';
        //接收前端发送的data数据
        req.on('data', function (res) {
            str += res
        })
        //拿到data数据之后，插入到本地数据当中
        req.on('end', function () {
            // console.log(str);
            //将接受到的数据转成对象进行添加
            str = JSON.parse(str);
            let data = JSON.parse(fs.readFileSync(dataUrl, 'utf-8'));
            console.log(data.length);
            //不能直接用数据中最后一项作为新增加的对象的id
            str.id = data[data.length - 1]['id'] + 1;
            data.push(str);
            fs.writeFileSync(dataUrl, JSON.stringify(data), 'utf-8');
            //返回给前端成功接受的标识符
            res.end(JSON.stringify(dataSuc));
        })
    }
    //展示客户查询的信息
    if (pathname === '/getInfo') {
        let data = JSON.parse(fs.readFileSync(dataUrl, 'utf-8'));
        for (var i = 0; i < data.length; i++) {
            //便利数据中的每一条，然后将符合数据的那一条返回
            if (data[i]['id'] == query.id) {
                dataSuc.data = data[i];
            }
        }
        res.end(JSON.stringify(dataSuc));
    }
    //修改
    if (pathname === '/updataInfo') {
        var str = '';
        req.on('data', function (res) {
            str += res;
        })
        req.on('end', function () {
            let newStr = JSON.parse(str);
            let data = JSON.parse(fs.readFileSync(dataUrl, 'utf-8'));
            for (var i = 0; i < data.length; i++) {
                if (data[i]['id'] == newStr['id']) {
                    data[i] = newStr;
                }
            }
            fs.writeFileSync(dataUrl, JSON.stringify(data), 'utf-8');
            res.end(JSON.stringify(dataSuc));
        })
    }
    //删除数据的接口
    if (pathname === '/removeInfo') {
        let data = JSON.parse(fs.readFileSync(dataUrl, 'utf-8'));
        for (var i = 0; i < data.length; i++) {
            if (data[i]['id'] == query.id) {
                data.splice(i, 1);
                break;
            }
        }
        fs.writeFileSync(dataUrl, JSON.stringify(data), 'utf-8');
        dataSuc.data = data;
        res.end(JSON.stringify(dataSuc));
    }

    if (pathname === '/souInfo') {
        let data = JSON.parse(fs.readFileSync(dataUrl, 'utf-8'));
        let dataNew = null
        for (var i = 0; i < data.length; i++) {
            if (data[i]['name'] == query.name) {
                dataNew = data.splice(i, 1);
                break;
            }
        }
       /*  fs.writeFileSync(dataUrl, JSON.stringify(dataNew), 'utf-8'); */
        dataSuc.data = dataNew;
        res.end(JSON.stringify(dataSuc));
    }
})

server.listen(9895, () => {
    console.log('端口9895已启动');
})