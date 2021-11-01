import React from "react";

class Header extends React.Component {
	render() {
		return (<div className="py-2 px-4">
			<h1 className="text-4xl text-white font-bold">
				{this.props.title}
			</h1>
		</div>)
	}
}

export default Header;