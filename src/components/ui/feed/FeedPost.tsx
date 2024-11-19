import useAuthor from '@/hooks/useAuthor'
import { useTheme } from '@/hooks/useTheme'
import Box from '../Box'
import ButtonBase from '../button/ButtonBase'
import Icon from '../icon/Icon'
import Image from '../Image'
import Link from '../Link'
import Text from '../Text'
import HorizontalRule from '../HorizontalRule'

type FeedPostProps = {
	authorId: string
	title: string
	excerpt: string
	url: string
	date: string
	tags: string[]
	image?: string
}

export default function FeedPost({
	authorId,
	title,
	excerpt,
	url,
	date,
	tags,
	image,
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
			<Link
				href={url}
				variant='body1'
				styleSheet={{ marginBottom: '8px', display: 'inline' }}
				colorVariantEnabled={false}
			>
				<Box
					styleSheet={{
						flexDirection: 'row',
						alignItems: 'center',
						gap: '8px',
						marginBottom: '16px',
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
				<Text
					tag='h2'
					variant='body1'
					styleSheet={{
						display: 'inline',
						padding: '2px',
						borderRadius: '4px',
						color: theme.colors.neutral.x000,
						backgroundColor: theme.colors.neutral.x800,
						hover: {
							color: theme.colors.primary.x900,
							backgroundColor: theme.colors.primary.x200,
						},
					}}
				>
					{title}
				</Text>
			</Link>
			<Text variant='body3' styleSheet={{ marginBottom: '20px' }}>
				{excerpt}
			</Text>
			{image && (
				<ButtonBase href={url} styleSheet={{ hover: { opacity: 0.8 } }}>
					<Image
						src={image}
						alt={title}
						styleSheet={{ width: '100%', marginBottom: '24px', borderRadius: '12px' }}
					/>
				</ButtonBase>
			)}
			<Box styleSheet={{ flexDirection: 'row', gap: '4px' }}>
				{tags.map((tag) => (
					<Link
						key={tag}
						href={`/tags/${tag}`}
						variant='body4'
						styleSheet={{
							borderRadius: '1000px',
							padding: '6px 8px',
							color: theme.colors.neutral.x800,
							backgroundColor: theme.colors.neutral.x200,
							hover: {
								color: theme.colors.primary.x900,
								backgroundColor: theme.colors.primary.x200,
							},
						}}
						colorVariantEnabled={false}
					>
						#{tag}
					</Link>
				))}
			</Box>
			<HorizontalRule />
		</Box>
	)
}
