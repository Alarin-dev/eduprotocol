// auth.js
import { createClient } from '@supabase/supabase-js'

const SPABASE_URL = "https://jtdisotnkjfpjbuwkffm.supabase.co"
const SPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0ZGlzb3Rua2pmcGpidXdrZmZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyMjAzMDcsImV4cCI6MjA4NTc5NjMwN30.2A9D-8HrXiaumLJVSGFIZqpAENitsC8PnVfMPNBY0AQ"

export  const supabase = createClient(SPABASE_URL, SPABASE_ANON_KEY)

export async function signUp(email, password, name) {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: { data: { name: name } }

	})
	return {data, error }
}

export async function logIn(email, password) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password
	})
	return { data, error}
}
