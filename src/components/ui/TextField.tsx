import { useTheme } from '@/hooks/useTheme'
import BaseComponent from '@/theme/BaseComponent'
import Box from './Box'
import Text from './Text'

type TextFieldProps = {
	name: string
	id: string
	placeholder?: string
	value?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	error?: string
}

export default function TextField({ error, ...props }: TextFieldProps) {
	const theme = useTheme()

	return (
		<Box styleSheet={{ width: '100%' }}>
			<BaseComponent
				as='input'
				type='text'
				{...props}
				styleSheet={{
					border: `1px solid ${theme.colors.neutral.x300}`,
					borderRadius: '4px',
					padding: '8px',
					width: '100%',
				}}
			/>
			<Text
				aria-describedby={error ? 'input-error' : undefined}
				styleSheet={{ color: theme.colors.negative.x600, fontSize: '14px' }}
			>
				{error}
			</Text>
		</Box>
	)
}
