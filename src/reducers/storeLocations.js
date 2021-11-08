import { LOAD_STORE_LOCATIONS } from '../contants/actionTypes';

const defaultState = {
	locations: []
}

const storeLocations = (state = defaultState, action) => {
	switch (action.type) {
		case LOAD_STORE_LOCATIONS:
			return {
				...state,
				locations: action.payload
			}
		default:
			return state;
	}
}

export default storeLocations;