import { useAuthor } from '@/hooks/useAuthor'
import { useTheme } from '@/hooks/useTheme'
import { Author } from '@/types/Author'
import Box from '../Box'
import Image from '../Image'
import Link from '../Link'
import Text from '../Text'
import Icon from '../icon/Icon'

export default function FeedHeader({ authorId }: { authorId: string }) {
	const theme = useTheme()
	const author = useAuthor(authorId)

	type SocialNetwork = keyof NonNullable<Author['socialNetworks']>
	const socialNetwork = author?.socialNetworks

	return (
		<Box>
			<Box
				styleSheet={{
					gap: '16px',
					paddingBottom: '24px',
					borderBottom: `1px solid ${theme.colors.neutral.x200}`,
					position: 'relative',
				}}
			>
				<Image
					src={author?.avatar ?? ''}
					alt='Profile image'
					styleSheet={{
						width: '130px',
						height: '130px',
						borderRadius: '100%',
					}}
				/>
				<Box styleSheet={{ gap: '8px' }}>
					<Text tag='h1' variant='heading3'>
						{author?.name}
					</Text>
					<Box
						styleSheet={{
							flexDirection: 'row',
							gap: '4px',
						}}
					>
						{socialNetwork &&
							(Object.keys(socialNetwork) as SocialNetwork[]).map((key) => {
								const socialNetworkUrl = socialNetwork[key]
								if (socialNetworkUrl) {
									return (
										<Link key={key} href={socialNetworkUrl}>
											<Icon name={key} />
										</Link>
									)
								}
								return null
							})}
					</Box>
				</Box>
			</Box>
			<Text variant='body2' styleSheet={{ marginTop: '24px' }}>
				{author?.description}
			</Text>
		</Box>
	)
}
