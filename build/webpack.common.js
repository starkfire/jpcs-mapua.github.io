const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		//publicPath: '/dist/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['vue-style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpg|png|svg|webp)$/, loader: 'file-loader'}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new VueLoaderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
}