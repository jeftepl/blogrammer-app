'use client'

import Box from '@/components/ui/Box'
import Button from '@/components/ui/button/Button'
import Link from '@/components/ui/Link'
import Text from '@/components/ui/Text'
import TextField from '@/components/ui/TextField'
import useForm from '@/hooks/useForm'
import { emailRegex } from '@/utils/validations'

export default function NewsletterPage() {
	const form = useForm({
		initialValues: {
			email: '',
		},
		validate: (values) => {
			const errors: { email?: string; name?: string } = {}
			if (!emailRegex.test(values.email)) errors.email = 'Invalid email address'
			return errors
		},
	})

	const sendData = () => {
		if (form.isValid) {
			console.log('Submit')
		}
	}

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
					}}
				>
					<Text variant='heading2'>Newsletter</Text>
					<TextField
						id='email'
						name='email'
						placeholder='Type your e-mail here'
						value={form.values.email}
						onChange={form.handleChange}
						error={form.errors?.email}
					/>
					<Button fullWidth styleSheet={{ margin: '0 auto' }} type='submit'>
						Sign up
					</Button>
				</Box>
			</form>
			<Link href='/'>Home</Link>
		</Box>
	)
}
