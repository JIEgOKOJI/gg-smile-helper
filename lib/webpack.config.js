const path = require('path');

module.exports = {
    entry: './src/index.ts', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output bundle filename
    },
    resolve: {
        extensions: ['.ts', '.js'], // Extensions to resolve
    },
    module: {
        rules: [
            {
                test: /\.ts$/, // Handle TypeScript files
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/, // Handle CSS files
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};