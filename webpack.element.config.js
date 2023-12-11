const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');

module.exports = merge (commonConfig, {
    entry: ['./resources/js/styles.ts'],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
    output: {
        filename: 'smiles-extension.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'GGSmilesExtension',
        umdNamedDefine: true,
    },
    optimization: {
        minimize: true
    }
})