
# 搭建webpack
_在此记录我搭建webpack4+react+less的过程_

##为什么需要构建工具
>转换es6、
转换jsx、
css前缀补全/预处理器、
压缩混淆、
图片压缩等等



_记录过程记录在issues上_

### issues上1-4是讲述基本的webpack4配置，接下来记录下配置项目开发常用的功能

--------------------------------------------------------------------------------
### 引入antd,过程按官网来 <https://ant.design/docs/react/introduce-cn>

>注：启用css modules会与antd冲突

解决办法：Webpack 中针对 node_modules 中的依赖包单独写一个 loader 规则，不开启 css module ，并且给自己的代码打开 css module

```
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                use: [
                    'style-loader',
                    {
                        loader:'css-loader',
                        options: {
                            modules: true,
                        }
                    },
                ]
            },
            // 针对antd与css modules冲突问题
            {
                test: /\.css$/,
                exclude: [/src/],
                use: [
                    'style-loader',
                    {
                        loader:'css-loader',
                        options: {
                            // modules: true,
                        }
                    },
                ]
            },
            {
                test: /\.less$/,
                exclude: [/node_modules/],
                use: [
                    'style-loader',
                    {
                        loader:'css-loader',
                        options: {
                            modules: true,
                        }
                    },
                    'less-loader'
                ]
            },
            // 针对antd与css modules冲突问题
            {
                test: /\.less$/,
                exclude: [/src/],
                use: [
                    'style-loader',
                    {
                        loader:'css-loader',
                        options: {
                            // modules: true,
                        }
                    },
                    'less-loader'
                ]
            },
```

---------------------------------------------------------
## 使用react hook的理由

- 组件变得复杂和难以维护
