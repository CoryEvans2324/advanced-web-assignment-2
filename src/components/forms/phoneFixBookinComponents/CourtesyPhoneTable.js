import React from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import { REMOVED_COURTESY_LINE_ITEM } from "../../../contants/actionTypes";

import { IconX } from "@tabler/icons";

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
							className={clsx(
								'group select-none',
								this.props.disabled ? "": "cursor-pointer"
							)}
							onClick={() => { if (!this.props.disabled) this.props.removeLineItem(i)}}
						>
							<td className={clsx(
								"border border-black px-2 py-1",
								!this.props.disabled && 'group-hover:bg-red-400'
								)}>
									<div>
										{lineItem.name}
									</div>
								</td>
							<td className={clsx(
								"border border-black px-2 py-1",
								!this.props.disabled && 'group-hover:bg-red-400'
								)}>
									<div className='relative flex justify-between'>
										<div>${lineItem.cost.toFixed(2)}</div>
										<IconX />
									</div>
								</td>
						</tr>
					))}
				</tbody>
			</table>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CourtesyPhoneTable);