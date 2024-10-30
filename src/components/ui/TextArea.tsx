import { forwardRef } from 'react'
import { ITextArea } from '../../types/input.types'

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
	({ placeholder, onChange, width, height }, ref) => {
		return (
			<textarea
				ref={ref}
				onChange={onChange}
				placeholder={placeholder}
				style={{ resize: 'none', width: width, height: height }}
			/>
		)
	}
)

export default TextArea
