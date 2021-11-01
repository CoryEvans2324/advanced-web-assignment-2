import React from "react";
import { connect } from "react-redux";
import CourtesyPhoneTable from "./forms/phoneFixBookinComponents/CourtesyPhoneTable";

const mapStateToProps = state => ({
	...state.bookin
})

class JobSheet extends React.Component {
	render() {
		const addressLine1 = this.props.street
		const addressLine2 = [
			this.props.suburb,
			this.props.city,
			this.props.postCode
		].filter(el => el && el !== '').join(", ");

		return (<>
			<div className="w-[21cm] mx-auto bg-white border my-4">
				<div className="flex justify-between p-4 bg-gray-200">
					<h1 className="text-4xl">Repair Booking</h1>
					<div className="flex flex-col items-end">
						<h2>Amount Due</h2>
						<h3 className="font-semibold">$250.00</h3>
					</div>
				</div>

				<div className="py-2 px-4">
					<div className="flex justify-between">
						<div className="flex flex-col">
							<h2 className="text-xl">Customer</h2>
							<h3>{this.props.title + ' ' + this.props.firstName + ' ' + this.props.lastName}</h3>
							<h3>{ addressLine1 }</h3>
							<h3>{ addressLine2 }</h3>
						</div>
						<div className="flex flex-col">
							<h2 className="text-xl">Repair Job</h2>
							<div className="grid grid-cols-2 mx-2">
								<h3>Job Number:</h3>
								<span></span>

								<h3>Invoice Date:</h3>
								<span></span>

								<h3>Payment Date:</h3>
								<span></span>
							</div>
						</div>
					</div>
				</div>

				<hr className="border-black mx-4" />

				<div className="py-2 px-4">
					<h2>Repair Details</h2>
					<div className="grid grid-cols-2 mx-4 text-sm">
						<h3 className="font-semibold">Purchase Date:</h3>
						<span></span>

						<h3 className="font-semibold">Repair Date:</h3>
						<span></span>

						<h3 className="font-semibold">Under Warrenty:</h3>
						<span></span>

						<h3 className="font-semibold">IMEI Number:</h3>
						<span></span>

						<h3 className="font-semibold">Device Make:</h3>
						<span></span>

						<h3 className="font-semibold">Device Model:</h3>
						<span></span>

						<h3 className="font-semibold">Fault Category:</h3>
						<span></span>

						<h3 className="font-semibold">Description:</h3>
						<span></span>
					</div>
				</div>
				<div className="py-2 px-4">
					<h2>Courtesy Loan Device Details</h2>
					<CourtesyPhoneTable disabled={true} />
				</div>
			</div>
		</>)
	}
}

export default connect(mapStateToProps)(JobSheet);