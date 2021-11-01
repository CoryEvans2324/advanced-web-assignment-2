import React from "react";
import PhoneFixBookin from "./forms/PhoneFixBookin";
import Header from "./Header";


class App extends React.Component {
	render() {
		return (<>
			<Header title="Phone Booking System" />
			<PhoneFixBookin />
		</>)
	}
}

export default App;