import BaseComponent from '@/theme/BaseComponent'
import Box from './Box'

type TextFieldProps = {
	name: string
	id: string
	placeholder?: string
}

export default function TextField(props: TextFieldProps) {
	return (
		<Box
			styleSheet={{
				maxWidth: '300px',
				width: '100%',
			}}
		>
			<BaseComponent
				as='input'
				{...props}
				styleSheet={{
					border: '1px solid rgb(195,195,195)',
					borderRadius: '4px',
					padding: '8px',
					width: '100%',
				}}
			/>
		</Box>
	)
}
