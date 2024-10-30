import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'

export interface IInput {
	type: HTMLInputTypeAttribute
	onChange: ChangeEventHandler<HTMLInputElement>
	placeholder: string
}

export interface ITextArea {
	type: HTMLInputTypeAttribute
	onChange: ChangeEventHandler<HTMLTextAreaElement>
	placeholder: string
	width?: string
	height?: string
}
