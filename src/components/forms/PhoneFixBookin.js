import React from "react";
import CourtesyPhone from "./phoneFixBookinComponents/CourtesyPhone";
import CustomerDetails from "./phoneFixBookinComponents/CustomerDetails";
import RepairCost from "./phoneFixBookinComponents/RepairCost";
import RepairDetails from "./phoneFixBookinComponents/RepairDetails";


class PhoneFixBookin extends React.Component {
	render() {
		return (
		<form className="grid md:grid-cols-3">
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

export default PhoneFixBookin;