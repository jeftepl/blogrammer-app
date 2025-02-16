'use client'

import Box from '@/components/ui/Box'
import Button from '@/components/ui/button/Button'
import Card from '@/components/ui/Card'
import Text from '@/components/ui/Text'
import Textarea from '@/components/ui/Textarea'
import TextField from '@/components/ui/TextField'
import useForm from '@/hooks/useForm'
import { useTheme } from '@/hooks/useTheme'
import { sendEmail } from '@/services/email'
import { isValidEmail } from '@/utils/validations'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ContactPage() {
	const router = useRouter()
	const [message, setMessage] = useState('')
	const [isError, setIsError] = useState(false)

	const theme = useTheme()
	const form = useForm({
		initialValues: { name: '', email: '', subject: '', message: '' },
		validate: (values) => {
			const errors: { email?: string; name?: string; subject?: string; message?: string } = {}
			if (!values.name) errors.name = 'Name is required'
			if (!isValidEmail(values.email)) errors.email = 'Invalid email address'
			if (!values.subject) errors.subject = 'Subject is required'
			if (!values.message) errors.message = 'Message is required'
			return errors
		},
		onChange: () => setMessage(''),
	})

	const handleSubmit = async () => {
		try {
			await sendEmail({
				subject: 'Contact Form',
				message: `From: ${form.values.name} <br>
									Email: ${form.values.email} <br>
									Subject: ${form.values.subject} <br>
									Message: ${form.values.message}`,
				isNotification: true,
			})
			await sendEmail({
				email: form.values.email,
				subject: 'Blogrammer Contact',
				message: 'Successfully sent your message!',
			})
			setMessage('Successfully sent!')
			form.reset()
		} catch (error) {
			setIsError(true)
			if (error instanceof Error) {
				setMessage(error.message)
			} else {
				setMessage('An unexpected error occurred. Please try again.')
			}
			console.error('Contact error:', error)
		}
	}

	return (
		<Box
			styleSheet={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
			}}
		>
			<Box
				styleSheet={{
					paddingHorizontal: '20px',
					paddingVertical: '40px',
					width: { xs: '100%', md: 'auto' },
				}}
			>
				<Card>
					<Box
						tag='form'
						styleSheet={{ width: { xs: '100%', md: '400px' } }}
						onSubmit={form.handleSubmit(handleSubmit)}
					>
						<Box
							styleSheet={{
								alignItems: 'center',
								justifyContent: 'center',
								gap: '16px',
								width: '100%',
							}}
						>
							<Box styleSheet={{ alignItems: 'center', width: '100%' }}>
								<Text variant='heading1' styleSheet={{ marginTop: '0px' }}>
									Contact us
								</Text>
								<Text variant='body3'>How can we help you today?</Text>
							</Box>
							<Box styleSheet={{ width: '100%', gap: '8px' }}>
								<Box>
									<Text
										variant='body3'
										tag='label'
										htmlFor='name'
										styleSheet={{
											color: theme.colors.primary.x500,
											marginBottom: '4px',
											fontWeight: 'bold',
										}}
									>
										Name
									</Text>
									<TextField
										id='name'
										name='name'
										placeholder='Enter your name'
										value={form.values.name}
										onChange={form.handleChange}
										error={form.errors?.name}
									/>
								</Box>
								<Box>
									<Text
										variant='body3'
										tag='label'
										htmlFor='email'
										styleSheet={{
											color: theme.colors.primary.x500,
											marginBottom: '4px',
											fontWeight: 'bold',
										}}
									>
										Email
									</Text>
									<TextField
										id='email'
										name='email'
										placeholder='you@example.com'
										value={form.values.email}
										onChange={form.handleChange}
										error={form.errors?.email}
									/>
								</Box>
								<Box>
									<Text
										variant='body3'
										tag='label'
										htmlFor='subject'
										styleSheet={{
											color: theme.colors.primary.x500,
											marginBottom: '4px',
											fontWeight: 'bold',
										}}
									>
										Subject
									</Text>
									<TextField
										id='subject'
										name='subject'
										placeholder="What's on your mind"
										value={form.values.subject}
										onChange={form.handleChange}
										error={form.errors?.subject}
									/>
								</Box>
								<Box>
									<Text
										variant='body3'
										tag='label'
										htmlFor='message'
										styleSheet={{
											color: theme.colors.primary.x500,
											marginBottom: '4px',
											fontWeight: 'bold',
										}}
									>
										Message
									</Text>
									<Textarea
										id='message'
										name='message'
										placeholder='Tell us how we can help you...'
										value={form.values.message}
										onChange={form.handleChange}
										error={form.errors?.message}
									/>
								</Box>
							</Box>
							<Button type='submit' disabled={form.isSubmitting} fullWidth rounded='sm'>
								{form.isSubmitting ? 'Sending...' : 'Send'}
							</Button>
						</Box>
					</Box>
					<Box
						styleSheet={{
							alignItems: 'center',
							justifyContent: 'center',
							gap: '16px',
							marginHorizontal: 'auto',
						}}
					>
						<Text
							variant='body3'
							styleSheet={{
								color: isError ? theme.colors.negative.x500 : theme.colors.positive.x500,
							}}
							aria-live='polite'
						>
							{message}
						</Text>
						<Button
							variant='ghost'
							styleSheet={{ marginHorizontal: 'auto' }}
							onClick={() => router.back()}
						>
							Back
						</Button>
					</Box>
				</Card>
			</Box>
		</Box>
	)
}
