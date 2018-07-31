var webpack = require('webpack')
var path = require('path')

var config = {
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

var libConfig = Object.assign({}, config, {
    name: "lib",
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'rtstar.js',
        library: 'rtstar',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
})

var demoConfig = Object.assign({}, config, {
    entry: path.join(__dirname, 'demo/index.js'),
    output: {
        path: path.resolve(__dirname, 'demo'),
        filename: 'demo.js'
    }
})

module.exports = [libConfig, demoConfig]