import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
	message: string
}

const initialState: IInitialState = {
	message: '',
}

export const submissionSlice = createSlice({
	name: 'submission',
	initialState,
	reducers: {
		exportRes: (state, action) => {
			state.message = action.payload
		},
		deleteRes: state => {
			state.message = ''
		},
	},
})

export const { exportRes, deleteRes } = submissionSlice.actions

export default submissionSlice.reducer
