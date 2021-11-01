import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import createRootReducer from "./reducer";

export const history = createBrowserHistory();
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
	if (process.env.NODE_ENV === "production") {
		return applyMiddleware(
			myRouterMiddleware,
			createLogger()
		)
	}

	return applyMiddleware(
		myRouterMiddleware
	)
}

export const store = createStore(
	createRootReducer(history),
	composeWithDevTools(getMiddleware())
)