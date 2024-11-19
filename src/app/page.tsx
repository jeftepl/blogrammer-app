'use client'

import Box from '@/components/ui/Box'
import Feed from '@/components/ui/feed/Feed'
import FeedPosts from '@/components/ui/feed/FeedPosts'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import Text from '@/components/ui/Text'
import { useTheme } from '@/hooks/useTheme'

export default function HomePage() {
	const theme = useTheme()

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
					margin: '0 auto',
					paddingTop: '110px',
				}}
			>
				<Box styleSheet={{ flexDirection: 'row', width: '100%', paddingHorizontal: '20px' }}>
					<Box styleSheet={{ width: '29%' }}>
						<Text variant='heading2' styleSheet={{ lineHeight: 1 }}>
							Last Updates
						</Text>
						<Text variant='heading4'>Dive into programming</Text>
						<Box>
							<Text>Tags</Text>
							<Text>javascript</Text>
							<Text>typescript</Text>
							<Text>reactjs</Text>
							<Text>nodejs</Text>
							<Text>nextjs</Text>
						</Box>
					</Box>
					<Feed>
						<FeedPosts />
					</Feed>
					<Box styleSheet={{ width: '29%', alignItems: 'flex-end' }}>
						<Text>Authors</Text>
						<Box>
							<Text>John Doe</Text>
							<Text>Jane Smith</Text>
							<Text>John Doe</Text>
							<Text>Jane Smith</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Footer />
		</>
	)
}
