import React from "react";
import { renderToString } from "react-dom/server";
import fs from "fs";

let template = null;

function getHTML()
{
	if( template == null )
		template = fs.readFileSync( __dirname + "/../../public/template.html" ).toString();

	return template;
}

export default function( $view, $param )
{
	const App = require( __dirname + "/../../jsx/" + $view + ".jsx" ).default;
	const content = renderToString( <App {...$param} /> );

	let html = getHTML();
	html = html.replace( "{{api}}", $view );
	html = html.replace( "{{root}}", content );
	html = html.replace( "window.param = {}", "window.param = " + JSON.stringify( $param ) );

	return html;
}