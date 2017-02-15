const webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path');

module.exports = {
    devtool: '#eval-source-map',
    context: path.join(__dirname, 'app', 'js'),
    entry: {
        bluetechUI: ['webpack/hot/dev-server',
            'webpack-hot-middleware/client', `${__dirname}/src/js/app.js`
        ],
        bluetechStyle: ['webpack/hot/dev-server',
            'webpack-hot-middleware/client', `${__dirname}/src/js/style.js`
        ]
    },

    output: {
        path: `${__dirname}/dist/js`,
        // publicPath: '/dist/',
        filename: '[name].min.js',
        libraryTarget: "umd", // defined with AMD defined method
    },
    resolve: {
        modules: [
            'src/js/', 'node_modules'
        ],
        extensions: [".js", ".json", ".jsx", ".css"],
        alias: {
            bluetech: 'bluetech/dist/js/bluetech.min'
        }
    },
    resolveLoader: {
        // 讓loader不用打
        moduleExtensions: ['-loader']
    },
    //禁止显示webpack的build.js太大的提示
    performance: {
        hints: false
    },
    module: {
        rules: [{
                test: /\.(png|gif)$/,
                use: 'url?limit=100000'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style',
                    loader: [{
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
                    loader: [{
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
            }
        ]

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new ExtractTextPlugin({
            filename: "../css/bluetechStyle.min.css",
            disable: false,
            allChunks: true
        }), new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            sourceMap: false,
            compress: {
                drop_console: true
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad']
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
};