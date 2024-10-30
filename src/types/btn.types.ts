import { ButtonHTMLType } from 'antd/es/button'

export interface IBtn {
	title: string
	type: ButtonHTMLType
	onClick?: () => void
}
