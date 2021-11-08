import { LOAD_FAQ_DATA, UPDATE_FAQ_SEARCH_FIELD } from "../contants/actionTypes";

const defaultState = {
	query: '',
	faqs: []
}

const faq = (state = defaultState, action) => {
	switch (action.type) {
		case UPDATE_FAQ_SEARCH_FIELD:
			return {
				...state,
				query: action.payload
			}
		case LOAD_FAQ_DATA:
			return {
				...state,
				faqs: action.payload
			}
		default:
			return state;
	}
}

export default faq;