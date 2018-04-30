
/* */

const filename = "vue.mapper.spice.js";

const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/* */

module.exports = {
	mode:'development',
	entry: './src/index.js',
	output: {
		filename: filename,
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.js'],
		plugins: [],
		modules: [
		 './src',
		 'node_modules'
		]
	},
	plugins:[
		new CopyWebpackPlugin([
	        { from: './src/index.html' },
	        { from: './src/images', to:'./images/' }
	    ]),
		new webpack.NamedModulesPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(true),
	],
	devServer: {
	  contentBase: './dist',
	  hot: false,
	  inline: true,
	  compress: true,
	  stats: {
		assets: true,
		children: false,
		chunks: false,
		hash: false,
		modules: false,
		publicPath: false,
		timings: true,
		version: false,
		warnings: true,
		colors: {
			  green: '\u001B[36m',
			}
		}
	}
};
