import { useTheme } from '@/hooks/useTheme'
import Box from '../Box'

type FeedProps = {
	children: React.ReactNode
}
export default function Feed({ children }: FeedProps) {
	const theme = useTheme()

	return (
		<Box
			styleSheet={{
				order: { xs: '2', xl: '0' },
				backgroundColor: theme.colors.neutral.x000,
				marginTop: { xs: '84px', xl: '111px' },
				width: { xl: '42%', xs: '100%' },
				borderRadius: '8px',
				paddingVertical: '40px',
				paddingHorizontal: { xs: '18px', xl: '32px' },
			}}
		>
			{children}
		</Box>
	)
}
