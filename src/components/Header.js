import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
	render() {
		const activeClassName = 'bg-green-500'
		return (<div className="flex justify-between">
			<div class="flex items-center ml-4 md:ml-12">
				<h1 className="text-4xl text-white font-bold">
					{this.props.title}
				</h1>
			</div>

			<nav className="grid grid-cols-2 pb-12">
				<NavLink exact to="/" className="bg-teal text-center px-8 py-1" activeClassName={activeClassName}>
					Home
				</NavLink>
				<NavLink to="/advanced" className="bg-teal text-center px-8 py-1" activeClassName={activeClassName}>
					Extension
				</NavLink>
			</nav>
		</div>)
	}
}

export default Header;