import React from "react";
import { connect } from "react-redux";
import CourtesyPhoneTable from "./forms/phoneFixBookinComponents/CourtesyPhoneTable";

import { getTotalsText } from "./forms/util";

const mapStateToProps = state => ({
	...state.bookin
})

const formatDate = (date) => {
	if (!date) return ""

	if (typeof date === "string") {
		date = new Date(date)
	}
	
	return date.toLocaleDateString(
		window.navigator.language,
		{
			year: 'numeric',
			month: 'short',
			day: '2-digit'
		}
	)
}

class JobSheet extends React.Component {
	render() {
		const jobNumber = parseInt(window.localStorage.getItem("jobNumber")) || 1
		window.localStorage.setItem("jobNumber", jobNumber + 1)
		const addressLine1 = this.props.street
		const addressLine2 = [
			this.props.suburb,
			this.props.city,
			this.props.postCode
		].filter(el => el && el !== '').join(", ");

		const { bondText, serviceFeeText, totalText, gstText, totalGstText } = getTotalsText(
			this.props.lineItems,
			this.props.underWarranty,
			this.props.customerType
		)

		return (<>
			<div className="w-[21cm] mx-auto bg-white border my-4">
				<div className="flex justify-between p-4 bg-gray-200">
					<h1 className="text-4xl">Repair Booking</h1>
					<div className="flex flex-col items-end">
						<h2>Amount Due</h2>
						<h3 className="font-semibold">{totalGstText}</h3>
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
								<span>{jobNumber}</span>

								<h3>Invoice Date:</h3>
								<span>{formatDate(new Date())}</span>

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
						<span>{formatDate(this.props.purchaseDate)}</span>

						<h3 className="font-semibold">Repair Date:</h3>
						<span>{formatDate(this.props.repairDate)}</span>

						<h3 className="font-semibold">Under Warranty:</h3>
						<span>{this.props.underWarranty ? 'YES' : 'NO'}</span>

						<h3 className="font-semibold">IMEI Number:</h3>
						<span>{this.props.imeiNumber}</span>

						<h3 className="font-semibold">Device Make:</h3>
						<span>{this.props.make}</span>

						<h3 className="font-semibold">Device Model:</h3>
						<span>{this.props.modelNumber}</span>

						<h3 className="font-semibold">Fault Category:</h3>
						<span>{this.props.faultCategory}</span>

						<h3 className="font-semibold">Description:</h3>
						<p className="col-span-full px-4">{this.props.description}</p>
					</div>
				</div>
				<div className="py-2 px-4">
					<h2>Courtesy Loan Device Details</h2>
					<CourtesyPhoneTable disabled={true} />
				</div>

				<hr className="border-black mx-4 my-4" />
			
				<div className="flex justify-between px-2 pb-6">
					<div className="flex-1 px-2">
						<h2 className="font-semibold text-lg">Phone Fix Service</h2>
						<p className="text-sm text-gray-600">
							501 Glouscester Street,<br />
							Napier, HB 4112<br />
							New Zealand
						</p>
					</div>
					<div className="flex flex-col items-start">
						<h2 className="font-semibold text-lg">Totals</h2>
						<div className="flex-shrink grid grid-cols-2 w-56">
							<h2>Bond:</h2>
							<input disabled className="bg-transparent" value={bondText} />
							<h2>Service Fee:</h2>
							<input disabled className="bg-transparent" value={serviceFeeText} />
							<h2>Total:</h2>
							<input disabled className="bg-transparent" value={totalText} />
							<h2>GST:</h2>
							<input disabled className="bg-transparent" value={gstText} />
							<h2>Total(+GST):</h2>
							<input disabled className="bg-transparent" value={totalGstText} />
						</div>
					</div>
				</div>
			</div>
		</>)
	}
}

export default connect(mapStateToProps)(JobSheet);