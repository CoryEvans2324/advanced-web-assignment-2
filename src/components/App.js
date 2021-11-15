import React from "react";
import PhoneFixBookin from "./forms/PhoneFixBookin";
import Header from "./Header";

import { Switch, Route } from "react-router-dom";
import JobSheet from "./JobSheet";
import Advanced from "./Advanced";
import FAQ from "./FAQ";


class App extends React.Component {
	render() {
		return (
		<Switch>
			<Route path="/advanced">
				<Header title="Javascript Extension" />
				<Advanced />
			</Route>
			<Route path="/faq">
				<Header title="Phone Fix Booking FAQs" />
				<FAQ />
			</Route>
			<Route path="/jobsheet">
				<JobSheet />
			</Route>
			<Route path="/">
				<Header title="Phone Booking System" />
				<PhoneFixBookin />
			</Route>
		</Switch>
		)
	}
}

export default App;