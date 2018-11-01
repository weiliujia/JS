let path = require('path')
let htmlWebpackPlugin = require('html-webpack-plugin')
//遵循common.js规范

//默认导出一个对象
module.exports = {
    //入口文件
    entry: './src/main.js',
    //出口文件
    output:{
        //出口的文件名
        filename:'build.js',
        //出口的路径【绝对路径】
       path:path.resolve(__dirname, './dist')
    },
    //对于模块的配置，相当于把模块引入对文件进行编译【打包文件之前】
    module:{
        rules:[
            //将webpack1中的所有文件都进行编译，但是node_modules文件不要编译,指定版本的语言编译 => .babelrc
            {test: /\.js$/,use: 'babel-loader',exclude: /node_modules/},
            //编译压缩，然后插入到style
            {test: /\.css$/,use:[ 'style-loader','css-loader']},
            {test: /\.less$/,use:[ 'style-loader','css-loader','less-loader']},
            //如果图片大约8000kb，就直接放到dist目录里，小鱼8000转成2进制
            {test: /\.(jpg|png|gif)$/,use: 'url-loader?limit=8000'},
            {test: /\.vue$/,use: 'vue-loader'},
        ]
    },
   plugins: [
       new htmlWebpackPlugin({
           template: './src/index.html'
       })
   ]
}
//console.log(path.resolve(__dirname,'./dist'));
