import React from "react";

class Header extends React.Component
{
	onClick()
	{
		if( this.props.onClick )
			this.props.onClick( this.input.value );
	}

	render()
	{
		const html = 
			<div>
				<input type="input" ref={node=>this.input = node} placeholder="Your name" />
				<input type="button" value="Send" onClick={this.onClick.bind(this)} />
			</div>
		
		return html;
	}
}

export default Header;