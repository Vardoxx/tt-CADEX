import { useDispatch } from 'react-redux'
import {
	closeWidget,
	openWidget,
	widgetName,
	widgetTitle,
} from '../store/slices/widget.slice'
import { TWidgetProvider } from '../types/widgetProvider.types'

export const useOpenWidget = () => {
	const dispatch = useDispatch()

	const open = (name: TWidgetProvider, title: string) => {
		dispatch(widgetName(name))
		dispatch(widgetTitle(title))
		dispatch(openWidget())
	}

	const close = () => {
		dispatch(closeWidget())
	}

	return [open, close]
}
