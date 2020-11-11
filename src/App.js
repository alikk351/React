import Main from "./components/MainComponent"
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

function App() {
	return (
		<Provider store={store}> {/* this way the store is available for all my app components */}

			<BrowserRouter >

				<div>
					<Main />
				</div>

			</BrowserRouter>

		</Provider>
	);
}

export default App;
