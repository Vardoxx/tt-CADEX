import { useEffect, useState } from 'react'

const SubmitAfterPage = () => {
	const [isMessage, setMessage] = useState<string>('')

	const message = localStorage.getItem('submissionRes')

	useEffect(() => {
		setMessage(message!)
	}, [message, isMessage])

	return (
		<div className='submit-after-page'>
			<h5 className='submit-after-page__message'>{isMessage}</h5>
		</div>
	)
}

export default SubmitAfterPage
