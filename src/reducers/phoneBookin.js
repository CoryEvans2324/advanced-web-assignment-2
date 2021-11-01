import { ADD_COURTESY_CHARGER, ADD_COURTESY_IPHONE, ADD_COURTESY_OTHER, REMOVED_COURTESY_LINE_ITEM, RESET_BOOKIN_STATE, UPDATE_BOOKIN_FIELD } from "../contants/actionTypes"

const defaultState = {
	customerType: '',
	title: 'Mr',
	firstName: '',
	lastName: '',
	phoneNumber: '',
	email: '',
	street: '',
	city: '',
	postCode: '',
	suburb: '',

	// repair details
	purchaseDate: '',
	repairDate: '',
	underWarranty: false,
	imeiNumber: '',
	make: 'Apple',
	modelNumber: '',
	faultCategory: 'Battery',
	description: '',

	// costs
	lineItems: []
}

const phoneBookin = (state = defaultState, action) => {
	switch (action.type) {
		case UPDATE_BOOKIN_FIELD:
			return {
				...state,
				[action.field]: action.value
			}
		case ADD_COURTESY_IPHONE:
		case ADD_COURTESY_OTHER:
		case ADD_COURTESY_CHARGER:
			return {
				...state,
				lineItems: [...state.lineItems, {
					name: action.name,
					cost: action.cost
				}]
			}

		case REMOVED_COURTESY_LINE_ITEM:
			return {
				...state,
				lineItems: state.lineItems.filter((item, index) => index !== action.index)
			}

		case RESET_BOOKIN_STATE:
			return defaultState
		
		default:
			return state
	}
}

export default phoneBookin