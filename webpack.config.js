var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: {
        bluetechUI: './src/js/app.js'
    },
    output: {
        path: 'dist/js',
        filename: '[name].js',
    },
    resolve:{
        modulesDirectories: ['src/js/', 'node_modules/'],
        alias: {
            bluetech: 'bluetech/dist/js/bluetech.js'
        }
    },
    devServer: {
        hot: true,
        inline: true,
        port: 3000,
        contentBase: ["node_modules", "demo", "demo/view/", 'dist']
    }
};