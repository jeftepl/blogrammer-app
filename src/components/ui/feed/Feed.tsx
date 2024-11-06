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
				boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
				marginTop: '-228px',
				marginBottom: '40px',
				width: '100%',
				maxWidth: '880px',
				borderRadius: '8px',
				paddingVertical: '40px',
				paddingHorizontal: '32px',
			}}
		>
			{children}
		</Box>
	)
}
