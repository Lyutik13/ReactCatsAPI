import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
	// <React.StrictMode>
		<HashRouter future={{ v7_startTransition: true }}>
			<Provider store={store}>
				<App />
			</Provider>
		</HashRouter>
	// </React.StrictMode>,
);
