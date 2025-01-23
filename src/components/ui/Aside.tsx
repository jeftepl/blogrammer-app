import { StyleSheet } from '@/theme/Stylesheet'
import Box from './Box'

type AsideProps = {
	children: React.ReactNode
	styleSheet?: StyleSheet
}

export default function Aside({ children, styleSheet }: AsideProps) {
	return (
		<Box
			tag='aside'
			styleSheet={{
				...styleSheet,
				width: 'calc(29% - 55px)',
				gap: '20px',
				overflowY: 'auto',
				position: 'sticky',
				top: 0,
				height: '100%',
				paddingTop: '110px',
			}}
		>
			{children}
		</Box>
	)
}
