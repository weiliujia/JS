let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //入口的文件
    entry:'./scr/main.js',
    //出口的位置和文件
    output:{
        //必须是绝对路径
        path:path.resolve(__dirname,'./dist'), 
        filename:'bounld.js'
    },
    module:{
        rules:[
            {text:/\.js$/,use:'babel-loader',exclude:'/node_modules'},
            {text: /\.css$/,use:[ 'style-loader','css-loader']},
            {text: /\.less$/,use:[ 'style-loader','css-loader','less-loader']},
            {text: /\.(jpg|png|jpeg)$/,use: 'url-loader?limit=8000'},
            {text: /\.vue$/,use: 'vue-loader'},
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./scr/index.html'
        })
    ]
}
console.log(path.resolve(__dirname, './dist'));
