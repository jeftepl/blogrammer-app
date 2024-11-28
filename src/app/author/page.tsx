'use client'

import Background from '@/components/ui/Background'
import Box from '@/components/ui/Box'
import Feed from '@/components/ui/feed/Feed'
import FeedHeader from '@/components/ui/feed/FeedHeader'
import FeedPosts from '@/components/ui/feed/FeedPosts'
import Footer from '@/components/ui/Footer'
import { useTheme } from '@/hooks/useTheme'

export default function HomePage() {
	const theme = useTheme()

	return (
		<Box
			tag='main'
			styleSheet={{
				backgroundColor: theme.colors.neutral.x000,
				flex: 1,
				alignItems: 'center',
			}}
		>
			<Background url='https://images.unsplash.com/photo-1518932945647-7a1c969f8be2' />
			<Feed>
				<FeedHeader />
				<FeedPosts />
			</Feed>
			<Footer />
		</Box>
	)
}
