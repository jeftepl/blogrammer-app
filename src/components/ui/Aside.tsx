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
				width: { xs: '100%', lg: 'calc(29% - 55px)' },
				gap: '20px',
				overflowY: 'auto',
				position: { xs: 'relative', lg: 'sticky' },
				top: 0,
				height: '100%',
				paddingTop: { xs: 0, lg: '110px' },
			}}
		>
			{children}
		</Box>
	)
}
