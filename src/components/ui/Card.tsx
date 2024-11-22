import { useTheme } from '@/hooks/useTheme'
import Box from './Box'

export default function Card({ children }: { children: React.ReactNode }) {
	const theme = useTheme()

	return (
		<Box
			styleSheet={{
				gap: 16,
				backgroundColor: theme.colors.neutral.x000,
				borderRadius: '8px',
				paddingVertical: '40px',
				paddingHorizontal: '32px',
			}}
		>
			{children}
		</Box>
	)
}
