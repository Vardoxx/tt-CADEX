import { Outlet } from 'react-router-dom'
import CompanyTitle from '../CompanyTitle'
import Btn from '../ui/btn'
import s from './layout.module.scss'

const Layout = () => {
	return (
		<div className={s.container}>
			<div className={`wrapper ${s.flex}`}>
				<CompanyTitle />
				<Btn title='Contact Us' />
			</div>
			<Outlet />
		</div>
	)
}

export default Layout
