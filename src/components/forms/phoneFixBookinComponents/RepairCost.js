import React from "react";
import { connect } from "react-redux";

import { getTotalsText } from '../util'

const mapStateToProps = state => ({
	...state.bookin
})

class RepairCost extends React.Component {
	render() {
		const { bondText, serviceFeeText, totalText, gstText, totalGstText } = getTotalsText(
			this.props.lineItems,
			this.props.underWarranty,
			this.props.customerType
		)

		return (
			<div className="flex-1 bg-orange">
				<div className="grid gap-2 px-6 py-3">
					<h1 className="text-3xl font-semibold">Cost</h1>
					<div className="grid grid-cols-2 gap-1">
						<h2>Bond:</h2>
						<input disabled className="bg-white px-1" value={bondText} />

						<h2>Service Fee:</h2>
						<input disabled className="bg-white px-1" value={serviceFeeText} />

						<h2>Total:</h2>
						<input disabled className="bg-white px-1" value={totalText} />

						<h2>GST:</h2>
						<input disabled className="bg-white px-1" value={gstText} />

						<h2>Total(+GST):</h2>
						<input disabled className="bg-white px-1" value={totalGstText} />
					</div>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps)(RepairCost);