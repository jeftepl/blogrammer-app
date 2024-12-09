import { useTheme } from '@/hooks/useTheme'
import ButtonBase from './button/ButtonBase'
import Link from './Link'
import Text from './Text'

export default function Logo() {
	const theme = useTheme()
	const size = '36px'

	return (
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
	)
}
