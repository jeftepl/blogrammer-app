'use client'

import AuthorLink from '@/components/ui/AuthorLink'
import Box from '@/components/ui/Box'
import FeedPosts from '@/components/ui/feed/FeedPosts'
import Header from '@/components/ui/Header'
import Image from '@/components/ui/Image'
import Text from '@/components/ui/Text'
import { useAuthor } from '@/hooks/useAuthor'
import { usePost } from '@/hooks/usePosts'
import { useTheme } from '@/hooks/useTheme'
import { useParams } from 'next/navigation'

export default function PostPage() {
	const params = useParams<{ postId: string }>()

	const postId = params.postId
	const post = usePost(postId)
	const theme = useTheme()
	const author = useAuthor(post?.author)

	if (!post) return

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
					marginTop: '120px',
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
					<Box styleSheet={{ width: '66%' }}>
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
							{post.content}
						</Box>
					</Box>
					<Box
						tag='aside'
						styleSheet={{
							width: 'calc(33% - 55px)',
							gap: '20px',
							overflowY: 'auto',
							position: 'sticky',
							top: 0,
							height: '100%',
							paddingLeft: '20px',
						}}
					>
						<Text tag='h2' variant='heading4'>
							More posts
						</Text>
						<FeedPosts />
					</Box>
				</Box>
			</Box>
		</>
	)
}
