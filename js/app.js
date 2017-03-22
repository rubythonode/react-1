const { app } = require( "./core/express" );

app.get( "/", function( $req, $res )
{
	$res.render( "index", { text: "wooyaggo" } );
} );