import Box from './Box'

export default function Background({ url }: { url: string }) {
	return (
		<Box
			styleSheet={{
				width: '100%',
				height: '400px',
				backgroundImage: `url(${url})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}
		/>
	)
}
