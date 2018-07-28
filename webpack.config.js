var webpack = require('webpack')
var path = require('path')

var config = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'rtstar.js',
        library: 'rtstar',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /(\.js)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}

module.exports = config