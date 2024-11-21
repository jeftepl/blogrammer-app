'use client'

import AuthorLink from '@/components/ui/AuthorLink'
import Box from '@/components/ui/Box'
import Feed from '@/components/ui/feed/Feed'
import FeedPosts from '@/components/ui/feed/FeedPosts'
import Header from '@/components/ui/Header'
import HorizontalRule from '@/components/ui/HorizontalRule'
import Link from '@/components/ui/Link'
import Tag from '@/components/ui/Tag'
import Text from '@/components/ui/Text'
import { useAuthors } from '@/hooks/useAuthor'
import { useTheme } from '@/hooks/useTheme'

export default function HomePage() {
	const theme = useTheme()
	const authors = useAuthors()

	const mockedTags = [
		'javascript',
		'typescript',
		'reactjs',
		'nodejs',
		'nextjs',
		'webdev',
		'frontend',
		'backend',
		'fullstack',
		'graphql',
		'apollo',
		'prisma',
		'mongodb',
		'postgresql',
		'mysql',
		'docker',
		'kubernetes',
		'aws',
		'azure',
		'gcp',
	]

	return (
		<>
			<Header />
			<Box
				tag='main'
				styleSheet={{
					backgroundColor: theme.colors.neutral.x050,
					flex: 1,
					alignItems: 'center',
					maxWidth: { xs: '100%', sm: '768px', md: '992px', lg: '1280px', xl: '1592px' },
					width: '100%',
					margin: '0 auto',
				}}
			>
				<Box
					styleSheet={{
						flexDirection: 'row',
						gap: '55px',
						width: '100%',
						paddingHorizontal: '20px',
					}}
				>
					<Box
						styleSheet={{
							width: 'calc(29% - 55px)',
							position: 'sticky',
							top: 0,
							height: '100%',
							paddingTop: '110px',
						}}
					>
						<Text variant='heading1' styleSheet={{ lineHeight: 1 }}>
							Last Updates
						</Text>
						<Text variant='heading4'>Dive into programming</Text>
						<Box
							styleSheet={{
								backgroundColor: theme.colors.neutral.x000,
								borderRadius: '8px',
								paddingVertical: '40px',
								paddingHorizontal: '32px',
								marginTop: '75px',
							}}
						>
							<Text variant='heading4'>Topics</Text>
							<Box
								styleSheet={{
									flexDirection: 'row',
									flexWrap: 'wrap',
									gap: '10px',
									marginVertical: 20,
								}}
							>
								{mockedTags.map((tag) => (
									<Tag key={tag} tag={tag} />
								))}
							</Box>
							<Link href='/tags'>See all</Link>
						</Box>
					</Box>
					<Feed>
						<FeedPosts />
					</Feed>
					<Box
						styleSheet={{
							width: 'calc(29% - 55px)',
							gap: '20px',
							overflowY: 'auto',
							position: 'sticky',
							top: 0,
							height: '100%',
							paddingTop: '110px',
						}}
					>
						<Box
							styleSheet={{
								gap: 16,
								backgroundColor: theme.colors.neutral.x000,
								borderRadius: '8px',
								paddingVertical: '40px',
								paddingHorizontal: '32px',
							}}
						>
							<Text variant='heading4'>Authors</Text>
							{authors.map((author) => (
								<AuthorLink key={author.id} {...author} />
							))}
							<Link href='/authors'>See all</Link>
						</Box>
						<Box
							styleSheet={{
								backgroundColor: theme.colors.neutral.x000,
								borderRadius: '8px',
								paddingVertical: '40px',
								paddingHorizontal: '32px',
							}}
						>
							<Box>
								<Box
									styleSheet={{
										flexDirection: 'row',
										justifyContent: 'flex-start',
										flexWrap: 'wrap',
										gap: '20px',
									}}
								>
									<Link styleSheet={{ width: 'calc(50% - 20px)' }} href='/newsletter'>
										Newsletter
									</Link>
									<Link styleSheet={{ width: 'calc(50% - 20px)' }} href='/contact'>
										Contact us
									</Link>
									<Link styleSheet={{ width: 'calc(50% - 20px)' }} href='/tags'>
										Tags
									</Link>
									<Link styleSheet={{ width: 'calc(50% - 20px)' }} href='/authors'>
										Authors
									</Link>
								</Box>
							</Box>
							<HorizontalRule />
							<Text styleSheet={{ marginTop: '16px' }} variant='body3'>
								Blogrammer 2024. All Rights reserved
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	)
}
