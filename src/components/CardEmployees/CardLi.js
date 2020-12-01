import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CardLi = ({ person }) => {
	const { lastName, firstName } = person
	const [isChecked, setChecked] = useState(false)
	const [isChangeChecked, setChangeChecked] = useState(false)
	const dispatch = useDispatch()
	const checkedEmployees = useSelector((store) => store.checkedEmployees)

	const handelClickOnCheckbox = () => {
		setChecked(!isChecked)
		setChangeChecked(!isChangeChecked)
	}

	useEffect(() => {
		if (isChecked) {
			let checkedEmployeesLocalStorage = []

			dispatch({
				type: 'SAVE_CHECKED_EMPLOYEES',
				payload: [...checkedEmployees, person],
			})

			if (localStorage['checkedEmployees']) {
				const localStotegeArr = JSON.parse(localStorage['checkedEmployees'])
				checkedEmployeesLocalStorage = [...localStotegeArr, person]
				localStorage['checkedEmployees'] = JSON.stringify(
					checkedEmployeesLocalStorage
				)
			}
			return
		} else {
			let checkedEmployeesLocalStorage = []
			let indexCurrent
			;[...checkedEmployees].forEach((element, index) => {
				if (element.id === person.id) indexCurrent = index
			})

			if (indexCurrent >= 0) {
				const checkedEmployeesNew = [...checkedEmployees]
				let indexIdInLocalStorage

				checkedEmployeesNew.splice(indexCurrent, 1)
				checkedEmployeesLocalStorage = JSON.parse(
					localStorage['checkedEmployees']
				)

				checkedEmployeesLocalStorage.forEach((element, index) => {
					if (element.id === person.id) indexIdInLocalStorage = index
				})
				if (indexIdInLocalStorage >= 0) {
					checkedEmployeesLocalStorage.splice(indexIdInLocalStorage, 1)
					localStorage['checkedEmployees'] = JSON.stringify(
						checkedEmployeesLocalStorage
					)
				}
				dispatch({
					type: 'SAVE_CHECKED_EMPLOYEES',
					payload: checkedEmployeesNew,
				})
			}
		}
	}, [isChangeChecked])

	useEffect(() => {
		if (!!localStorage['checkedEmployees']) {
			const localStorageArr = JSON.parse(localStorage['checkedEmployees'])
			const indexPerson = localStorageArr.find(
				(element, index) => element.id === person.id
			)
			if (!!indexPerson) {
				setChecked(!isChecked)
				dispatch({ type: 'SAVE_CHECKED_EMPLOYEES', payload: localStorageArr })
			}
			return
		}
		localStorage.setItem('checkedEmployees', JSON.stringify([]))
	}, [])

	return (
		<li className="employee__item">
			<p className="employee__name">
				{lastName} {firstName}
			</p>
			<input
				className="employee-checkbox"
				onChange={() => handelClickOnCheckbox()}
				type="checkbox"
				checked={isChecked}
			/>
			{isChecked && (
				<span className="employee__checkbox-isChecked">check box</span>
			)}
		</li>
	)
}

export default CardLi
