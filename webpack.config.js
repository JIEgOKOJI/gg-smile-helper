const path = require('path');

module.exports = {
    entry: ['./resources/js/main.ts', './resources/js/range_selection_save_restore.ts'],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.ts'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'resources/js')
    },
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
        ignored: ['node_modules'],
    },
};