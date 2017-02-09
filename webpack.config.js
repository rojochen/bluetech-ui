var webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'eval',
    entry: {
        bluetechUI: './src/js/app.js',
        bluetechStyle: './src/js/style.js'
    },
    output: {
        path: 'dist/js',
        filename: '[name].min.js',
    },
    resolve:{
        modulesDirectories: ['src/js/', 'node_modules'],
        alias: {
            bluetech: 'bluetech/dist/js/bluetech'
        }
    },
    module: {
        loaders: [
            {
                test: /\.(png|gif)$/,
                loader: 'url-loader?limit=100000'
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css?minimize!sass")
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css?minimize!sass")
            }, {
                test: /\.(jpg|woff|svg|ttf|eot)([\?]?.*)$/,
                loader: "file-loader?name=../css/img/[name].[ext]"
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            debug: true,
            minimize: true,
            sourceMap: true,
            output: {
                comments: true
            },
            compressor: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new ExtractTextPlugin("../css/bluetechStyle.min.css", {
            allChunks: true
        })
    ],
    devServer: {
        hot: true,
        inline: true,
        port: 3000,
        contentBase: ["node_modules", "demo", "demo/view/", 'dist']
    }
};