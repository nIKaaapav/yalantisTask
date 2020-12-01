import React from 'react'
import CardLi from './CardLi'

const Card = ({ letter, item }) => {
	const filterDataLetters = item.filter(
		(card) => card.lastName.split('')[0].toLowerCase() === letter
	)

	filterDataLetters.sort((a, b) => (a['lastName'] > b['lastName'] ? 1 : -1))

	const itemsNameEmploeers = filterDataLetters.map((person) => (
		<CardLi key={person.id} person={person} />
	))

	return (
		<ul className="card__employees-list">
			<h1 className="card__title">{letter.toUpperCase()}</h1>
			{itemsNameEmploeers.length === 0 ? '-' : itemsNameEmploeers}
		</ul>
	)
}

export default Card
