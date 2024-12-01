'use client'

import Box from '@/components/ui/Box'
import Card from '@/components/ui/Card'
import Header from '@/components/ui/Header'
import Tag from '@/components/ui/Tag'
import Text from '@/components/ui/Text'
import useTags from '@/hooks/useTags'

export default function TopicsPage() {
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
						marginTop: '110px',
						paddingHorizontal: '20px',
						width: '100%',
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
								<Tag key={tag} tag={tag} />
							))}
						</Box>
					</Card>
				</Box>
			</Box>
		</>
	)
}
