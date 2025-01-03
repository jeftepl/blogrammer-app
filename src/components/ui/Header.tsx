import { useTheme } from '@/hooks/useTheme'
import Box from './Box'
import Button from './button/Button'
import Logo from './Logo'
import SearchField from './SearchField'

export default function Header() {
	const theme = useTheme()

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
				backgroundColor: theme.colors.neutral.x050,
			}}
		>
			<Box
				styleSheet={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					paddingTop: '12px',
					paddingBottom: '53px',
					paddingHorizontal: '20px',
					color: theme.colors.neutral.x999,
					maxWidth: { xs: '100%', sm: '768px', md: '992px', lg: '1280px', xl: '1592px' },
					width: '100%',
					margin: '0 auto',
				}}
			>
				<Box styleSheet={{ width: '29%' }}>
					<Logo />
				</Box>
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
					<Button
						variant='subtle'
						colorVariant='neutral'
						size='xs'
						textVariant='body3'
						href='/contact'
					>
						Contact us
					</Button>
				</Box>
			</Box>
		</Box>
	)
}
