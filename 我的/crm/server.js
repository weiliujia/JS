let http = require('http');
let fs = require('fs');
let url = require('url');

let server = http.createServer((req, res) => {

    let {
        pathname,
        query
    } = url.parse(req.url, true)

    if (pathname === '/') {
        let home = fs.readFileSync('./index.html', 'utf-8')
        res.end(home);
        return
    }
    if (pathname === '/favicon.ico') {
        res.end()
        return
    }

    let reg = /\.(\w+)$/g;
    if (reg.test(pathname)) {
        let con = fs.readFileSync('.' + pathname, 'utf-8');
        res.end(con);
        return
    }

    var dataUrl = './data.json';
    var dataSuc = {
        "code": 0,
        "msg": "success",
        "data": null
    }

    if (pathname === '/getList') {
        let con = fs.readFileSync(dataUrl, 'utf-8');
        dataSuc.data = con
        res.end(JSON.stringify(dataSuc));
        return

    }
    if (pathname === '/addInfo') {
        var str = '';
        req.on('data', function (res) {
            str += res;
        })
        req.on('end', function () {
            str = JSON.parse(str)
            let data = JSON.parse(fs.readFileSync(dataUrl, 'utf-8'));
            str.id = data[data.length - 1]['id'] + 1
            data.push(str);
            fs.writeFileSync(dataUrl, JSON.stringify(data), 'utf-8');
            res.end(JSON.stringify(dataSuc))
        })
    }
    if (pathname === '/getInfo') {
        let data = JSON.parse(fs.readFileSync(dataUrl, 'utf-8'));
        for (var i = 0; i < data.length; i++) {
            // 便利数据当中的每一条，然后将符合数据的那一条返回
            if (data[i]['id'] == query.id) {
                dataSuc.data = data[i]
            }
        }
        res.end(JSON.stringify(dataSuc))
    }

    if (pathname === '/updateInfo') {
        var str = '';
        req.on('data', function (res) {
            str += res;
        })
        req.on('end', function () {
            let newStr = JSON.parse(str);
            let data = JSON.parse(fs.readFileSync(dataUrl, 'utf-8'));;
            for (let i = 0; i < data.length; i++) {
                if (data[i]['id'] == newStr['id']) {
                    console.log(newStr);
                    data[i] = newStr
                }
            }
            fs.writeFileSync(dataUrl, JSON.stringify(data), 'utf-8');
            res.end(JSON.stringify(dataSuc))
        })
    }
    if (pathname === '/removeInfo') {
        let data = JSON.parse(fs.readFileSync(dataUrl, 'utf-8'));
        for (let i = 0; i < data.length; i++) {
            if (data[i]['id'] === query['id']) {
                data.splice(i, 1);
                break
            }
        };
        fs.writeFileSync(dataUrl, JSON.stringify(data), 'utf-8');
        dataSuc.data = data;
        res.end(JSON.stringify(dataSuc));
    }
})
server.listen(9978, () => {
    console.log('9978端口已启动！');
})