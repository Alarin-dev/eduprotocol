import { logIn } from '../services/auth.js'

document.getElementById('login-form').addEventListener('submit', async (e) => {
	e.preventDefault()
	const form = e.target
	const email = form.email.value
	const password = form.password.value

	const { data, error } = await logIn(email, password)
		if (error) alert(error.message)
		else window.location.href = 'sessions.html'
})
