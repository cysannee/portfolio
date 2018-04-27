var path = require('path');

module.exports = {
    entry: 
    {
        app: './src/js/app.js',
        vendor: './src/js/vendor.js'
    },
    output: {
        path: path.resolve(__dirname, './src/assets/scripts'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        ]
    }
}