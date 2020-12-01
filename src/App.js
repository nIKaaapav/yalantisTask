import React from 'react'
import CardList from './components/CardEmployees/CardList'
import CheckedCardList from './components/CheckedCardEmployees/CheckedCardList'
import './style.scss'

const App = () => {
	return (
		<div className="wrapper">
			<CardList />
			<CheckedCardList />
		</div>
	)
}

export default App
