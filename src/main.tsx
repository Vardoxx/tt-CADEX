import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { Providers } from './providers'
import { router } from './router'
import { store } from './store/store'
import './styles/index.scss'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Providers>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</Providers>
	</StrictMode>
)
