import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import createRootReducer from "./reducer";

const url = process.env.PUBLIC_URL ? new URL(process.env.PUBLIC_URL) : null;
var basename = null
if (url) {
	const segments = url.pathname.split("/");
	if (segments.length > 1) {
		basename = segments[1];
	}
}

export const history = createBrowserHistory({
	basename: basename
});

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