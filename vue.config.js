const path = require('path')
module.exports = {
    baseUrl: '',
    configureWebpack: {
        output: {
            path: path.resolve(__dirname, './dist'),
            // publicPath: '/dist/',
            filename: 'ra-scrolltop.min.js',
            library: 'ra-scrolltop',
            libraryTarget: 'umd',
            umdNamedDefine: true
        }
    }
}