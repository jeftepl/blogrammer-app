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
	const { data, error } = await dbClient.from('newsletter_users').select('*')
	console.log(data)
	console.log(error)

	return NextResponse.json({ data }, { status: 200 })
}

export async function POST(request: Request) {
	try {
		const data = await request.json()
		if (!data.email || !isValidEmail(data.email)) {
			return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
		}

		console.log('Subscribing email:', data.email)
		return NextResponse.json({ message: 'Subscription successful' }, { status: 200 })
	} catch (error) {
		console.error('Newsletter subscription error:', error)
		return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
	}
}
