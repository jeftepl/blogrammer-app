import usePosts from '@/hooks/usePosts'
import Box from '../Box'
import Text from '../Text'
import FeedPost from './FeedPost'

export default function FeedPosts() {
	const posts = usePosts()

	return (
		<Box>
			{posts.map(({ metadata, slug, author, title, image }) => {
				const { id, date, excerpt, tags } = metadata

				return (
					<FeedPost
						key={slug}
						id={id}
						authorId={author}
						title={title}
						excerpt={excerpt}
						date={date}
						tags={tags}
						image={image}
					/>
				)
			})}
		</Box>
	)
}
