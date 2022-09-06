const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.ts',
        // print: './src/print.ts',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        //用来清理构建物的插件
        new CleanWebpackPlugin(),
        //用来管理输出
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/public/index.html'),
            // template: require('html-webpack-template'),
            favicon: path.resolve(__dirname, 'src/public/assets/P_logo.png'),
        }),
    ],
    output: {
        filename: 'bundle.js',
        // filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};