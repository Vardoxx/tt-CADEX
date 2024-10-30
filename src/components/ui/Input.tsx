import { forwardRef } from 'react'
import { IInput } from '../../types/input.types'

const Input = forwardRef<HTMLInputElement, IInput>(
	({ type, placeholder, onChange }, ref) => {
		return (
			<input
				ref={ref}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
			/>
		)
	}
)

export default Input
