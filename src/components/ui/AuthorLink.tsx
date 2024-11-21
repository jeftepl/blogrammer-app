import { Author } from '@/types/Author'
import Box from './Box'
import Image from './Image'
import Text from './Text'
import { useTheme } from '@/hooks/useTheme'

export default function AuthorLink(author: Author) {
	const theme = useTheme()

	return (
		<Box
			styleSheet={{
				flexDirection: 'row',
				alignItems: 'center',
				gap: '8px',
			}}
		>
			<Image
				src={author?.avatar ?? ''}
				alt='Profile image'
				styleSheet={{
					width: '42px',
					height: '42px',
					borderRadius: '100%',
				}}
			/>
			<Text variant='heading5' styleSheet={{ color: theme.colors.primary.x500 }}>
				{author?.name}
			</Text>
		</Box>
	)
}
