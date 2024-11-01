import { createBrowserRouter } from 'react-router-dom'
import { URL_PAGE } from './cfg/url.cfg'
import Layout from './components/layout/Layout'
import MainPage from './pages/Main.page'
import Submission from './pages/Submission.page'

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: URL_PAGE.MAIN, element: <MainPage />, index: true },
			{ path: URL_PAGE.SUBMISSION, element: <Submission /> },
		],
	},
])
