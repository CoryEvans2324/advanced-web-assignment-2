import { push } from "connected-react-router";
import React from "react";
import CourtesyPhone from "./phoneFixBookinComponents/CourtesyPhone";
import CustomerDetails from "./phoneFixBookinComponents/CustomerDetails";
import RepairCost from "./phoneFixBookinComponents/RepairCost";
import RepairDetails from "./phoneFixBookinComponents/RepairDetails";
import { connect } from "react-redux";
import { RESET_BOOKIN_STATE, VALIDATE_BOOKIN_FIELDS } from "../../contants/actionTypes";
import { Link } from "react-router-dom";

const mapDispatchToProps = (dispatch) => ({
	validate: () => dispatch({ type: VALIDATE_BOOKIN_FIELDS }),
	submit: () => dispatch(push('/jobsheet')),
	reset: () => dispatch({ type: RESET_BOOKIN_STATE })
})

const mapStateToProps = (state) => ({
	formValid: state.bookin.formValid,
	formValidErrors: state.bookin.formValidErrors,
})

class PhoneFixBookin extends React.Component {
	constructor() {
		super()
		this.CustomerDetailsRef = React.createRef()
		this.submit = (e) => {
			e.preventDefault()
			this.props.validate()

			if (this.props.formValid) {
				this.props.submit()
			}
		}
		this.reset = (e) => {
			e.preventDefault()
			this.props.reset()
		}
	}
	render() {
		return (
		<form className="grid md:grid-cols-2 xl:grid-cols-3" onSubmit={this.submit}>
			<CustomerDetails />
			<RepairDetails />
			<div className="flex flex-col lg:flex-row md:col-span-2 xl:flex-col xl:col-span-1">
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

					<Link
						to="/faq"
						className="w-32 py-2 bg-white rounded-sm block text-center"
					>FAQ</Link>
				</div>
			</div>
		</form>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneFixBookin)