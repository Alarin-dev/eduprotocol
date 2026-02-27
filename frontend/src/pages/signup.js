import { signUp } from '../services/auth.js'

document.getElementById('signup-form').addEventListener('submit', async (e) => {
	e.preventDefault()
	const form = e.target
	const name = form.name.value
	const email = form.email.value
	const password = form.password.value
	const confirmPassword = form.confirmPassword.value
	if (password !== confirmPassword) {
		alert('Passwords don`t match');
		return;
	}

	const { data, error } = await signUp(email, password, name)
		if (error) alert(error.message) 
		else alert('Check your email for confirmation!')
})
