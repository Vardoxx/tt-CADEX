import React from 'react'
import { IBtn } from '../../types/btn.types'

const Btn: React.FC<IBtn> = ({ title, onClick, type }) => {
	return (
		<button onClick={onClick} className='btn' type={type}>
			{title}
		</button>
	)
}

export default Btn
