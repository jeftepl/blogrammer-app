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
				backgroundColor: theme.colors.neutral.x000,
				marginTop: '110px',
				marginBottom: '40px',
				width: { xl: '42%', xs: '100%' },
				borderRadius: '8px',
				paddingVertical: '40px',
				paddingHorizontal: '32px',
			}}
		>
			{children}
		</Box>
	)
}
