import React from "react";
import { connect } from 'react-redux';
import { ADD_COURTESY_CHARGER, ADD_COURTESY_IPHONE, ADD_COURTESY_OTHER } from "../../../contants/actionTypes";
import FormField from "../FormField";
import CourtesyPhoneTable from "./CourtesyPhoneTable";

const mapDispatchToProps = dispatch => ({
	addIphone: (name) =>
		dispatch({ type: ADD_COURTESY_IPHONE, cost: 275, name}),
	addOtherPhone: (name) =>
		dispatch({ type: ADD_COURTESY_OTHER, cost: 100, name}),
	addCharger: () =>
		dispatch({ type: ADD_COURTESY_CHARGER, cost: 30, name: 'Charger' })
})

class CourtesyPhone extends React.Component {
	state = {
		itemType: 'Iphone 7'
	}
	constructor() {
		super()
		this.addLineItem = () => {
			const { addIphone, addOtherPhone, addCharger } = this.props
			const { itemType } = this.state
			if (itemType.includes('Iphone')) {
				addIphone(itemType)
			} else if (itemType === 'Charger') {
				addCharger()
			} else {
				addOtherPhone(itemType)
			}
		}
	}
	
	render() {
		const choices = [
			'Iphone 7',
			'Iphone 8',
			'Iphone X',
			'Samsung Galaxy S20',
			'Samsung Galaxy S21',
			'Charger'
		]
		return (
			<div className="flex-1 bg-teal">
				<div className="grid gap-2 px-6 py-3">
					<h1 className="text-3xl font-semibold">Courtesy Phone</h1>
					<FormField
						label="Item Type"
						name="itemType"
						type="text"
						value={this.state.itemType}
						onChange={(event) => this.setState({ itemType: event.target.value })}
						choices={choices}
					/>
					<button
						className="py-1 bg-white tracking-wide uppercase"
						type="button"
						onClick={this.addLineItem}
					>
						Add
					</button>
					<CourtesyPhoneTable />
				</div>
			</div>
		)
	}
}

export default connect(null, mapDispatchToProps)(CourtesyPhone);