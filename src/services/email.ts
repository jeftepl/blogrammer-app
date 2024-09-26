export async function sendConfirmationEmail(email: string) {
	try {
		const response = await fetch('/api/email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				subject: 'Newsletter',
				message: 'Successfully subscribed to the Newsletter!',
			}),
		})

		if (!response.ok) {
			throw new Error(`Error sending email: ${response.status}`)
		}

		return response.json()
	} catch (error) {
		console.error(error)
		throw new Error('Failed to send confirmation email')
	}
}
