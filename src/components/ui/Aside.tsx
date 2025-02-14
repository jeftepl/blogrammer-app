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
				width: { xs: '100%', xl: 'calc(29% - 55px)' },
				gap: '20px',
				overflowY: 'auto',
				position: { xs: 'relative', xl: 'sticky' },
				top: 0,
				height: '100%',
				paddingTop: { xs: 0, xl: '110px' },
			}}
		>
			{children}
		</Box>
	)
}
