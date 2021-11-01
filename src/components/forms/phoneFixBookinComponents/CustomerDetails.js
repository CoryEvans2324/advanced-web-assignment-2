import React from "react";
import { connect } from "react-redux";
import { UPDATE_BOOKIN_FIELD } from "../../../contants/actionTypes";
import FormField from "../FormField";

const mapDispatchToProps = (dispatch) => ({
	updateState: (field, value) =>
		dispatch({
			type: UPDATE_BOOKIN_FIELD,
			field,
			value
		}),
})

const mapStateToProps = (state) => ({
	...state.bookin,
})

class CustomerDetails extends React.Component {
	constructor() {
		super()
		this.onFieldChange = e => {
			this.props.updateState(e.target.name, e.target.value)
		}
	}
	render() {
		return (
		<div className="grid gap-2 px-6 py-3 bg-lightYellow">
			<h1 className="text-3xl font-semibold">Customer Details</h1>
			<div className="flex flex-col">
				<h1>Customer Type</h1>
				<label htmlFor="individual" className="flex space-x-2 items-center">
					<input
						type="radio"
						name="customerType"
						id="individual"
						value="individual"
						checked={this.props.customerType === "individual"}
						onChange={this.onFieldChange}
					/>
					<span>Individual</span>
				</label>
				<label htmlFor="business" className="flex space-x-2 items-center">
					<input
						type="radio"
						name="customerType"
						id="business"
						value="business"
						checked={this.props.customerType === "business"}
						onChange={this.onFieldChange}
					/>
					<span>Business</span>
				</label>
			</div>

			<FormField
				label="Title"
				name="title"
				type="text"
				required={true}
				onChange={this.onFieldChange}
				value={this.props.title}
				choices={['Mr', 'Mrs', 'Ms', 'Miss', 'Dr']}
			/>

			<FormField 
				label="First Name"
				name="firstName"
				type="text"
				onChange={this.onFieldChange}
				value={this.props.firstName}
				required={true}
			/>
			<FormField 
				label="Last Name"
				name="lastName"
				type="text"
				onChange={this.onFieldChange}
				value={this.props.lastName}
				required={true}
			/>
			<FormField 
				label="Street"
				name="street"
				type="text"
				onChange={this.onFieldChange}
				value={this.props.street}
				required={true}
			/>
			<FormField 
				label="Suburb"
				name="suburb"
				type="text"
				onChange={this.onFieldChange}
				value={this.props.suburb}
			/>
			<FormField 
				label="City"
				name="city"
				type="text"
				onChange={this.onFieldChange}
				value={this.props.city}
				required={true}
			/>
			<FormField 
				label="Post Code"
				name="postCode"
				type="text"
				onChange={this.onFieldChange}
				value={this.props.postCode}
			/>
			<FormField 
				label="Phone Number"
				name="phoneNumber"
				type="tel"
				onChange={this.onFieldChange}
				value={this.props.phoneNumber}
				required={true}
			/>
			<FormField 
				label="Email"
				name="email"
				type="email"
				onChange={this.onFieldChange}
				value={this.props.email}
				required={true}
			/>
		</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetails);