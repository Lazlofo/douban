
var webpack = require("webpack");
var path = require("path");
module.exports = {
    entry: ['webpack/hot/dev-server', __dirname + '/app/main.js'],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },

    module: {
        loaders: [    //加载时
            {
                test: /\.(js|jsx)$/,      //匹配
                exclude: /node_modules/,   //除该文件夹
                loader: 'babel-loader',    
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ],

    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000,
        inline: true
    }
};