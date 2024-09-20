import usePosts from '@/hooks/usePosts'
import Box from '../Box'
import Text from '../Text'
import FeedPost from './FeedPost'

export default function FeedPosts() {
	const posts = usePosts()

	return (
		<Box>
			<Text variant='heading3' styleSheet={{ marginBottom: '20px' }}>
				Last Updates
			</Text>
			{posts.map(({ metadata, slug, title, image }) => {
				const { date, excerpt, tags, url } = metadata

				return (
					<FeedPost
						key={slug}
						title={title}
						excerpt={excerpt}
						url={url}
						date={date}
						tags={tags}
						image={image}
					/>
				)
			})}
		</Box>
	)
}
