
const path = require('path');
const webpack = require('webpack');
const HtmlWebpachPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    // 先style-loader再css-loader
                    { loader: 'css-loader'},
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                },{
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                },{
                    loader: "less-loader"
                }]
            },
            {
                test: /\.(png|gif|jpg|jpeg)$/,
                use:'file-loader'
            }
        ]
    },
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpachPlugin({
            template: path.join(__dirname, 'public/index.html'), // html模板所在位置
            filename: 'index.html',  // 指定打包出来的html文件名称
        }),
        new FriendlyErrorsWebpackPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true,    // 设置启动的时候自动打开浏览器
        disableHostCheck: true, //  新增该配置项
    }
};