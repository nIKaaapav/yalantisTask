import React, { useEffect } from 'react'
import Card from './Card'
import { arrWord } from '../../utils/varibles'
import { useDispatch, useSelector } from 'react-redux'

const CardList = () => {
	const dispatch = useDispatch()
	const employees = useSelector((store) => store.allEmployees)

	const arrCards = arrWord.map((element, index) => (
		<Card key={index} letter={element} item={employees} />
	))

	useEffect(() => {
		fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
			.then((res) => res.json())
			.then((data) => {
				dispatch({ type: 'SAVE_ALL_EMPLOYEES', payload: data })
			})
	}, [])

	return (
		<div>
			<h1 className="card__title">Employees</h1>
			<div className="card__wrapper card__vertical-line">{arrCards}</div>
		</div>
	)
}

export default CardList
