import Box from './Box'

export default function Aside({ children }: { children: React.ReactNode }) {
	return (
		<Box
			tag='aside'
			styleSheet={{
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
