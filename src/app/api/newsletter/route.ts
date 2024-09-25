import { isValidEmail } from '@/utils/validations'
import { NextResponse } from 'next/server'

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
