import React from "react";

class Authenticity extends React.Component {
	render() {
		return (
			<div className="max-w-xl mx-auto mt-4">
				<div className="bg-white rounded shadow p-4">
					<h1 className="text-center text-2xl">Statement of Authenticity</h1>
					<h2 className="mt-4">
						I, <strong>{this.props.name}</strong>, confirm that:
					</h2>
					<ul className="list-disc ml-4">
						<li>
							<p>This is an original assessment and is entirely my own work.</p>
						</li>
						<li>
						<p>
							It contains no material previously published or written by another person or myself except where 
							due acknowledgement is made in the text.
						</p>
						</li>
						<li>
							<p>No material which to a substantial extent, has been submitted for any other academic course, is included without acknowledgement.</p>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Authenticity;