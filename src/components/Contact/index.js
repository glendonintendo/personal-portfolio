import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
	const [formState, setFormState] = useState({ name: '', email: '', message: ''});
	const { name, email, message } = formState;

	const [errorMessage, setErrorMessage] = useState('');
	
	function handleSubmit(e) {
		e.preventDefault();
		if (formState.name && formState.email && validateEmail(formState.email)) {
			console.log(formState);
			setFormState({ name: '', email: '', message:''});
			setErrorMessage('Email successfully sent. I will get back to you as soon as possible!')
		}
	}

	function handleBlur(e) {
		if (e.target.name === 'email') {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage('Your email is invalid');
			} else {
				setErrorMessage('');
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`Your ${e.target.name} is required.`);
			} else {
				setErrorMessage('');
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleChange(e) {
		setFormState({ ...formState, [e.target.name]: e.target.value })
	}

	return (
		<section className='contact'>
			<form id='contact-form' onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input 
						type='text'
						name='name'
						placeholder='Your name'
						id='form-name'
						value={name}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>

				<div>
					<label htmlFor='email'>Email Address:</label>
					<input 
						type='email'
						name='email'
						placeholder='Your email'
						id='form-email'
						value={email}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>

				<div>
					<label htmlFor='message'>Message:</label>
					<textarea 
						name='message'
						placeholder='Your message'
						id='form-message'
						rows='5'
						value={message}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>

				{errorMessage && (
					<div>
						<p className='error-text'>{errorMessage}</p>
					</div>
				)}

				<button type='submit'>Submit</button>
			</form>
		</section>
	)
}

export default Contact;