const API_PORT = process.env.API_PORT || 80;

const Express = require( "express" );
const bodyParser = require( "body-parser" );

const babelOption = {
	presets : [ "es2015", "react", "stage-0" ]
};
require( "babel-register" )( babelOption );

const app = Express();
app.use( bodyParser.urlencoded( { extended : true } ) );
app.use( bodyParser.json() );
app.use( "/js", Express.static( __dirname + "/../../public/js" ) );
app.use( "/css", Express.static( __dirname + "/../../public/css" ) );
app.use( "/images", Express.static( __dirname + "/../../public/images" ) );
app.listen( API_PORT, function()
{
	console.log( "Express Server : " + API_PORT + " is running~" );
})

const render = require( "./render" ).default;
app.use( function( $req, $res, $next )
{
	$res.render = function( $view, $param )
	{
		$res.status( 200 ).send( render( $view, $param ) );
	}

	$next();
} );

exports.app = app;