import { useTheme } from '@/hooks/useTheme'
import { Author } from '@/types/Author'
import Image from './Image'
import Link from './Link'
import Text from './Text'
import Box from './Box'

type AuthorLinkProps = {
	author: Author
	date?: string
	description?: string
}

export default function AuthorLink({ author, date, description }: AuthorLinkProps) {
	const theme = useTheme()

	const url = `/author/${author.id}`

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
			<Box>
				<Text variant='heading5' styleSheet={{ color: theme.colors.primary.x500 }}>
					{author?.name}
				</Text>
				{date && (
					<Text tag='span' variant='body3' styleSheet={{ color: theme.colors.neutral.x500 }}>
						Published on {date}
					</Text>
				)}
				{description && (
					<Text tag='p' variant='body3' styleSheet={{ color: theme.colors.neutral.x500 }}>
						{description}
					</Text>
				)}
			</Box>
		</Link>
	)
}
