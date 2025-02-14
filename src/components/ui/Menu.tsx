import { useAuthors } from '@/hooks/useAuthor'
import useTags from '@/hooks/useTags'
import { useTheme } from '@/hooks/useTheme'
import AuthorLink from './AuthorLink'
import Box from './Box'
import HorizontalRule from './HorizontalRule'
import Link from './Link'
import Tag from './Tag'
import Text from './Text'

export default function Menu() {
	const theme = useTheme()
	const tags = useTags()
	const authors = useAuthors()

	return (
		<>
			<Box
				styleSheet={{
					width: '100%',
					height: { xs: 'calc(100vh - 68px)', xl: 'calc(100vh - 111px)' },
					position: 'absolute',
					left: 0,
					right: 0,
					top: { xs: '68px', xl: '111px' },
					bottom: 0,
					zIndex: 999,
					flexDirection: 'row',
					justifyContent: 'space-between',
					backgroundColor: theme.colors.neutral.x999,
					opacity: 0.5,
				}}
			/>
			<Box
				styleSheet={{
					position: 'absolute',
					zIndex: 1000,
					left: 0,
					top: { xs: '68px', xl: '111px' },
					bottom: 0,
					height: { xs: 'calc(100vh - 68px)', xl: 'calc(100vh - 111px)' },
					maxWidth: '330px',
					width: '100%',
					backgroundColor: theme.colors.neutral.x050,
					padding: 20,
					overflowY: 'auto',
				}}
			>
				<Box styleSheet={{ flex: 1 }}>
					<Link href='/'>
						<Text variant='heading4' styleSheet={{ color: theme.colors.neutral.x999 }}>
							Home
						</Text>
					</Link>
					<HorizontalRule />
					<Text variant='heading4'>Topics</Text>
					<Box
						styleSheet={{
							flexDirection: 'row',
							flexWrap: 'wrap',
							gap: '10px',
							marginVertical: 10,
						}}
					>
						{[...tags].slice(0, 7).map((tag) => (
							<Tag key={tag} tag={tag} />
						))}
					</Box>
					<Link href='/topics'>See more</Link>
					<HorizontalRule />
					<Text variant='heading4'>Authors</Text>
					<Box
						styleSheet={{
							gap: '10px',
							width: 'min-content',
							marginVertical: 10,
						}}
					>
						{authors.map((author) => (
							<AuthorLink key={author.id} author={author} />
						))}
					</Box>
					<Link href='/authors'>See all</Link>
					<HorizontalRule />
					<Link href='/newsletter'>
						<Text variant='heading4' styleSheet={{ color: theme.colors.neutral.x999 }}>
							Newsletter
						</Text>
					</Link>
					<HorizontalRule />
					<Link href='/contact'>
						<Text variant='heading4' styleSheet={{ color: theme.colors.neutral.x999 }}>
							Contact
						</Text>
					</Link>
				</Box>
				<Text variant='body3' styleSheet={{ marginTop: 40 }}>
					Blogrammer 2024. All Rights reserved
				</Text>
			</Box>
		</>
	)
}
