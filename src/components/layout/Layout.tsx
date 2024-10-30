import { Outlet } from 'react-router-dom'
import { useOpenWidget } from '../../hooks/useOpenWidget'
import CompanyTitle from '../CompanyTitle'
import Btn from '../ui/Btn'
import s from './layout.module.scss'

const Layout = () => {
	const [open] = useOpenWidget()
	return (
		<>
			<header className={s.header}>
				<nav className={`wrapper ${s.header__flex}`}>
					<CompanyTitle />
					<Btn title='Contact Us' onClick={() => open('AboutUs')} />
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
