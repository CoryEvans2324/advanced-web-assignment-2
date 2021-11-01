import React from "react";
import FormField from "../FormField";


class CustomerDetails extends React.Component {
	render() {
		return (
		<div className="grid gap-2 px-6 py-3 bg-lightYellow">
			<h1 className="text-3xl font-semibold">Customer Details</h1>
			<div className="flex flex-col">
				<h1>Customer Type</h1>
				<label htmlFor="individual" className="flex space-x-2 items-center">
					<input type="radio" name="customerType" id="individual" value="individual" />
					<span>Individual</span>
				</label>
				<label htmlFor="company" className="flex space-x-2 items-center">
					<input type="radio" name="customerType" id="company" value="company" />
					<span>Company</span>
				</label>
			</div>

			<FormField
				label="Title"
				name="title"
				type="text"
				required={true}
				choices={['Mr', 'Mrs', 'Ms', 'Miss', 'Dr']}
			/>

			<FormField 
				label="First Name"
				name="firstName"
				type="text"
				required={true}
			/>
			<FormField 
				label="Last Name"
				name="lastName"
				type="text"
				required={true}
			/>
			<FormField 
				label="Street"
				name="street"
				type="text"
				required={true}
			/>
			<FormField 
				label="Suburb"
				name="suburb"
				type="text"
			/>
			<FormField 
				label="City"
				name="city"
				type="text"
				required={true}
			/>
			<FormField 
				label="Post Code"
				name="postCode"
				type="text"
			/>
			<FormField 
				label="Phone Number"
				name="phoneNumber"
				type="tel"
				required={true}
			/>
			<FormField 
				label="Email"
				name="email"
				type="email"
				required={true}
			/>
		</div>
		)
	}
}

export default CustomerDetails;