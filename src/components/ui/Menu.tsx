import { useTheme } from '@/hooks/useTheme'
import Box from './Box'

export default function Menu() {
	const theme = useTheme()

	return (
		<Box
			styleSheet={{
				width: '100%',
				position: 'absolute',
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
				zIndex: 999,
				flexDirection: 'row',
				justifyContent: 'space-between',
				paddingVertical: '16px',
				paddingHorizontal: '20px',
				backgroundColor: theme.colors.neutral.x999,
			}}
		>
			teste
		</Box>
	)
}
