import { isValidEmail } from '@/utils/validations'
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_KEY

if (!SUPABASE_URL || !SUPABASE_KEY) {
	throw new Error('Missing Supabase environment variables')
}

const dbClient = createClient(SUPABASE_URL, SUPABASE_KEY)

export async function GET() {
	try {
		const { data, error, count, status } = await dbClient
			.from('newsletter_users')
			.select('*', { count: 'exact' })

		if (error) return NextResponse.json({ error }, { status })

		return NextResponse.json({ data, count }, { status: 200 })
	} catch (error) {
		console.error('Fetching data error:', error)
		return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
	}
}

export async function POST(request: Request) {
	try {
		const response = await request.json()
		if (!response.email || !isValidEmail(response.email)) {
			return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
		}

		const { error, status } = await dbClient
			.from('newsletter_users')
			.insert({ email: response.email, optin: true })

		if (error) return NextResponse.json({ error }, { status })

		return NextResponse.json({ message: 'Subscription successful' }, { status: 200 })
	} catch (error) {
		console.error('Newsletter subscription error:', error)
		return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
	}
}
