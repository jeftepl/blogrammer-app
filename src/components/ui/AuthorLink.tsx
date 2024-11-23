import { useTheme } from '@/hooks/useTheme'
import { Author } from '@/types/Author'
import Image from './Image'
import Link from './Link'
import Text from './Text'

export default function AuthorLink(author: Author) {
	const theme = useTheme()

	const name = author.name.trim().replace(/\s+/g, '-').toLowerCase()
	const url = `/authors/${name}-${author.id}`

	return (
		<Link
			href={url}
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
		</Link>
	)
}
