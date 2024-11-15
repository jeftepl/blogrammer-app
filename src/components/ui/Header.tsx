'use client'

import { useTheme } from '@/hooks/useTheme'
import Box from './Box'
import Button from './button/Button'
import ButtonBase from './button/ButtonBase'
import Link from './Link'
import SearchField from './SearchField'
import Text from './Text'

export default function Header() {
	const theme = useTheme()
	const size = '40px'

	return (
		<Box
			tag='header'
			styleSheet={{
				width: '100%',
				position: 'fixed',
				left: 0,
				right: 0,
				top: 0,
				zIndex: 1000,
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingVertical: '8px',
				paddingHorizontal: '20px',
				color: theme.colors.neutral.x999,
				backgroundColor: theme.colors.neutral.x000,
				boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
			}}
		>
			<Link href='/'>
				<Text
					tag='h1'
					variant='heading3'
					styleSheet={{
						flexDirection: 'row',
						alignItems: 'center',
						gap: '4px',
						color: theme.colors.neutral.x000,
					}}
				>
					<ButtonBase
						styleSheet={{
							borderRadius: '100%',
							width: size,
							height: size,
							backgroundColor: theme.colors.primary.x500,
							alignItems: 'center',
							justifyContent: 'center',
						}}
						textVariant='heading3'
					>
						<Text tag='span' variant='heading3' styleSheet={{ fontFamily: 'var(--font-orbitron)' }}>
							B
						</Text>
					</ButtonBase>
					<Text
						tag='span'
						variant='heading4'
						styleSheet={{ color: theme.colors.neutral.x999, marginTop: '2px' }}
					>
						logrammer
					</Text>
				</Text>
			</Link>
			<SearchField name='search' id='search' />
			<Box styleSheet={{ flexDirection: 'row', gap: '20px' }}>
				<Button colorVariant='primary' size='xs' textVariant='body3' href='/newsletter'>
					Newsletter
				</Button>
				<Button variant='subtle' colorVariant='neutral' size='xs' textVariant='body3' href='/'>
					Contact us
				</Button>
			</Box>
		</Box>
	)
}
