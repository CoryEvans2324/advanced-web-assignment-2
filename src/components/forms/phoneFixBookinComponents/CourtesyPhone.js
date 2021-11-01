import React from "react";
import FormField from "../FormField";

class CourtesyPhone extends React.Component {  
	state = {}
	render() {
		return (
			<div className="grid gap-2 px-6 py-3 flex-1 bg-teal">
				<h1 className="text-3xl font-semibold">Courtesy Phone</h1>
				<FormField
					label="Item Type"
					name="itemType"
					type="text"
					choices={['Iphone 7']}
				/>

				<button
					className="px-6 py-2 bg-white tracking-wide uppercase"
					type="button"
				>
					Add
				</button>

				<table className="bg-white border-collapse">
					<thead>
						<tr>
							<th className="w-4/6 bg-gray-200 border border-black px-2 py-1">Item</th>
							<th className="w-2/6 bg-gray-200 border border-black px-2 py-1">Cost</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border border-black px-2 py-1">Iphone</td>
							<td className="border border-black px-2 py-1">$275</td>
						</tr>
						<tr>
							<td className="border border-black px-2 py-1">Charger</td>
							<td className="border border-black px-2 py-1">$30</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default CourtesyPhone;