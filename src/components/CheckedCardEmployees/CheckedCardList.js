import React from 'react'
import CheckedCard from './CheckedCard'
import { useSelector } from 'react-redux'
import { monthArrInJS } from '../../utils/varibles'

const CheckedCardList = () => {
	const employeesChecked = useSelector((store) => store.checkedEmployees)

	const arrCards = monthArrInJS.map((element, index) => (
		<CheckedCard key={index} month={element} item={employeesChecked} />
	))

	return (
		<div>
			<h1 className="card__title--birthday-part">Employees birthday</h1>
			<div className="card__wrapper">
				{employeesChecked.length === 0 ? <p>No selected employees</p> : arrCards}
			</div>
		</div>
	)
};

export default CheckedCardList
