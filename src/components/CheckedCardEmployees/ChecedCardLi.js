import React from 'react'
import { monthArr } from '../../utils/varibles'

const ChecedCardLi = ({ person }) => {
	const { lastName, firstName, dob } = person
	const dateBd = {
		month: new Date(dob).getMonth(),
		date: new Date(dob).getDate(),
		year: new Date(dob).getFullYear(),
	}

	dateBd.month = monthArr.find((el, index) => index === dateBd.month)

	return (
		<li className="employee__item">
			<p className="employee__name">
				{lastName} {firstName}
			</p>
			<p className="employee__birthday">
				{dateBd.date} {dateBd.month} {dateBd.year} year
			</p>
		</li>
	)
}

export default ChecedCardLi
