'use client'

import templateConfig from '@/actions/template'
import Background from '@/components/ui/Background'
import Box from '@/components/ui/Box'
import Feed from '@/components/ui/Feed'
import Footer from '@/components/ui/Footer'
import Menu from '@/components/ui/Menu'
import { useTheme } from '@/hooks/useTheme'

export default function Home() {
	const theme = useTheme()

	const template = templateConfig()

	return (
		<>
			<Box
				tag='main'
				styleSheet={{
					backgroundColor: theme.colors.neutral.x000,
					flex: 1,
					alignItems: 'center',
				}}
			>
				<Background />
				<Menu />
				<Feed>
					<Feed.Header />
				</Feed>
				<Footer />
			</Box>
		</>
	)
}
