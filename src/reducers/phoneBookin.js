import { UPDATE_BOOKIN_FIELD } from "../contants/actionTypes"

const defaultState = {
	customerType: '',
	title: 'Mr',
	firstName: '',
	lastName: '',
	phone: '',
	email: '',
	street: '',
	city: '',
	postCode: '',
	suburb: '',
}

const phoneBookin = (state = defaultState, action) => {
	switch (action.type) {
		case UPDATE_BOOKIN_FIELD:
			return {
				...state,
				[action.field]: action.value
			}
		default:
			return state
	}
}

export default phoneBookin