import { combineReducers, configureStore } from '@reduxjs/toolkit'
import submissionReducer from './slices/submission.slice'
import widgetReducer from './slices/widget.slice'

const reducer = combineReducers({
	widget: widgetReducer,
	submission: submissionReducer,
})

export const store = configureStore({
	reducer: reducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
