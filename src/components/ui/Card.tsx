import { useTheme } from '@/hooks/useTheme'
import { StyleSheet } from '@/theme/Stylesheet'
import Box from './Box'

type CardProps = {
	children: React.ReactNode
	styleSheet?: StyleSheet
}

export default function Card({ children, styleSheet }: CardProps) {
	const theme = useTheme()

	return (
		<Box
			styleSheet={{
				...styleSheet,
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
