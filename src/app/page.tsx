'use client'

import Aside from '@/components/ui/Aside'
import AuthorLink from '@/components/ui/AuthorLink'
import Box from '@/components/ui/Box'
import Button from '@/components/ui/button/Button'
import Card from '@/components/ui/Card'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import Link from '@/components/ui/Link'
import Feed from '@/components/ui/posts/Feed'
import PostListing from '@/components/ui/posts/PostListing'
import Tag from '@/components/ui/Tag'
import Text from '@/components/ui/Text'
import { useAuthors } from '@/hooks/useAuthor'
import useTags from '@/hooks/useTags'

export default function HomePage({ searchParams }: { searchParams: { tags?: string } }) {
	const tagsParams = searchParams.tags?.split(',')

	const authors = useAuthors()
	const tags = useTags()

	return (
		<>
			<Header />
			<Box
				tag='main'
				styleSheet={{
					flex: 1,
					alignItems: 'center',
					maxWidth: '1592px',
					width: '100%',
					marginHorizontal: 'auto',
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
					<Aside styleSheet={{ display: { xl: 'block', xs: 'none' } }}>
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
								{[...tags].slice(0, 20).map((tag) => (
									<Tag key={tag} tag={tag} currentTags={tagsParams} />
								))}
							</Box>
							<Box
								styleSheet={{
									flexDirection: 'row',
									gap: '10px',
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
							>
								<Link href='/topics'>See all</Link>
								{tagsParams?.length && tagsParams.length > 0 && (
									<Button variant='ghost' href='/'>
										Clear All
									</Button>
								)}
							</Box>
						</Card>
					</Aside>
					<Feed>
						<PostListing variant='feed' topics={tagsParams} />
					</Feed>
					<Aside styleSheet={{ display: { xl: 'block', xs: 'none' } }}>
						<Card>
							<Text variant='heading4'>Authors</Text>
							{authors.map((author) => (
								<AuthorLink key={author.id} author={author} />
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
