import { ADD_COURTESY_CHARGER, ADD_COURTESY_IPHONE, ADD_COURTESY_OTHER, REMOVED_COURTESY_LINE_ITEM, RESET_BOOKIN_STATE, UPDATE_BOOKIN_FIELD, VALIDATE_BOOKIN_FIELDS } from "../contants/actionTypes"

const defaultState = {
	customerType: 'individual',
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
	lineItems: [],

	formValid: false,
	formValidErrors: []
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
		
		case VALIDATE_BOOKIN_FIELDS:
			let errors = validateBookinFields(state)
			return {
				...state,
				formValidErrors: errors,
				formValid: errors.length === 0
			}
		default:
			return state
	}
}

export default phoneBookin

// error looks like this
// var error = {
// 	message: "string",
// }

function validateBookinFields(state) {
	let errors = []

	// first and last name
	if (!state.firstName.match(/^[a-zA-Z- ]+$/) || !state.lastName.match(/^[a-zA-Z- ]+$/)) {
		errors.push({
			message: "Please enter your name"
		})
	}
	if (state.postCode.length !== 4) {
		errors.push({
			message: "Please enter a valid postcode"
		})
	}
	if (!state.phoneNumber.match(/^[0-9 ()\-+]+$/)) {
		errors.push({
			message: "Please enter a valid phone number"
		})
	}
	// email
	if (state.email.length < 5 || !state.email.includes('@') || !state.email.split('@')[1].includes('.')) {
		errors.push({
			message: "Please enter a valid email address"
		})
	}

	var today = new Date()
	var repairDate = new Date(state.repairDate)
	var purchaseDate = new Date(state.purchaseDate)
	if (!(repairDate instanceof Date && !isNaN(repairDate))) {
		errors.push({
			message: "Repair date is not valid"
		})
	}
	if (!(purchaseDate instanceof Date && !isNaN(purchaseDate))) {
		errors.push({
			message: "Purchase date is not valid"
		})
	}

	if (repairDate < purchaseDate) {
		errors.push({
			message: "Repair date cannot be before purchase date"
		})
	}
	if (repairDate > today) {
		errors.push({
			message: "Repair date cannot be in the future"
		})
	}
	if (purchaseDate > today) {
		errors.push({
			message: "Purchase date cannot be in the future"
		})
	}

	if (state.imeiNumber.length !== 15) {
		errors.push({
			message: "IMEI number must be 15 digits long"
		})
	}

	console.log(errors);
	
	return errors
}
