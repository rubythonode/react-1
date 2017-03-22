import React from "react";

import Header from "./components/Header.jsx";

class Index extends React.Component
{
	constructor( props )
	{
		super( props );

		this.state = {
			text: this.props.text
		}
	}

	onClick( $text )
	{
		this.setState( {
			text: $text
		} );
	}

	render()
	{
		const html = 
			<div>
				<Header onClick={this.onClick.bind(this)}/>
				<div>Hello {this.state.text}.</div>
			</div>
		
		return html;
	}
}

export default Index;