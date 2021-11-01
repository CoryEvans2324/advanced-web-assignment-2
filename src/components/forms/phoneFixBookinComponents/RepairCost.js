import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
	bookin: state.bookin
})

class RepairCost extends React.Component {
	render() {
		const bondText = this.props.bookin.customerType === 'business' ? "No Bond" : "Bond";
		return (
			<div className="grid gap-2 px-6 py-3 flex-1 bg-orange">
				<h1 className="text-3xl font-semibold">Cost</h1>
				<div className="grid grid-cols-2 gap-1">
					<h2>Bond:</h2>
					<input disabled className="bg-white" value={bondText} />

					<h2>Service Fee:</h2>
					<input disabled className="bg-white" />

					<h2>Total:</h2>
					<input disabled className="bg-white" />

					<h2>GST:</h2>
					<input disabled className="bg-white" />

					<h2>Total(+GST):</h2>
					<input disabled className="bg-white" />
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps)(RepairCost);