import { combineReducers, configureStore } from '@reduxjs/toolkit'
import submissionReducer from './slices/submission.slice'

const reducer = combineReducers({
	submission: submissionReducer,
})

export const store = configureStore({
	reducer: reducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
