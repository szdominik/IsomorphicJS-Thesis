var webpack = require('webpack');

module.exports = {
    
    entry: './src/client.js',
    output: {
        path: __dirname + '/public/',
        filename: 'clientBundle.js'
    },
    /*entry: './src/server.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    target: 'node',*/
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        plugins: ['syntax-dynamic-import']
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};