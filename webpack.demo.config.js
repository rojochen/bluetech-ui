var webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'eval',
    entry: {
        app: './demo/js/app.js',

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
            // angular: 'bluetech/dist/js/bluetech.min'
        }
    },
    resolveLoader: {
        moduleExtensions: ['-loader'] //讓loader不用打
    },
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
    ],
    devServer: {
        hot: true,
        inline: true,
        port: 3000,
        contentBase: ["node_modules", "demo"]
    }
};