const path = require('path');

module.exports = {
    entry: ['./resources/js/main.ts', './resources/js/range_selection_save_restore.ts'],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts'],
    },
    output: {
        filename: 'gg-2-smiles-extension.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'GG2SmilesExtension',
        umdNamedDefine: true,
    },
};