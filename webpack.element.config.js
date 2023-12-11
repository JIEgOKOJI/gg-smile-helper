const path = require('path');

module.exports = {
    entry: ['./resources/js/styles.ts', './resources/js/main.ts', './resources/js/range_selection_save_restore.ts'],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: ['.ts'],
    },
    output: {
        filename: 'smiles-extension.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'GG2SmilesExtension',
        umdNamedDefine: true,
    },
};