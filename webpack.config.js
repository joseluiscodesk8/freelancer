const path = require("path");
const HtmlWepack = require('html-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');
const copyWebpack = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'main.js',
    },
    mode: "development",
    resolve: {
        extensions: [".js"],
    },
    module: {
        rules:[
            {
                test: /\.js$/i,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test:/\.scss$/i,
                use: [MiniCss.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpg|png)/i,
                type: `asset/resource`
            },
        ]
    },
    plugins:[
        new HtmlWepack({
            inject: true,
            template: "./public/index.html",
            filename: "index.html",
        }),
        new MiniCss({
            filename: "styles.css",
        }),
        new copyWebpack({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets"),
                    to: "img"
                }
            ]
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },
}