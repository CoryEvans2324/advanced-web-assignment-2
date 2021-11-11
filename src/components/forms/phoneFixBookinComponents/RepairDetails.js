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

const monthDiff = (dateFrom, dateTo) => {
	return dateTo.getMonth() - dateFrom.getMonth() + 
		(12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}

class RepairDetails extends React.Component {
	constructor() {
		super()
		this.state = {
			underWarrantyDisabled: false
		}
		this.underWarrantyRef = React.createRef()
		this.onFieldChange = e => {
			if (e.target.type === 'checkbox') {
				this.props.updateState(e.target.name, e.target.checked)
				return
			}

			this.props.updateState(e.target.name, e.target.value)
			switch (e.target.name) {
			case 'purchaseDate':
				let today = new Date()
				let purchaseDate = new Date(e.target.value)
				if (!(purchaseDate instanceof Date && !isNaN(purchaseDate))) {
					purchaseDate = new Date(0)
				}

				var diffMonths = monthDiff(purchaseDate, today)
				if (diffMonths > 24) {
					this.props.updateState('underWarranty', false)
					this.setState({ underWarrantyDisabled: true })
					this.underWarrantyRef.current.checked = false
				} else {
					this.setState({ underWarrantyDisabled: false })
				}
				break
			default:
				break
			}
		}
	}

	render() {		
		return (
			<div className="flex flex-col space-y-2 px-6 py-3 bg-lightSky">
				<h1 className="text-3xl font-semibold">Repair Details</h1>

				<FormField
					label="Purchase Date"
					name="purchaseDate"
					type="date"
					value={this.props.purchaseDate}
					onChange={this.onFieldChange}
					required={true}
				/>

				<FormField
					label="Repair Date"
					name="repairDate"
					type="date"
					value={this.props.repairDate}
					onChange={this.onFieldChange}
					required={true}
				/>

				<FormField
					label="Under Warranty"
					name="underWarranty"
					type="checkbox"
					inputRef={this.underWarrantyRef}
					value={this.props.underWarrenty}
					onChange={this.onFieldChange}
					disabled={this.state.underWarrantyDisabled}
				/>

				<FormField
					label="IMEI Number"
					name="imeiNumber"
					type="text"
					value={this.props.imeiNumber}
					onChange={this.onFieldChange}
					required={true}
				/>

				<FormField
					label="Make"
					name="make"
					type="text"
					value={this.props.make}
					onChange={this.onFieldChange}
					required={true}
					choices={['Apple', 'LG', 'Motorola', 'Nokia', 'Samsung', 'Sony', 'Other']}
				/>

				<FormField
					label="Model Number"
					name="modelNumber"
					type="text"
					value={this.props.modelNumber}
					onChange={this.onFieldChange}
					required={true}
				/>

				<FormField
					label="Fault Category"
					name="faultCategory"
					type="text"
					value={this.props.faultCategory}
					onChange={this.onFieldChange}
					required={true}
					choices={['Battery', 'Charger', 'Display', 'Headphone', 'Microphone', 'Other']}
				/>

				<FormField
					label="Description"
					name="description"
					type="text"
					value={this.props.description}
					onChange={this.onFieldChange}
					required={true}
					isTextArea={true}
				/>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RepairDetails);