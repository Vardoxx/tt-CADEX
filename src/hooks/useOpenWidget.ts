import { useDispatch } from 'react-redux'
import {
	closeWidget,
	openWidget,
	widgetName,
} from '../store/slices/widget.slice'
import { TWidgetProvider } from '../types/widgetProvider.types'

export const useOpenWidget = () => {
	const dispatch = useDispatch()

	const open = (name: TWidgetProvider) => {
		dispatch(openWidget())
		dispatch(widgetName(name))
	}

	const close = () => {
		dispatch(closeWidget())
	}

	return [open, close]
}
