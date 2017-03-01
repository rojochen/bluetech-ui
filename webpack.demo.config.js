var webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    nodeExternals = require('webpack-node-externals');

module.exports = {
    devtool: 'eval',
    entry: {
        vendor: ['angular', 'angular-ui-router'],
        main: './demo/js/app.js',

    },
    output: {
        path: 'demo/',
        filename: '[name].min.js',
        publicPath: '/bluetech-ui/'
    },
    resolve: {
        modules: ['src/js/', 'src/css/', 'node_modules'],
        extensions: ['.js', '.css'],
        alias: {
            bluetech: 'bluetech/dist/js/bluetech.min',
            angular: 'angular/angular.min',
            'angular-ui-router': 'angular-ui-router/release/angular-ui-router.min.js'
        }
    },
    resolveLoader: {
        moduleExtensions: ['-loader'] //讓loader不用打
    },
    // externals: [nodeExternals()], 排除node_module
    module: {
        rules: [{
            test: /\.html$/,
            exclude: /node_modules/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }],
        }, {
            test: /\.(png|gif)$/,
            exclude: /node_modules/,
            use: 'url?limit=100000'
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
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
            exclude: /node_modules/,
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
            exclude: /node_modules/,
            use: "file?name=assets/[name].[ext]"
        }, {
            test: /\.js$/,
            // exclude: /node_modules/,
            include: './demo/js/**',
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "/css/bluetechStyle.min.css",
            // disable: false,
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            include: /\.js$/,
            minimize: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",

            // filename: "vendor.js"
            // (给 chunk 一个不同的名字)

            minChunks: Infinity,
            // 随着 入口chunk 越来越多，这个配置保证没其它的模块会打包进 公共chunk
        })
    ],
    devServer: {
        hot: true,
        inline: true,
        port: 3000,
        contentBase: ["node_modules", "demo"]
    }
};