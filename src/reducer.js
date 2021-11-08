import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"
import phoneBookin from "./reducers/phoneBookin"
import faq from "./reducers/faq"


const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	bookin: phoneBookin,
	faq: faq
})

export default createRootReducer