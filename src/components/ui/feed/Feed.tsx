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
				marginBottom: '40px',
				width: '42%',
				borderRadius: '8px',
				paddingVertical: '40px',
				paddingHorizontal: '32px',
			}}
		>
			{children}
		</Box>
	)
}
