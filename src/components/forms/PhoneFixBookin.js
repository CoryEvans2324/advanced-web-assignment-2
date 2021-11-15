import { push } from "connected-react-router";
import React from "react";
import CourtesyPhone from "./phoneFixBookinComponents/CourtesyPhone";
import CustomerDetails from "./phoneFixBookinComponents/CustomerDetails";
import RepairCost from "./phoneFixBookinComponents/RepairCost";
import RepairDetails from "./phoneFixBookinComponents/RepairDetails";
import { connect } from "react-redux";
import { BOOKIN_FORM_UNLOADED, CLEAR_BOOKIN_ERROR, RESET_BOOKIN_STATE, VALIDATE_BOOKIN_FIELDS } from "../../contants/actionTypes";
import { Link } from "react-router-dom";
import NotificationPopup from "../NotificationPopup";
import { URL_PREFIX } from "../../contants/common";

const mapDispatchToProps = (dispatch) => ({
	validate: () => dispatch({ type: VALIDATE_BOOKIN_FIELDS }),
	submit: () => dispatch(push('/jobsheet')),
	reset: () => dispatch({ type: RESET_BOOKIN_STATE }),
	onUnmount: () => dispatch({ type: BOOKIN_FORM_UNLOADED }),
	clearError: (index) => dispatch({ type: CLEAR_BOOKIN_ERROR, index }),
})

const mapStateToProps = (state) => ({
	formValid: state.bookin.formValid,
	formValidErrors: state.bookin.formValidErrors,
})

class PhoneFixBookin extends React.Component {
	constructor() {
		super()
		this.state = {}
		this.CustomerDetailsRef = React.createRef()
		this.submit = (e) => {
			e.preventDefault()
			this.props.validate()
		}
		this.reset = (e) => {
			e.preventDefault()
			this.props.reset()
		}
	}
	componentWillUnmount() {
		this.props.onUnmount()
	}
	static getDerivedStateFromProps(props, state) {
		// form is validated on submit, so if the form is valid, submit
		if (props.formValid) {
			props.submit()
		}

		if (props.formValidErrors.length > 0) {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			})
		}

		return null
	}

	render() {
		return (
		<form className="relative grid md:grid-cols-2 xl:grid-cols-3" onSubmit={this.submit}>
			<ul className="absolute top-2 left-2 flex flex-col space-y-1 min-w-[280px]">
				{this.props.formValidErrors.map((error, index) => (
					<li
						key={index}
						onClick={() => {
							this.props.clearError(index)
						}}
						className="cursor-pointer"
					>
						<NotificationPopup type="error" message={error.message} />
					</li>
				))}
			</ul>
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
						to={`${URL_PREFIX}/faq`}
						className="w-32 py-2 bg-white rounded-sm block text-center"
					>FAQ</Link>
				</div>
			</div>
		</form>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneFixBookin)