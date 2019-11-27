/* eslint-disable */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/client/index.jsx',
    output: {
        filename: 'assets/js/[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new CopyPlugin([
            { from: 'public' }
        ]),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: require('html-webpack-template'),
            title: 'CareStore',
            bodyHtmlSnippet: '<div id="app"></div>',
            links: [
                'https://fonts.googleapis.com/css?family=Open+Sans&display=swap'
            ],
        })
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
    },
    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single'
    }
};