import { useTheme } from '@/hooks/useTheme'
import BaseComponent from '@/theme/BaseComponent'
import Box from './Box'
import Text from './Text'

type TextareaProps = {
	name: string
	id: string
	placeholder?: string
	value?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	error?: string
}

export default function Textarea({ error, ...props }: TextareaProps) {
	const theme = useTheme()
	const textAreaMaxLength = 300

	return (
		<Box styleSheet={{ width: '100%' }}>
			<Box styleSheet={{ position: 'relative' }}>
				<BaseComponent
					as='textarea'
					{...props}
					styleSheet={{
						fontFamily: `var(--font-cairo)`,
						fontSize: '13px',
						border: `1px solid ${theme.colors.neutral.x300}`,
						borderRadius: '4px',
						padding: '8px',
						width: '100%',
						outline: 'none',
						resize: 'none',
						scrollbarWidth: 'thin',
						scrollbarColor: theme.colors.neutral.x200,
					}}
					rows={5}
					maxLength={textAreaMaxLength}
				/>
				<Text
					styleSheet={{
						fontSize: '13px',
						position: 'absolute',
						bottom: '10px',
						right: '16px',
						color: theme.colors.neutral.x600,
					}}
				>
					{props.value?.length}/{textAreaMaxLength}
				</Text>
			</Box>
			<Text
				aria-describedby={error ? 'input-error' : undefined}
				styleSheet={{
					color: theme.colors.negative.x600,
					fontSize: '14px',
					marginTop: '6px',
				}}
			>
				{error}
			</Text>
		</Box>
	)
}
