import React from "react";
import { connect } from "react-redux";
import { REMOVED_COURTESY_LINE_ITEM } from "../../../contants/actionTypes";

const mapDispatchToProps = dispatch => ({
	removeLineItem: (index) =>
		dispatch({ type: REMOVED_COURTESY_LINE_ITEM, index }),
})

const mapStateToProps = state => ({
	lineItems: state.bookin.lineItems
})

class CourtesyPhoneTable extends React.Component {
	
	render() {
		return (
			<table className="bg-white border-collapse">
				<thead>
					<tr>
						<th className="w-4/6 bg-gray-200 border border-black px-2 py-1">Item</th>
						<th className="w-2/6 bg-gray-200 border border-black px-2 py-1">Cost</th>
					</tr>
				</thead>
				<tbody>
					{this.props.lineItems.map((lineItem, i) => (
						<tr
							key={i}
							className={this.props.disabled ? "": "cursor-pointer hover:bg-red-200"}
							onClick={() => { if (!this.props.disabled) this.props.removeLineItem(i)}}
						>
							<td className="border border-black px-2 py-1">{lineItem.name}</td>
							<td className="border border-black px-2 py-1">${lineItem.cost.toFixed(2)}</td>
						</tr>
					))}
				</tbody>
			</table>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CourtesyPhoneTable);