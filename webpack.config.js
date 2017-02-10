var webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
    debug: true,
    devtool: '#eval-source-map',
    context: path.join(__dirname, 'app', 'js'),
    entry: {
        bluetechUI: ['webpack/hot/dev-server',
            'webpack-hot-middleware/client', __dirname + '/src/js/app.js'
        ],
        bluetechStyle: ['webpack/hot/dev-server',
            'webpack-hot-middleware/client', __dirname + '/src/js/style.js'
        ]
    },
    output: {
        path: __dirname + '/dist/js',
        // publicPath: '/dist/',
        filename: '[name].min.js',
    },
    resolve: {
        modulesDirectories: ['src/js/', 'node_modules'],
        alias: {
            bluetech: 'bluetech/dist/js/bluetech'
        }
    },
    module: {
        loaders: [{
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
        }]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
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
        new ExtractTextPlugin("../css/bluetechStyle.min.css", {
            allChunks: true
        })
    ]
};