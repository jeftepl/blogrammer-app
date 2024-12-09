type sendEmailProps = {
	email?: string
	subject: string
	message: string
	isNotification?: boolean
}

export async function sendEmail({ email, subject, message, isNotification }: sendEmailProps) {
	try {
		const response = await fetch('/api/email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, subject, message, isNotification }),
		})

		if (!response.ok) {
			throw new Error(`Error sending email: ${response.status}`)
		}

		return response.json()
	} catch (error) {
		console.error(error)
		throw new Error('Failed to send email')
	}
}
