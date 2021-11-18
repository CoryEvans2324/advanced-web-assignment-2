import fuzzysort from 'fuzzysort';
import * as React from 'react';
import { connect } from 'react-redux';
import ChatBot from 'react-simple-chatbot';
import { LOAD_FAQ_DATA } from '../../contants/actionTypes';

const mapDispatchToProps = dispatch => ({
	loadFAQData: faqs =>
		dispatch({ type: LOAD_FAQ_DATA, payload: faqs })
})

const mapStateToProps = state => ({
	faq: state.faq
})

class ChatbotPage extends React.Component {
	componentDidMount() {
		fetch(
			(process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '') + '/data/faqs.json',
			{
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			})
			.then(res => res.json())
			.then(data => {
				this.props.loadFAQData(data)
			})
	}

	render() {
		return (
			<div className="flex flex-col items-center mt-4">
				<ChatBot
					botDelay={100}
					userDelay={100}
					steps={[
						{
							id: '1',
							message: 'Ask me a question.',
							trigger: 'prompt'
						},
						{
							id: 'prompt',
							user: true,
							trigger: 'result'
						},
						{
							id: 'result',
							component: <ChatBotCustomComponent faqs={this.props.faq.faqs} />,
							waitAction: true,
							trigger: '1'
						}
					]}
				/>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatbotPage);

class ChatBotCustomComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			answer: '',
		}
	}
	componentDidMount() {
		const question = this.props.previousStep.message
		const results = fuzzysort.go(question, this.props.faqs, { key: 'question' })
		console.log(results);

		this.setState({
			answer: results.length > 0 ? results[0].obj.answer : 'Sorry, I don\'t know the answer to that question.'
		})
		this.props.triggerNextStep()
	}

	render() {
		return (
			<h1>{this.state.answer}</h1>
		)
	}
}