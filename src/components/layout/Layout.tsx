import { Outlet, useNavigate } from 'react-router-dom'
import { URL_PAGE } from '../../cfg/url.cfg'
import CompanyTitle from '../CompanyTitle'
import Btn from '../ui/Btn'
import s from './layout.module.scss'

const Layout = () => {
	const navigate = useNavigate()

	return (
		<>
			<header className={s.header}>
				<nav className={`wrapper ${s.header__flex}`}>
					<CompanyTitle />
					<Btn title='Contact Us' onClick={() => navigate(URL_PAGE.SUBMIT)} />
				</nav>
			</header>
			<div
				className='wrapper'
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '30px',
				}}
			>
				<Outlet />
			</div>

			<footer className={s.footer}>
				<div className={`wrapper ${s.footer__flex}`}>
					<CompanyTitle /> 2024
				</div>
			</footer>
		</>
	)
}

export default Layout
