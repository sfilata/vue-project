var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var config = require('./webpack.config');

config.module.loaders = [
    // 使用vue-loader 加载 .vue 结尾的文件
    {
        test: /\.vue$/, 
        loader: 'vue-loader',
        options: {
            loaders: {
                css: ExtractTextPlugin.extract({
                    fallback:'vue-style-loader', 
                    use:'css-loader'
                })
            }
        } 
    },
    {
    	test: /\.js$/,
    	loader: 'babel-loader?presets=es2015',
		// loader: 'babel-loader',
	 //    query: {presets: ['es2015']},
    	exclude: /node_modules/
    }
];

config.plugins = [
	new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    // 压缩代码
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false,
    //         drop_console: true
    //     }
    // }),
	new ExtractTextPlugin('../[name].[contenthash].css'), 
	new webpack.HotModuleReplacementPlugin(),
	new webpack.optimize.OccurrenceOrderPlugin(),

	new HtmlWebpackPlugin({
		filename: '../index.html',
		template: path.resolve(__dirname, '../app/index/index.html'),
		inject: true
	})
];

module.exports = config;