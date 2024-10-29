import { createBrowserRouter } from 'react-router-dom'
import { URL_PAGE } from './cfg/url.cfg'
import Layout from './components/layout/Layout'

export const router = createBrowserRouter([
	{ element: <Layout />, children: [{ path: URL_PAGE.MAIN }] },
])
