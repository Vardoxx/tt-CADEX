import { Controller, SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { emailRegex, lettersRegex } from '../../constants/regex.constants'
import { closeWidget } from '../../store/slices/widget.slice'
import Btn from '../ui/Btn'
import Input from '../ui/Input'
import TextArea from '../ui/TextArea'

interface IFormInput {
	name: string
	email: string
	message: string
}

const ContactUsWidget = () => {
	const dispatch = useDispatch()
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<IFormInput>({
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
		mode: 'onSubmit',
	})

	const onSubmit: SubmitHandler<IFormInput> = data => {
		console.log(data)
	}

	const messageLength = useWatch({
		control,
		name: 'message',
	}).length

	return (
		<form className='contact-us-widget-form' onSubmit={handleSubmit(onSubmit)}>
			<div className='contact-us-widget-form__input-container'>
				{errors.name && (
					<p className='contact-us-widget-form__input-container__error'>
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

			<div className='contact-us-widget-form__input-container'>
				{errors.email && (
					<p className='contact-us-widget-form__input-container__error'>
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

			<div className='contact-us-widget-form__input-container'>
				{errors.message && (
					<p className='contact-us-widget-form__input-container__error'>
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
							type='text'
							placeholder='Message'
							height='125px'
							{...field}
						/>
					)}
				/>
				<p
					className='contact-us-widget-form__input-container__counter'
					style={messageLength >= 300 ? { color: 'red' } : {}}
				>
					{messageLength} / 300
				</p>
			</div>
			<Btn
				title='submit'
				type='submit'
				onClick={() => (isValid ? dispatch(closeWidget()) : null)}
			/>
		</form>
	)
}

export default ContactUsWidget
