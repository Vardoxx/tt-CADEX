import { useMutation } from '@tanstack/react-query'
import { Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Controller, SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { URL_PAGE } from '../cfg/url.cfg'
import Btn from '../components/ui/Btn'
import { emailRegex, lettersRegex } from '../constants/regex.constants'
import { orderService } from '../services/order.service'
import { deleteRes, exportRes } from '../store/slices/submission.slice'

import { IOrderReq } from '../styles/order.types'

const SubmitPage = () => {
	const dispatch = useDispatch()

	const navigate = useNavigate()

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IOrderReq>({
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
		mode: 'onSubmit',
	})

	const { mutate } = useMutation({
		mutationKey: ['order'],
		mutationFn: (data: IOrderReq) => orderService.create(data),
		onSuccess(res) {
			dispatch(deleteRes())
			dispatch(exportRes(res.data.message))
			navigate(URL_PAGE.SUBMIT_AFTER)
		},
	})

	const onSubmit: SubmitHandler<IOrderReq> = data => {
		mutate(data)
	}

	const messageLength = useWatch({
		control,
		name: 'message',
	}).length

	return (
		<div className='submit-page'>
			<form className='submit-page__form' onSubmit={handleSubmit(onSubmit)}>
				<div className='submit-page__form__input-container'>
					{errors.name && (
						<p className='submit-page__form__input-container__error'>
							{errors.name.message}
						</p>
					)}
					<Controller
						name='name'
						control={control}
						rules={{
							required: 'Require',
							maxLength: { value: 30, message: 'Maximum 30 characters' },
							pattern: { value: lettersRegex, message: 'Letters only' },
						}}
						render={({ field }) => (
							<Input type='text' placeholder='Name' {...field} />
						)}
					/>
				</div>

				<div className='submit-page__form__input-container'>
					{errors.email && (
						<p className='submit-page__form__input-container__error'>
							{errors.email.message}
						</p>
					)}
					<Controller
						name='email'
						control={control}
						rules={{
							required: 'Require',
							maxLength: { value: 100, message: 'Maximum 100 characters' },
							pattern: { value: emailRegex, message: 'Email invalid' },
						}}
						render={({ field }) => (
							<Input type='text' placeholder='Email' {...field} />
						)}
					/>
				</div>

				<div className='submit-page__form__input-container'>
					{errors.message && (
						<p className='submit-page__form__input-container__error'>
							{errors.message.message}
						</p>
					)}
					<Controller
						name='message'
						control={control}
						rules={{
							required: 'Require',
							maxLength: { value: 300, message: 'Maximum 300 characters' },
						}}
						render={({ field }) => (
							<TextArea
								placeholder='Message'
								style={{ resize: 'none', height: '88%' }}
								{...field}
								className='textarea'
							/>
						)}
					/>
					<p
						className='submit-page__form__input-container__counter'
						style={messageLength >= 300 ? { color: 'red' } : {}}
					>
						{messageLength} / 300
					</p>
				</div>
				<Btn title='submit' type='submit' />
			</form>
		</div>
	)
}

export default SubmitPage
