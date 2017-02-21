var webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'eval',
    entry: {
        demo: './demo/js/modules/demo/main.js',
        app: './demo/js/app.js'    
    },
    output: {
        path: 'demo/js/',
        filename: 'bundle.min.js',
    },
    resolve:{
        modules: ['src/js/', 'src/css/', 'node_modules'],
        extensions: ['.js', '.css'],
        alias: {
            bluetech: 'bluetech/dist/js/bluetech'
        }
    },
    resolveLoader: {
        moduleExtensions: ['-loader']  //讓loader不用打
    },
    module: {
        rules: [{
                test: /\.(png|gif)$/,
                use: 'url?limit=100000'
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style',
                    use: [{
                        loader: 'css',
                        query: {
                            import: true,
                            modules: false,
                            sourceMaps: true
                        }
                    }, "sass"]
                })
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style',
                    use: [{
                        loader: 'css',
                        query: {
                            import: true,
                            modules: false,
                            sourceMaps: true
                        }
                    }, "sass"]
                })
            }, {
                test: /\.(jpg|woff|svg|ttf|png|eot)([\?]?.*)$/,
                use: "file?name=../css/img/[name].[ext]"
            }, {
                test: /\.js$/,
                exclude: /(node_modules|vendors)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),  //?
        // new webpack.LoaderOptionsPlugin({  //有用？
        //     minimize: true
        // }),
        new ExtractTextPlugin({
            filename: "../css/bluetechStyle.min.css",
            // disable: false,
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({  //壓縮
            beautify: false,
            sourceMap: false,
            comments: false,  //删除所有的注释
            compress: {
                warnings: false,  //在UglifyJs删除没有用到的代码时不输出警告
                drop_console: true,  //删除console语句
                collapse_vars: true,  //内嵌定义了但是只用到一次的变量
                reduce_vars: true,  //提取出出现多次但是没有定义成变量去引用的静态值
            }
        })
    ],
    devServer: {
        hot: true,
        inline: true,
        port: 3000,
        contentBase: ["node_modules", "demo", "demo/view/", 'dist']
    }
};