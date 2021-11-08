import React from "react";

class FAQ extends React.Component {
	constructor() {
		super()
		this.state = {
			faq: []
		}
	}
	componentDidMount() {
		fetch('https://cors-anywhere.herokuapp.com/https://danieldangs.com/itwd6-408/json/faqs.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
					faq: data
				});
			}
		);
	}
	render() {
		return (
			<ul className="bg-green-100 px-8 py-4 grid gap-4">
				{this.state.faq.map((faq, i) => (
					<li key={i} className="bg-yellow-100 shadow flex flex-col space-y-4 p-4">
						{ faqEntry(faq) }
					</li>
				))}
			</ul>
		)
	}
}

function faqEntry({question, answer}) {
	return (<>
			<h3>{question}</h3>
			<p>{answer}</p>
		</>
	)
}

export default FAQ;