import React, { useState } from 'react';

function Contact() {
	const [formState, setFormState] = useState({ name: '', email: '', message: ''});
	const { name, email, message } = formState;

	const [errorMessage, setErrorMessage] = useState('');
	
	function handleSubmit(e) {
		e.preventDefault();
		console.log(formState);
	}

	function handleBlur(e) {

	}

	function handleChange(e) {
		console.log(e.target.name);
	}

	return (
		<section className='contact'>
			<h1>Contact Me</h1>

			<form id='contact-form' onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input 
						type='text'
						name='name'
						placeholder='Your name'
						id='form-name'
						default={name}
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
						default={email}
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
						default={message}
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