import React from 'react'
import { IBtn } from '../../types/btn.types'

const Btn: React.FC<IBtn> = ({ title, onClick }) => {
	return (
		<button onClick={onClick} className='btn'>
			{title}
		</button>
	)
}

export default Btn
