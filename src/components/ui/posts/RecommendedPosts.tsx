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

type RecommendedPostsProps = {
	id: string
	authorId: string
	title: string
	excerpt: string
	date: string
	tags: string[]
	image?: string
}

export default function RecommendedPosts({
	id,
	authorId,
	title,
	date,
	tags,
	image,
}: RecommendedPostsProps) {
	const author = useAuthor(authorId)
	const theme = useTheme()

	const postDate = new Date(date)
		.toLocaleString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		})
		.replace('.', '')
		.replace(/de /g, '')

	return (
		<Box
			styleSheet={{
				paddingBottom: '15px',
			}}
		>
			<Box
				styleSheet={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					position: 'relative',
					maxWidth: '100%',
				}}
			>
				<Box styleSheet={{ maxWidth: '100%', width: image ? 'calc(100% - 100px)' : '100%' }}>
					<Text
						variant='body4'
						styleSheet={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							fontWeight: 'bold',
							marginBottom: '12px',
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
					<Box styleSheet={{ marginBottom: 4 }}>{author && <AuthorLink author={author} />}</Box>
					<Link
						href={`/post/${id}`}
						variant='body1'
						styleSheet={{
							marginBottom: '8px',
							display: 'inline',
						}}
						colorVariantEnabled={false}
					>
						<Text
							tag='h2'
							variant='heading4'
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
				</Box>
				{image && (
					<ButtonBase
						href={`/post/${id}`}
						styleSheet={{ hover: { opacity: 0.8 }, justifyContent: 'center', marginLeft: '10px' }}
					>
						<Image
							src={image}
							alt={title}
							styleSheet={{
								width: '95px',
								height: '95px',
								borderRadius: '12px',
								objectFit: 'cover',
								marginBottom: '8px',
							}}
						/>
					</ButtonBase>
				)}
			</Box>
			<Box styleSheet={{ flexDirection: 'row', flexWrap: 'wrap', gap: '4px' }}>
				{tags.map((tag) => (
					<Tag key={tag} tag={tag} variant='body4' params={'/'} />
				))}
			</Box>
			<HorizontalRule />
		</Box>
	)
}
