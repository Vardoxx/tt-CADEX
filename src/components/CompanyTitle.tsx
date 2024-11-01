import { useNavigate } from 'react-router-dom'
import { URL_PAGE } from '../cfg/url.cfg'

const CompanyTitle = () => {
	const navigate = useNavigate()
	return (
		<h1 className='companyTitle' onClick={() => navigate(URL_PAGE.MAIN)}>
			CADEX
		</h1>
	)
}

export default CompanyTitle
