var webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: {
        bluetechUI: './src/js/app.js',
        "bluetechUI.min": './src/js/app.js',
        bluetechStyle: './src/js/style.js'
    },
    output: {
        path: 'dist/js',
        filename: '[name].js',
    },
    resolve: {
        modules: ['src/js/', 'src/css/', 'node_modules'],
        extensions: ['.js', '.css'],
        alias: {
            bluetech: 'bluetech/dist/js/bluetech.min',
            angular: 'angular/angular.min'
        }
    },
    resolveLoader: {
        moduleExtensions: ['-loader'] //讓loader不用打
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
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }]
    },
    externals: {
        // "angular": {
        //     root: 'angular',
        //     amd: 'angular',
        //     commonjs2: 'angular',
        //     commonjs: 'angular'
        // }
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "../css/bluetechStyle.min.css",
            // disable: false,
            allChunks: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        }),
        new ngAnnotatePlugin({
            add: true,
            // other ng-annotate options here
        })
    ],
    devServer: {
        hot: true,
        inline: true,
        port: 3000,
        contentBase: ["node_modules", "demo", "demo/view/", 'dist']
    }
};