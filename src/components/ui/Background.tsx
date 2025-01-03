import { StyleSheet } from '@/theme/Stylesheet'
import Box from './Box'

interface BackgroundProps {
	url: string
	styleSheet?: StyleSheet
}

export default function Background({ url, styleSheet }: BackgroundProps) {
	return (
		<Box
			styleSheet={{
				width: '100%',
				backgroundImage: `url(${url})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				...styleSheet,
			}}
		/>
	)
}
