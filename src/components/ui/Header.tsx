import { useTheme } from '@/hooks/useTheme'
import { useState } from 'react'
import Box from './Box'
import Button from './button/Button'
import ButtonBase from './button/ButtonBase'
import Icon from './icon/Icon'
import Logo from './Logo'
import Menu from './Menu'
import SearchField from './SearchField'

export default function Header() {
	const theme = useTheme()

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<Box
			tag='header'
			styleSheet={{
				width: '100%',
				height: { xs: '84px', xl: '111px' },
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
					alignItems: 'center',
					paddingTop: '12px',
					paddingBottom: { xs: '12px', xl: '53px' },
					paddingHorizontal: '20px',
					color: theme.colors.neutral.x999,
					maxWidth: { xs: '100%', sm: '768px', md: '992px', lg: '1280px', xl: '1592px' },
					width: '100%',
					margin: '0 auto',
					position: 'relative',
				}}
			>
				<Box styleSheet={{ width: '29%', flexDirection: 'row', alignItems: 'center' }}>
					<ButtonBase
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						styleSheet={{
							display: { xl: 'none', xs: 'block' },
							zIndex: 1000,
							marginRight: '20px',
							padding: '10px',
							hover: {
								backgroundColor: theme.colors.neutral.x200,
								borderRadius: '100%',
							},
						}}
					>
						<Icon name='menu' />
					</ButtonBase>
					<Logo />
				</Box>
				<SearchField name='search' id='search' />
				<Box
					styleSheet={{
						flexDirection: 'row',
						justifyContent: 'flex-end',
						gap: '10px',
						width: '29%',
						display: { xl: 'flex', xs: 'none' },
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
			{isMenuOpen && <Menu />}
		</Box>
	)
}
