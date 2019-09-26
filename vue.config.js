const path = require('path')
// const webpack = require('webpack')
module.exports = {
    publicPath: '/dist/',
    css: {
        extract: false
    },
    outputDir: path.resolve(__dirname, './dist'),
    configureWebpack: {
        output: {
            filename: 'ra-scrolltop.min.js',
            library: 'ra-scrolltop',
            libraryTarget: 'umd',
            umdNamedDefine: true
        }
    }
}