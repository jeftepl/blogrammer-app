import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type bodyRequest = {
	email: string
	subject: string
	message: string
	isNotification?: boolean
}

export async function POST(req: Request) {
	const body: bodyRequest = await req.json()
	const { email, subject, message, isNotification } = body

	const emailMessage = {
		from: process.env.EMAIL_ADDRESS,
		to: isNotification ? process.env.EMAIL_ADDRESS : email,
		subject: subject,
		text: message,
		html: `<p>${message}</p>`,
	}

	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL_ADDRESS,
			pass: process.env.APP_PASSWORD,
		},
	})

	try {
		await transporter.sendMail(emailMessage)
		return NextResponse.json(
			{ success: `Message delivered to ${emailMessage.to}` },
			{ status: 200 },
		)
	} catch (error) {
		return NextResponse.json({ error: `Error sending email: ${error}` }, { status: 500 })
	}
}
