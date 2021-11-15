import React from "react";
import { Switch, Route } from "react-router";
import { NavLink } from "react-router-dom";
import Authenticity from "./advanced/Authenticity";
import StoreMap from "./advanced/StoreMap";

import { URL_PREFIX } from "../../constants";

class Advanced extends React.Component {
	render() {
		return (
			<div>
				<nav className="bg-teal">
					<ul className="max-w-2xl mx-auto flex">
						<li>
							<NavLink to={`${URL_PREFIX}/advanced`}
								exact
								className="p-2 flex flex-col group"
								activeClassName="children:w-4/5"
							>
								Authenticity
								<div className="rounded-full bg-white h-1 w-2 mx-auto group-hover:w-4/5 group-active:w-4/5 transition-all"></div>
							</NavLink>
						</li>
						<li>
							<NavLink to={`${URL_PREFIX}/advanced/storemap`}
								exact
								className="p-2 flex flex-col group"
								activeClassName="children:w-4/5"
							>
								Store Map
								<div className="rounded-full bg-white h-1 w-2 mx-auto group-hover:w-4/5 group-active:w-4/5 transition-all"></div>
							</NavLink>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/advanced/storemap" component={StoreMap} />
					<Route path="/advanced">
						<Authenticity name='Cory Evans' />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default Advanced;