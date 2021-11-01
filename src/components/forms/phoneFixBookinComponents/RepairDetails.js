import React from "react";
import FormField from "../FormField";

class RepairDetails extends React.Component {
	render() {
		return (
			<div className="grid gap-2 px-6 py-3 bg-lightSky">
				<h1 className="text-3xl font-semibold">Repair Details</h1>

				<FormField
					label="Purchase Date"
					name="purchaseDate"
					type="date"
					required={true}
				/>

				<FormField
					label="Repair Date"
					name="repairDate"
					type="date"
					required={true}
				/>

				<FormField
					label="Under Warranty"
					name="underWarranty"
					type="checkbox"
				/>

				<FormField
					label="IMEI Number"
					name="imeiNumber"
					type="text"
					required={true}
				/>

				<FormField
					label="Make"
					name="make"
					type="text"
					required={true}
					choices={['Apple', 'LG', 'Motorola', 'Nokia', 'Samsung', 'Sony', 'Other']}
				/>

				<FormField
					label="Model Number"
					name="modelNumber"
					type="text"
					required={true}
				/>

				<FormField
					label="Fault Category"
					name="faultCategory"
					type="text"
					required={true}
					choices={['Battery', 'Charger', 'Display', 'Headphone', 'Microphone', 'Other']}
				/>

				<FormField
					label="Description"
					name="description"
					type="text"
					required={true}
					isTextArea={true}
				/>
			</div>
		)
	}
}

export default RepairDetails;