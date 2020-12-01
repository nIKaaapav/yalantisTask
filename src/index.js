import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const SAVE_ALL_EMPLOYEES = 'SAVE_ALL_EMPLOYEES'
const SAVE_CHECKED_EMPLOYEES = 'SAVE_CHECKED_EMPLOYEES'

const initialState = {
	allEmployees: [],
	checkedEmployees: [],
}

const reducer = (currentState = initialState, action) => {
	switch (action.type) {
		case SAVE_ALL_EMPLOYEES:
			return { ...currentState, allEmployees: action.payload }
		case SAVE_CHECKED_EMPLOYEES:
			return { ...currentState, checkedEmployees: action.payload }
		default:
			return currentState
	}
}

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
