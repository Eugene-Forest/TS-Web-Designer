const {merge} = require('webpack-merge');
const base = require('./webpack.base.config');
const path = require('path');

module.exports = merge(base, {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public")
        },
        compress: true,
        host: "localhost",
        port: 9000,
    },
});