'use client'

import Aside from '@/components/ui/Aside'
import Box from '@/components/ui/Box'
import Button from '@/components/ui/button/Button'
import Card from '@/components/ui/Card'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import Link from '@/components/ui/Link'
import Feed from '@/components/ui/posts/Feed'
import FeedHeader from '@/components/ui/posts/FeedHeader'
import PostListing from '@/components/ui/posts/PostListing'
import Tag from '@/components/ui/Tag'
import Text from '@/components/ui/Text'
import useTags from '@/hooks/useTags'

type AuthorPageProps = {
	params: {
		authorId: string
	}
	searchParams: {
		tags?: string
	}
}

export default function AuthorPage({ params, searchParams }: AuthorPageProps) {
	const { authorId } = params
	const tagsParams = searchParams.tags?.split(',')
	const tags = useTags()

	return (
		<>
			<Header />
			<Box
				tag='main'
				styleSheet={{
					flex: 1,
					alignItems: 'center',
					maxWidth: { xs: '100%', sm: '768px', md: '992px', lg: '1280px', xl: '1592px' },
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
					<Aside>
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
						<PostListing variant='feed' />
					</Feed>
					<Aside>
						<Card>
							<FeedHeader authorId={authorId} />
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
