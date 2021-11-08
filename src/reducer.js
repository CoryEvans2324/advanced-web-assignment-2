import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"

import faq from "./reducers/faq"
import phoneBookin from "./reducers/phoneBookin"
import storeLocations from "./reducers/storeLocations"

const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	bookin: phoneBookin,
	faq: faq,
	storeLocations: storeLocations,
})

export default createRootReducer