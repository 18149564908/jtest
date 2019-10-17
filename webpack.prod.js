
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpachPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js'
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
                    MiniCssExtractPlugin.loader,// MiniCssExtractPlugin插件功能是与style-loader功能互斥的
                    "css-loader",
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,// MiniCssExtractPlugin插件功能是与style-loader功能互斥的
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(png|gif|jpg|jpeg)$/,
                use:{
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash:8].[ext]', // [ext]:图片资源的后缀名
                    
                    }
                }
            }
        ]
    },
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new OptimizeCssAssetsWebpackPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        new HtmlWebpachPlugin({
            template: path.join(__dirname, 'src/index.html'), // html模板所在位置
            filename: 'index.html',  // 指定打包出来的html文件名称
            // chunks: ['index'], // 指定html要使用哪些chunk
            // inject: true,
            // minify: {
            //     html5: true,
            //     collapseWhitespace: true,
            //     preserveLineBreaks: false,
            //     minifyCSS: true,
            //     minifyJS: true,
            //     removeComments: false,
            // }
        })
    ]

};