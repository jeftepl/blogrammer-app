'use client'

import Box from '@/components/ui/Box'
import Button from '@/components/ui/button/Button'
import Link from '@/components/ui/Link'
import Text from '@/components/ui/Text'
import TextField from '@/components/ui/TextField'
import useForm from '@/hooks/useForm'
import { useTheme } from '@/hooks/useTheme'
import { isValidEmail } from '@/utils/validations'
import { useEffect, useState } from 'react'

type RequesPostResponse = {
	status: number
	message?: string
	error?: string
}

type RequesGetResponse = {
	status: number
	data?: string
	count?: string
	error?: string
}

export default function NewsletterPage() {
	const [message, setMessage] = useState('')
	const [count, setCount] = useState(0)

	const theme = useTheme()

	const form = useForm({
		initialValues: {
			email: '',
		},
		validate: (values) => {
			const errors: { email?: string } = {}
			if (!isValidEmail(values.email)) errors.email = 'Invalid email address'
			return errors
		},
	})

	const sendData = async () => {
		try {
			const response = await fetch('/api/newsletter', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(form.values),
			})
			const data: RequesPostResponse = await response.json()
			if (response.ok) {
				setMessage('Successfully subscribed!')
				form.reset()
			} else {
				setMessage(data.error || 'An error occurred. Please try again.')
			}
		} catch (error) {
			setMessage('An error occurred. Please try again.')
		}
	}

	useEffect(() => {
		const getUsersOptin = async () => {
			try {
				const response = await fetch('/api/newsletter', { method: 'GET' })
				const data: RequesGetResponse = await response.json()
				if (response.ok) {
					setCount(Number(data.count))
				}
			} catch (error) {
				console.error(error)
			}
		}
		getUsersOptin()
	}, [])

	return (
		<Box styleSheet={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
			<form onSubmit={form.handleSubmit(sendData)}>
				<Box
					styleSheet={{
						alignItems: 'center',
						justifyContent: 'center',
						gap: '24px',
						width: '100%',
						maxWidth: '400px',
						padding: '16px',
						textAlign: 'center',
					}}
				>
					<Text variant='heading2'>Newsletter</Text>
					<Text variant='body2' styleSheet={{ flexDirection: 'row' }}>
						Join our group of&nbsp;
						<Text tag='span' variant='heading5'>
							{count} active readers
						</Text>
					</Text>
					<TextField
						id='email'
						name='email'
						placeholder='Type your e-mail here'
						value={form.values.email}
						onChange={form.handleChange}
						error={form.errors?.email}
					/>
					<Button fullWidth type='submit' disabled={form.isSubmitting}>
						{form.isSubmitting ? 'Sending...' : 'Sign up'}
					</Button>
				</Box>
			</form>
			<Text
				variant='body3'
				styleSheet={{ height: '34px', color: theme.colors.positive.x500 }}
				aria-live='polite'
			>
				{message}
			</Text>
			<Link href='/'>Home</Link>
		</Box>
	)
}
