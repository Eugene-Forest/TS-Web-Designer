const path = require('path');

// 这会直接将 webpack 的入口起点指定为./ index.ts，然后通过 ts - loader _加载所有的.ts 和.tsx 文件，并且在当前目录输出_一个 bundle.js 文件

module.exports = {
    entry: './src/index.ts',
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
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development"
};