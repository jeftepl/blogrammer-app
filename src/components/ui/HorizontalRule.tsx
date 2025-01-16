import { useTheme } from '@/hooks/useTheme'
import Box from './Box'

export default function HorizontalRule() {
	const theme = useTheme()

	return (
		<Box
			styleSheet={{
				width: '100%',
				height: '1px',
				backgroundColor: theme.colors.neutral.x200,
				marginTop: '20px',
				marginBottom: '20px',
			}}
		/>
	)
}
