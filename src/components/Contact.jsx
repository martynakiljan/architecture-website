import { useForm } from 'react-hook-form'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import RotateLoader from 'react-spinners/ClipLoader'

const Contact = () => {
	const form = useRef()
	const [formError, setFormError] = useState('')
	const [successForm, setSuccessForm] = useState(false)
	const [loading, setLoading] = useState(false)

	const {
		register,
		handleSubmit,
		reset: resetForm,
		formState: { errors },
	} = useForm({ mode: 'onChange' })

	const onSubmitHandler = data => {
		setFormError('')
		sendEmailFun(data)
	}

	const sendEmailFun = () => {
		setLoading(true)
		emailjs
			.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, {
				publicKey: process.env.REACT_APP_EMAILJS_USER_ID,
			})
			.then(
				result => {
					console.log('SUCCESS!', result.text)
					setSuccessForm(true)
					resetForm()
					setTimeout(() => {
						setSuccessForm(false)
					}, 5000)
				},
				error => {
					console.error('FAILED...', error.text)
					setSuccessForm(false)
				}
			)
			.finally(() => {
				setLoading(false)
			})
	}

	const override = {
		width: '20px',
		height: '20px',
	}

	return (
		<div>
			<h2 className='title title-small' id='contact'>
				I will be happy if you contact me!
			</h2>

			<div className='form__wrapper' id='contact'>
				<form ref={form} onSubmit={handleSubmit(onSubmitHandler)} className='form'>
					<label className='label-form'>Your name:</label>
					<input
						placeholder='Alice'
						{...register('firstName', {
							required: 'Name is required',
							minLength: { value: 3, message: 'Name must be at least 3 characters long' },
						})}
						type='text'
						id='firstName'
						className='input-form'
					/>
					{errors.firstName && <p className='form-error'>{errors.firstName.message}</p>}
					<label className='label-form'>Your email:</label>
					<input
						{...register('email', {
							required: 'Email is required',
							pattern: { value: /^\S+@\S+$/i, message: 'Please enter a valid email address' },
						})}
						type='email'
						placeholder='alice@gmail.com'
						id='email'
						className='input-form'
					/>
					{errors.email && <p className='form-error'>{errors.email.message}</p>}
					<label className='label-form'>Your number:</label>
					<input
						placeholder='+41 737 345 2342'
						className='input-form'
						{...register('phone', {
							required: 'Phone number is required',
							pattern: {
								value: /^\+?\d{1,4}[-\s]?(?:\d{3}[-\s]?\d{3}[-\s]?\d{3}|\d{9})$/,
								message: 'Please enter a valid phone number with optional country code',
							},
						})}
						type='tel'
						id='phone'
					/>
					{errors.phone && <p className='form-error'>{errors.phone.message}</p>}
					<label className='label-form'>Your message:</label>
					<textarea
						{...register('message', {
							required: 'Message is required',
							minLength: { value: 5, message: 'Message must be at least 5 characters long' },
						})}
						className='input-form'
						id='message'
						placeholder='Hi! I want you to design my kitchen!'></textarea>
					{errors.message && <p className='form-error'>{errors.message.message}</p>}
					{loading ? (
						<RotateLoader cssOverride={override} loading={loading} color='#5a4b2d' className='spinner' />
					) : (
						<button type='submit' className='form__button'>
							SEND
						</button>
					)}
					{formError && <p className='form-error'>{formError}</p>}
					{successForm && <p className='form-button'>Your message has been sent successfully!</p>}
				</form>
			</div>
		</div>
	)
}

export default Contact
