var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: [
            './resources/bootstrap.js',
            './resources/sass/style.scss',
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['ccs-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    use:  ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: { // The alias is used to make the import more readable. That means that if not use the alias we should type import vue from vue/dist/vue.esm.js
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};
