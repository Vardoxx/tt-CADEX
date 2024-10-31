import { createSlice } from '@reduxjs/toolkit'
import { TWidgetProvider } from '../../types/widgetProvider.types'

interface IInitialState {
	widgetName: TWidgetProvider | string
	widgetTitle: string
	widgetStatus: boolean
}

const initialState: IInitialState = {
	widgetName: '',
	widgetTitle: '',
	widgetStatus: false,
}

export const widgetSlice = createSlice({
	name: 'widget',
	initialState,
	reducers: {
		widgetName: (state, action) => {
			state.widgetName = action.payload
		},
		widgetTitle: (state, action) => {
			state.widgetTitle = action.payload
		},
		openWidget: state => {
			state.widgetStatus = true
		},
		closeWidget: state => {
			state.widgetStatus = false
		},
	},
})

export const { widgetName, widgetTitle, openWidget, closeWidget } =
	widgetSlice.actions
export default widgetSlice.reducer
