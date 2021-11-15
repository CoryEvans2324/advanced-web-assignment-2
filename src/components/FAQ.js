import React from "react";
import { connect } from "react-redux";
import { LOAD_FAQ_DATA, UPDATE_FAQ_SEARCH_FIELD } from "../contants/actionTypes";

const mapStateToProps = state => ({
	faq: state.faq
})

const mapDispatchToProps = dispatch => ({
	updateSearchField: query =>
		dispatch({ type: UPDATE_FAQ_SEARCH_FIELD, payload: query }),
	loadFAQData: faqs =>
		dispatch({ type: LOAD_FAQ_DATA, payload: faqs })
})


class FAQ extends React.Component {
	constructor() {
		super()
		this.enabledCORSRef = React.createRef()
		this.onSearchChange = event => {
			this.props.updateSearchField(event.target.value)
		}
	}
	componentDidMount() {
		this.fetchData()
	}
	fetchData() {
		fetch('https://cors-anywhere.herokuapp.com/https://danieldangs.com/itwd6-408/json/faqs.json')
			.then(res => res.json())
			.then(data => {
				this.props.loadFAQData(data)
				this.enabledCORSRef.current.classList.remove('text-red-400')
			})
			.catch(err => {
				this.enabledCORSRef.current.classList.add('text-red-600')
			})
	}
	render() {
		return (<div className="bg-green-100 px-8 py-4">
			<div className="max-w-[900px] mx-auto">
				<div className="relative">
					<input type="text" placeholder="search"
						className="placeholder-shown:italic w-full"
						value={this.props.faq.query}
						onChange={this.onSearchChange}
					/>
					<div className="absolute bottom-0 right-0">
						<a
							href="https://cors-anywhere.herokuapp.com/corsdemo"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 text-sm p-1"
							ref={this.enabledCORSRef}
						>
							Enable CORS
						</a>
						|
						<button
							onClick={() => this.fetchData()}
							className="text-gray-600 text-sm p-1"
						>
							Reload
						</button>
					</div>
				</div>
				<ul className="mt-4 grid gap-4">
					{this.props.faq.faqs.filter(faqFilterFunc(this.props.faq.query)).map((faq, i) => (
						<li key={i} className="bg-yellow-100 shadow flex flex-col space-y-4 p-4">
							{ faqEntry(faq) }
						</li>
					))}
				</ul>
			</div>
		</div>)
	}
}

function faqEntry({question, answer}) {
	return (<>
			<h3>{question}</h3>
			<p>{answer}</p>
		</>
	)
}

function faqFilterFunc(query) {
	return (faq) => {
		return faq.question.toLowerCase().includes(query.toLowerCase()) || faq.answer.toLowerCase().includes(query.toLowerCase())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FAQ);