import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
	...state.bookin
})

class RepairCost extends React.Component {
	render() {
		var bondTotal = 0
		if (this.props.customerType !== 'business') {
			for (let i = 0; i < this.props.lineItems.length; i++) {
				const item = this.props.lineItems[i];
				bondTotal += item.cost
			}
		}
		const bondText = this.props.customerType === 'business' ? "No Bond" : `$${bondTotal.toFixed(2)}`;

		const serviceFee = this.props.underWarranty ? 0 : 85;
		const serviceFeeText = `$${serviceFee.toFixed(2)}`;

		const total = bondTotal + serviceFee;
		const totalText = `$${total.toFixed(2)}`;
		const gst = total * 0.15;
		const gstText = `$${gst.toFixed(2)}`;
		const totalGst = total + gst;
		const totalGstText = `$${totalGst.toFixed(2)}`;

		return (
			<div className="flex-1 bg-orange">
				<div className="grid gap-2 px-6 py-3">
					<h1 className="text-3xl font-semibold">Cost</h1>
					<div className="grid grid-cols-2 gap-1">
						<h2>Bond:</h2>
						<input disabled className="bg-white" value={bondText} />

						<h2>Service Fee:</h2>
						<input disabled className="bg-white" value={serviceFeeText} />

						<h2>Total:</h2>
						<input disabled className="bg-white" value={totalText} />

						<h2>GST:</h2>
						<input disabled className="bg-white" value={gstText} />

						<h2>Total(+GST):</h2>
						<input disabled className="bg-white" value={totalGstText} />
					</div>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps)(RepairCost);