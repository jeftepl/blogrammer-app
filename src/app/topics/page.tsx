'use client'

import Aside from '@/components/ui/Aside'
import AuthorLink from '@/components/ui/AuthorLink'
import Box from '@/components/ui/Box'
import Button from '@/components/ui/button/Button'
import Card from '@/components/ui/Card'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import Link from '@/components/ui/Link'
import Tag from '@/components/ui/Tag'
import Text from '@/components/ui/Text'
import { useAuthors } from '@/hooks/useAuthor'
import useTags from '@/hooks/useTags'
import { useState } from 'react'

export default function TopicsPage() {
	const [selectedTags, setSelectedTags] = useState<string[]>([])

	const tags = useTags()
	const authors = useAuthors()

	const handleFilter = (tag?: string) => {
		if (!tag) {
			setSelectedTags([])
			return
		}

		if (selectedTags.includes(tag)) {
			setSelectedTags(selectedTags.filter((t) => t !== tag))
		} else {
			setSelectedTags([...selectedTags, tag])
		}
	}
	const link = selectedTags.length > 0 ? `/?tags=${selectedTags.join(',')}` : '/topics'

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
								Topics
							</Text>
							<Box
								styleSheet={{
									flexDirection: 'row',
									flexWrap: 'wrap',
									gap: '10px',
								}}
							>
								{[...tags].map((tag) => (
									<Tag
										key={tag}
										tag={tag}
										isButton={true}
										currentTags={selectedTags}
										onClick={() => handleFilter(tag)}
									/>
								))}
							</Box>
							<Box styleSheet={{ marginHorizontal: 'auto' }}>
								<Box
									styleSheet={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										gap: '10px',
									}}
								>
									<Button href={link}>Filter</Button>
									{selectedTags.length > 0 && (
										<Button variant='ghost' onClick={() => handleFilter()}>
											Clear All
										</Button>
									)}
								</Box>
							</Box>
						</Card>
					</Box>
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
