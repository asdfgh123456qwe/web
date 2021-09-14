const path = require("path");   //路径管理
const HtmlPlugin = require("html-webpack-plugin");   //引入插件，实现html文件的打包
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode : 'development',
    //入口文件配置项
    entry : {
        'index' : './src/index.js'
    },
    //出口文件的配置
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : "[index].js"        //打包好的文件名（一般情况同入口文件名）
        // publicPath : '127.0.0.1:8081/'
    },
    module : {
        rules : [
            {
                test : /\.css$/,         //用来检索css文件
                use : [MiniCssExtractPlugin.loader,'css-loader']      //用style-loader和css-loader文件对上述css文件进行翻译
            },{
                test : /\.scss$/,
                use : [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            }//,{
            //     test : /\.png|jpg|gif$/,
            //     use : [{
            //         loader : 'url-loader',
            //         options : {
            //             outputPath : 'image/',
            //             limit : 500
            //         }
            //     }]
            // }
        ]
    },
    plugins : [
        new MiniCssExtractPlugin({
            filename : "css/[index].css"
        }),
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes : true
            },
            hash : true,
            template : "./src/index.html"
        })
    ],
    //配置webpack开发服务功能
    devServer : {
        contentBase : path.resolve(__dirname,'dist'),   //启动路径为打包之后的项目dirname为当前的未打包的项目以及配置项，dist为打包项目存放的目的文件夹
        host : '127.0.0.1',    //服务器的ip地址
        compress : true,
        port : '8081',
        open : true
    }
}