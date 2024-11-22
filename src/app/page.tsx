'use client'

import Aside from '@/components/ui/Aside'
import AuthorLink from '@/components/ui/AuthorLink'
import Box from '@/components/ui/Box'
import Card from '@/components/ui/Card'
import Feed from '@/components/ui/feed/Feed'
import FeedPosts from '@/components/ui/feed/FeedPosts'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
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
					<Aside>
						<Box styleSheet={{ marginBottom: 50 }}>
							<Text variant='heading1' styleSheet={{ lineHeight: 1 }}>
								Last Updates
							</Text>
							<Text variant='heading4'>Dive into programming</Text>
						</Box>
						<Card>
							<Text variant='heading4'>Topics</Text>
							<Box
								styleSheet={{
									flexDirection: 'row',
									flexWrap: 'wrap',
									gap: '10px',
								}}
							>
								{mockedTags.map((tag) => (
									<Tag key={tag} tag={tag} />
								))}
							</Box>
							<Link href='/tags'>See all</Link>
						</Card>
					</Aside>
					<Feed>
						<FeedPosts />
					</Feed>
					<Aside>
						<Card>
							<Text variant='heading4'>Authors</Text>
							{authors.map((author) => (
								<AuthorLink key={author.id} {...author} />
							))}
							<Link href='/authors'>See all</Link>
						</Card>
						<Card>
							<Footer />
						</Card>
					</Aside>
				</Box>
			</Box>
		</>
	)
}
