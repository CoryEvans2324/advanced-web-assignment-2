import React from "react";
import PhoneFixBookin from "./forms/PhoneFixBookin";
import Header from "./Header";

import { Switch, Route } from "react-router-dom";
import JobSheet from "./JobSheet";
import Advanced from "./Advanced";
import FAQ from "./FAQ";

import { URL_PREFIX } from "../contants/common";

class App extends React.Component {
	render() {
		return (
		<Switch>
			<Route path={`${URL_PREFIX}/advanced`}>
				<Header title="Javascript Extension" />
				<Advanced />
			</Route>
			<Route path={`${URL_PREFIX}/faq`}>
				<Header title="Phone Fix Booking FAQs" />
				<FAQ />
			</Route>
			<Route path={`${URL_PREFIX}/jobsheet`}>
				<JobSheet />
			</Route>
			<Route path={`${URL_PREFIX}/`}>
				<Header title="Phone Booking System" />
				<PhoneFixBookin />
			</Route>
		</Switch>
		)
	}
}

export default App;