const fs = require( "fs" );
const path = require( 'path' );
const webpack = require( "webpack" );
process.noDeprecation = true;

const jsDir = "./jsx/js/";

try {
	fs.mkdirSync( jsDir );
} catch (error) {
	
}

const viewDir = "./jsx/";
const viewList = fs.readdirSync( viewDir );
const entries = {};
viewList.map( function( $viewFile )
{
	if( fs.lstatSync( viewDir + $viewFile ).isDirectory() )
		return;

	const view = path.basename( $viewFile, ".jsx" );

	entries[ view ] = jsDir + view + ".js";
	
	let viewBody = 'import React from "react";';
	viewBody += '\nimport { render } from "react-dom";';
	viewBody += '\nimport App from "../' + view + '.jsx";';
	viewBody += '\nrender( <App {...window.param}/>, document.getElementById( "root" ) );';

	console.log( "path : " + view, entries[ view ], path.resolve( entries[ view ] ) );

	fs.writeFileSync( path.resolve( entries[ view ] ), viewBody );
} );

module.exports = {
	entry: entries,

	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'public/js/')
	},
	node: {
		fs: "empty"
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin("react"),
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};