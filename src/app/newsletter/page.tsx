'use client'

import Box from '@/components/ui/Box'
import Button from '@/components/ui/button/Button'
import Link from '@/components/ui/Link'
import Text from '@/components/ui/Text'
import TextField from '@/components/ui/TextField'
import useForm from '@/hooks/useForm'
import { useTheme } from '@/hooks/useTheme'
import { sendConfirmationEmail } from '@/services/email'
import { getNewsletterSubscribersCount, subscribeToNewsletter } from '@/services/newsletter'
import { isValidEmail } from '@/utils/validations'
import { useEffect, useState } from 'react'

export default function NewsletterPage() {
	const [message, setMessage] = useState<string>('')
	const [isError, setIsError] = useState(false)
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

	useEffect(() => {
		fetchSubscribersCount()
	}, [message])

	const fetchSubscribersCount = async () => {
		try {
			const count = await getNewsletterSubscribersCount()
			setCount(count)
		} catch (error) {
			console.error('Failed to fetch subscribers count:', error)
		}
	}

	const handleSubmit = async () => {
		try {
			await subscribeToNewsletter(form.values.email)
			await sendConfirmationEmail(form.values.email)
			setMessage('Successfully subscribed!')
			form.reset()
		} catch (error) {
			setIsError(true)
			if (error instanceof Error) {
				setMessage(error.message)
			} else {
				setMessage('An unexpected error occurred. Please try again.')
			}
			console.error('Subscription error:', error)
		}
	}

	return (
		<Box styleSheet={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
			<form onSubmit={form.handleSubmit(handleSubmit)}>
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
				styleSheet={{
					height: '34px',
					color: isError ? theme.colors.negative.x500 : theme.colors.positive.x500,
				}}
				aria-live='polite'
			>
				{message}
			</Text>
			<Link href='/'>Home</Link>
		</Box>
	)
}
