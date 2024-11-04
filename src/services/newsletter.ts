export async function subscribeToNewsletter(email: string): Promise<void> {
	try {
		const response = await fetch('/api/newsletter', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email }),
		})

		if (!response.ok) {
			const errorData = await response.json()
			if (response.status === 409) {
				throw new Error('E-mail already subscribed')
			}
			throw new Error(errorData.error || 'Failed to subscribe')
		}
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message)
		} else {
			throw new Error('An unexpected error occurred. Please try again.')
		}
	}
}

export async function getNewsletterSubscribersCount(): Promise<number> {
	try {
		const response = await fetch('/api/newsletter', { method: 'GET' })

		if (!response.ok) {
			throw new Error('Failed to fetch subscribers count')
		}

		const data = await response.json()
		return Number(data.count)
	} catch (error) {
		console.error(error)
		throw new Error('Failed to fetch subscribers count')
	}
}
