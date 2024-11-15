import { useTheme } from '@/hooks/useTheme'
import BaseComponent from '@/theme/BaseComponent'
import Box from './Box'
import Icon from './icon/Icon'

type SearchFieldProps = {
	name: string
	id: string
	placeholder?: string
	value?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	error?: string
}

export default function SearchField({ error, ...props }: SearchFieldProps) {
	const theme = useTheme()

	return (
		<Box
			styleSheet={{
				justifyContent: 'center',
				width: '100%',
				maxWidth: '350px',
				position: 'relative',
				color: theme.colors.neutral.x400,
			}}
		>
			<BaseComponent
				as='input'
				type='search'
				placeholder='Search...'
				{...props}
				styleSheet={{
					backgroundColor: theme.colors.neutral.x050,
					border: 'none',
					borderRadius: '8px',
					padding: '12px',
					outline: 'none',
				}}
			/>
			<Icon
				name='search'
				styleSheet={{
					position: 'absolute',
					right: '10px',
					top: '8px',
					fill: 'none',
					stroke: 'currentColor',
					strokeWidth: 2,
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
				}}
			/>
		</Box>
	)
}
