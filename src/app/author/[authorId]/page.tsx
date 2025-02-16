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
import { useEffect, useState } from 'react'

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
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		if (window.innerWidth < 768) {
			setIsMobile(true)
		}
	}, [tagsParams])

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
						flexDirection: { xs: 'column', xl: 'row' },
						gap: { xs: '20px', md: '55px' },
						width: '100%',
						paddingHorizontal: '20px',
						paddingBottom: '40px',
					}}
				>
					<Aside
						styleSheet={{ order: { xs: '2', xl: '0' }, marginBottom: { xs: '-64px', xl: '0' } }}
					>
						<Card>
							<Text variant='heading4'>Topics</Text>
							<Box
								styleSheet={{
									flexDirection: 'row',
									flexWrap: 'wrap',
									gap: '10px',
								}}
							>
								{[...tags].slice(0, isMobile ? 10 : 20).map((tag) => (
									<Tag key={tag} tag={tag} currentTags={tagsParams} params={authorId} />
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
						<PostListing variant='feed' topics={tagsParams} authorId={authorId} params={authorId} />
					</Feed>
					<Aside styleSheet={{ order: { xs: '1', xl: '0' }, marginTop: { xs: '84px', xl: '0' } }}>
						<Card>
							<FeedHeader authorId={authorId} />
						</Card>
						<Card styleSheet={{ display: { xs: 'none', xl: 'flex' } }}>
							<Footer />
						</Card>
					</Aside>
				</Box>
			</Box>
		</>
	)
}
