
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpachPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
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
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')({
                                    browsers: ['last 2 version', '>1%', 'ios 7']
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,// MiniCssExtractPlugin插件功能是与style-loader功能互斥的
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    },
                    "less-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')({
                                    browsers: ['last 2 version', '>1%', 'ios 7']
                                })
                            ]
                        }
                    }
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
            },
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
            template: path.join(__dirname, 'public/index.html'), // html模板所在位置
            filename: 'index.html',  // 指定打包出来的html文件名称
            chunks: ['vendors', 'main'], // 指定html要使用哪些chunk
        }),
        new CleanWebpackPlugin(),

        new FriendlyErrorsWebpackPlugin()

    ],
    optimization: {
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                commons: {
                    test: /(react|react-dom)/,
                    name: 'vendors',
                    chunks:'all'
                }
            }
        }
    }

};