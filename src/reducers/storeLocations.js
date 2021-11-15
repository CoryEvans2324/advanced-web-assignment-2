import { LOAD_STORE_LOCATIONS, SET_USER_LOCATION } from '../contants/actionTypes';

const defaultState = {
	locations: [],
	currentUserLocation: null
}

const storeLocations = (state = defaultState, action) => {
	switch (action.type) {
		case LOAD_STORE_LOCATIONS:
			return {
				...state,
				locations: action.payload
			}
		case SET_USER_LOCATION:
			return {
				...state,
				currentUserLocation: action.payload
			}
		default:
			return state;
	}
}

export default storeLocations;