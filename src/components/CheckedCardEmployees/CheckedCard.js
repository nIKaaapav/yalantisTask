import React from 'react'
import ChecedCardLi from './ChecedCardLi'
import { monthArr } from '../../utils/varibles'

const CheckedCard = ({ month, item }) => {
	const filterDataBirthday = item.filter((card) => {
		const bd = new Date(card.dob)
		return bd.getMonth() === month
	})

	const itemsNameEmployees = filterDataBirthday.map((person) => (
		<ChecedCardLi key={person.id} person={person} />
	))

	const currentMonth = monthArr.find((el, index) => index === month)

	return (
		<>
			{itemsNameEmployees.length === 0 ? (
				false
			) : (
				<ul className="card__employees-list--checked">
					<h1 className="card__title">{currentMonth}</h1>
					{itemsNameEmployees}
				</ul>
			)}
		</>
	)
}

export default CheckedCard
