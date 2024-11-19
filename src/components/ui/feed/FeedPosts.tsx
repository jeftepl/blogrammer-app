import usePosts from '@/hooks/usePosts'
import Box from '../Box'
import Text from '../Text'
import FeedPost from './FeedPost'

export default function FeedPosts() {
	const posts = usePosts()

	return (
		<Box>
			{posts.map(({ metadata, slug, author, title, image }) => {
				const { date, excerpt, tags, url } = metadata

				return (
					<FeedPost
						key={slug}
						authorId={author}
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
