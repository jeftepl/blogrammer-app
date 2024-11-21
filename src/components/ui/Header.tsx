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
	const size = '36px'

	return (
		<Box
			tag='header'
			styleSheet={{
				width: '100%',
				height: '110px',
				position: 'fixed',
				left: 0,
				right: 0,
				top: 0,
				zIndex: 1000,
			}}
		>
			<Box
				styleSheet={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					paddingTop: '12px',
					paddingBottom: '53px',
					paddingHorizontal: '20px',
					backgroundColor: theme.colors.neutral.x050,
					color: theme.colors.neutral.x999,
					maxWidth: { xs: '100%', sm: '768px', md: '992px', lg: '1280px', xl: '1592px' },
					width: '100%',
					margin: '0 auto',
				}}
			>
				<Link href='/' styleSheet={{ width: '29%' }}>
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
							textVariant='heading2'
						>
							<Text
								tag='span'
								variant='heading2'
								styleSheet={{ fontFamily: 'var(--font-orbitron)', marginLeft: '1px' }}
							>
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
				<Box
					styleSheet={{
						flexDirection: 'row',
						justifyContent: 'flex-end',
						gap: '10px',
						width: '29%',
					}}
				>
					<Button colorVariant='primary' size='xs' textVariant='body3' href='/newsletter'>
						Newsletter
					</Button>
					<Button variant='subtle' colorVariant='neutral' size='xs' textVariant='body3' href='/'>
						Contact us
					</Button>
				</Box>
			</Box>
		</Box>
	)
}
