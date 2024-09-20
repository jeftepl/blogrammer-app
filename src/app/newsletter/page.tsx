'use client'

import Box from '@/components/ui/Box'
import Button from '@/components/ui/button/Button'
import Link from '@/components/ui/Link'
import Text from '@/components/ui/Text'
import TextField from '@/components/ui/TextField'

export default function NewsletterPage() {
	return (
		<Box styleSheet={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
				<TextField id='email' name='email' placeholder='Type your e-mail here' />
				<Button fullWidth styleSheet={{ margin: '0 auto', width: '100%', maxWidth: '180px' }}>
					Register
				</Button>
			</Box>
			<Link href='/'>Home</Link>
		</Box>
	)
}
