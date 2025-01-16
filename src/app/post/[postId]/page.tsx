'use client'

import Aside from '@/components/ui/Aside'
import AuthorLink from '@/components/ui/AuthorLink'
import Box from '@/components/ui/Box'
import Card from '@/components/ui/Card'
import Header from '@/components/ui/Header'
import Image from '@/components/ui/Image'
import PostContent from '@/components/ui/posts/PostContent'
import PostListing from '@/components/ui/posts/PostListing'
import Text from '@/components/ui/Text'
import { useAuthor } from '@/hooks/useAuthor'
import { usePost } from '@/hooks/usePosts'
import { useParams } from 'next/navigation'

export default function PostPage() {
	const params = useParams<{ postId: string }>()

	const postId = params.postId
	const post = usePost(postId)
	const author = useAuthor(post?.author)

	if (!post) return

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
					<Box styleSheet={{ width: '71%', marginTop: '110px', marginBottom: '32px' }}>
						<Card>
							<Text tag='h1' variant='display1'>
								{post.title}
							</Text>
							<Box
								styleSheet={{
									flexDirection: 'row',
									alignItems: 'center',
									gap: '10px',
									marginBottom: '20px',
								}}
							>
								{author && (
									<AuthorLink
										author={author}
										date={new Date(post.metadata.date).toLocaleDateString()}
									/>
								)}
							</Box>
							{post.image && (
								<Image
									src={post.image}
									alt={post.title}
									styleSheet={{ height: '465px', objectFit: 'cover', borderRadius: '12px' }}
								/>
							)}
							<Box tag='article' styleSheet={{ marginTop: '20px' }}>
								<PostContent content={post.content} />
							</Box>
						</Card>
					</Box>
					<Aside>
						<Card>
							<Text tag='h2' variant='heading4'>
								More posts
							</Text>
							<PostListing variant='recommended' />
						</Card>
					</Aside>
				</Box>
			</Box>
		</>
	)
}
