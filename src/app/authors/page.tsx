'use client'

import Aside from '@/components/ui/Aside'
import AuthorLink from '@/components/ui/AuthorLink'
import Box from '@/components/ui/Box'
import Card from '@/components/ui/Card'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import Link from '@/components/ui/Link'
import Tag from '@/components/ui/Tag'
import Text from '@/components/ui/Text'
import { useAuthors } from '@/hooks/useAuthor'
import useTags from '@/hooks/useTags'

export default function AuthorsPage() {
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
						paddingBottom: '40px',
					}}
				>
					<Box
						styleSheet={{
							marginTop: '110px',
							width: { xl: '71%', xs: '100%' },
						}}
					>
						<Card>
							<Text tag='h2' variant='heading1'>
								Authors
							</Text>
							<Box
								styleSheet={{
									flexDirection: 'column',
									flexWrap: 'wrap',
									gap: '10px',
								}}
							>
								{authors.map((author) => (
									<Box key={author.id} styleSheet={{ marginBottom: '10px' }}>
										<AuthorLink author={author} description={author.description} />
									</Box>
								))}
							</Box>
						</Card>
					</Box>
					<Aside styleSheet={{ display: { xl: 'block', xs: 'none' } }}>
						<Card>
							<Text variant='heading4'>Topics</Text>
							<Box
								styleSheet={{
									flexDirection: 'row',
									flexWrap: 'wrap',
									gap: '10px',
								}}
							>
								{[...tags]
									.sort(() => Math.random() - 0.5)
									.slice(0, 20)
									.map((tag) => (
										<Tag key={tag} tag={tag} />
									))}
							</Box>
							<Link href='/topics'>See all</Link>
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
