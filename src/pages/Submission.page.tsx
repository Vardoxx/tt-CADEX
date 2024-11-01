import { useEffect, useState } from 'react'

const Submission = () => {
	const [isMessage, setMessage] = useState<string>('')

	const message = localStorage.getItem('submissionRes')

	useEffect(() => {
		setMessage(message!)
		console.log(isMessage)
	}, [message, isMessage])

	return (
		<div className='submission-page'>
			<h5>{isMessage}</h5>
		</div>
	)
}

export default Submission
