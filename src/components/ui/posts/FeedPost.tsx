import { useAuthor } from '@/hooks/useAuthor'
import { useTheme } from '@/hooks/useTheme'
import AuthorLink from '../AuthorLink'
import Box from '../Box'
import ButtonBase from '../button/ButtonBase'
import HorizontalRule from '../HorizontalRule'
import Icon from '../icon/Icon'
import Image from '../Image'
import Link from '../Link'
import Tag from '../Tag'
import Text from '../Text'

type FeedPostProps = {
	id: string
	authorId: string
	title: string
	excerpt: string
	date: string
	tags: string[]
	image?: string
	topics?: string[]
}

export default function FeedPost({
	id,
	authorId,
	title,
	excerpt,
	date,
	tags,
	image,
	topics,
}: FeedPostProps) {
	const theme = useTheme()
	const author = useAuthor(authorId)

	const postDate = new Date(date)
		.toLocaleString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		})
		.replace('.', '')
		.replace(/de /g, '')

	return (
		<Box styleSheet={{ position: 'relative', paddingBottom: '35px' }}>
			<Text
				variant='body4'
				styleSheet={{
					flexDirection: 'row',
					alignItems: 'center',
					fontWeight: 'bold',
					marginBottom: '16px',
					marginLeft: '4px',
				}}
			>
				<Icon
					size='md'
					name='clockFill'
					styleSheet={{
						transform: 'translateX(-50%) scale(.65)',
						color: theme.colors.neutral.x200,
					}}
				/>
				<Box tag='span' styleSheet={{ marginLeft: '-8px' }}>
					{postDate}
				</Box>
			</Text>
			<Box styleSheet={{ marginBottom: 8 }}>{author && <AuthorLink author={author} />}</Box>
			<Link
				href={`/post/${id}`}
				variant='body1'
				styleSheet={{ marginBottom: '8px', display: 'inline' }}
				colorVariantEnabled={false}
			>
				<Text
					tag='h2'
					variant='heading3'
					styleSheet={{
						display: 'inline',
						padding: '2px',
						borderRadius: '4px',
						color: theme.colors.neutral.x900,
					}}
				>
					{title}
				</Text>
			</Link>
			<Text variant='body3' styleSheet={{ marginBottom: '20px' }}>
				{excerpt}
			</Text>
			{image && (
				<ButtonBase href={`/post/${id}`} styleSheet={{ hover: { opacity: 0.8 } }}>
					<Image
						src={image}
						alt={title}
						styleSheet={{
							width: '100%',
							height: '335px',
							marginBottom: '24px',
							borderRadius: '12px',
							objectFit: 'cover',
						}}
					/>
				</ButtonBase>
			)}
			<Box styleSheet={{ flexDirection: 'row', flexWrap: 'wrap', gap: '4px' }}>
				{tags.map((tag) => (
					<Tag key={tag} tag={tag} currentTags={topics} />
				))}
			</Box>
			<HorizontalRule />
		</Box>
	)
}
