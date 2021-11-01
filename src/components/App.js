import React from "react";
import PhoneFixBookin from "./forms/PhoneFixBookin";
import Header from "./Header";

import { Switch, Route } from "react-router-dom";
import JobSheet from "./JobSheet";
import Advanced from "./Advanced";

class App extends React.Component {
	render() {
		return (<>
		<Switch>
			<Route path="/jobsheet">
				<JobSheet />
			</Route>
			<Route path="/advanced">
				<Header title="Javascript Extension" />
				<Advanced />
			</Route>
			<Route path="/">
				<Header title="Phone Booking System" />
				<PhoneFixBookin />
			</Route>
		</Switch>
		</>)
	}
}

export default App;