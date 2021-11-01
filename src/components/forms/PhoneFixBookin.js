import { push } from "connected-react-router";
import React from "react";
import CourtesyPhone from "./phoneFixBookinComponents/CourtesyPhone";
import CustomerDetails from "./phoneFixBookinComponents/CustomerDetails";
import RepairCost from "./phoneFixBookinComponents/RepairCost";
import RepairDetails from "./phoneFixBookinComponents/RepairDetails";
import { connect } from "react-redux";
import { RESET_BOOKIN_STATE } from "../../contants/actionTypes";

const mapDispatchToProps = (dispatch) => ({
	submit: () => dispatch(push('/jobsheet')),
	reset: () => dispatch({ type: RESET_BOOKIN_STATE })
})

class PhoneFixBookin extends React.Component {
	constructor() {
		super()
		this.submit = (e) => {
			e.preventDefault()
			this.props.submit()
		}
		this.reset = (e) => {
			e.preventDefault()
			this.props.reset()
		}
	}
	render() {
		return (
		<form className="grid md:grid-cols-3" onSubmit={this.submit}>
			<CustomerDetails />
			<RepairDetails />
			<div className="flex flex-col">
				<CourtesyPhone />
				<RepairCost />
			</div>
			<div className="col-span-full bg-orange py-4">
				<div className="flex items-center justify-center space-x-2">
					<button
						className="w-32 py-2 bg-white rounded-sm"
						type="reset"
						onClick={this.reset}
					>Reset</button>
					<button
						className="w-32 py-2 bg-white rounded-sm"
						type="Submit"
					>Submit</button>

					<a
						className="w-32 py-2 bg-white rounded-sm block text-center"
						href="/"
					>FAQ</a>
				</div>
			</div>
		</form>
		)
	}
}

export default connect(null, mapDispatchToProps)(PhoneFixBookin)