import React from "react";
import { NavLink } from "react-router-dom";

import { URL_PREFIX } from "../contants/common";

class Header extends React.Component {
	render() {
		const activeClassName = 'bg-green-500'
		return (<div className="flex justify-between">
			<div className="flex items-center ml-4 md:ml-12">
				<h1 className="text-4xl text-white font-bold">
					{this.props.title}
				</h1>
			</div>

			<nav className="grid sm:grid-cols-2 pb-12">
				<NavLink exact to={`${URL_PREFIX}/`} className="bg-teal text-center px-8 py-1" activeClassName={activeClassName}>
					Home
				</NavLink>
				<NavLink to={`${URL_PREFIX}/advanced`} className="bg-teal text-center px-8 py-1" activeClassName={activeClassName}>
					Extension
				</NavLink>
			</nav>
		</div>)
	}
}

export default Header;