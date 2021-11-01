import React from "react";
import PhoneFixBookin from "./forms/PhoneFixBookin";
import Header from "./Header";

import { Switch, Route } from "react-router-dom";
import JobSheet from "./JobSheet";

class App extends React.Component {
	render() {
		return (<>
		<Switch>
			<Route exact path="/jobsheet">
				<JobSheet />
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