import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"
import phoneBookin from "./reducers/phoneBookin"


const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	bookin: phoneBookin
})

export default createRootReducer