const merge = require('webpack-merge')
const common = require('./webpack.com.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        inline: true,
        port: '8000',
        disableHostCheck: true,
        historyApiFallback: true
    }
})
