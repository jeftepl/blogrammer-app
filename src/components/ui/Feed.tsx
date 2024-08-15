import { useTheme } from '@/hooks/useTheme'
import Box from './Box'
import Image from './Image'
import Text from './Text'
import Button from './button/Button'
import ButtonBase from './button/ButtonBase'

type FeedProps = {
	children: React.ReactNode
}

export default function Feed({ children }: FeedProps) {
	const theme = useTheme()

	return (
		<Box
			styleSheet={{
				backgroundColor: theme.colors.neutral.x000,
				marginTop: '-228px',
				width: '100%',
				maxWidth: '683px',
				borderRadius: '8px',
				paddingVertical: '40px',
				paddingHorizontal: '32px',
			}}
		>
			{children}
		</Box>
	)
}

const FeedHeader = () => {
	const theme = useTheme()

	return (
		<Box
			styleSheet={{
				borderBottom: `1px solid ${theme.colors.neutral.x200}`,
				paddingBottom: '24px',
				marginBottom: '24px',
			}}
		>
			<Box
				styleSheet={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					gap: '16px',
					marginBottom: '16px',
				}}
			>
				<Image
					src='https://github.com/jeftepl.png'
					alt='Imagem de perfil'
					styleSheet={{
						width: { xs: '100px', md: '128px' },
						height: { xs: '100px', md: '128px' },
						borderRadius: '100%',
					}}
				/>
				<Box
					styleSheet={{
						justifyContent: 'space-between',
					}}
				>
					<Box
						styleSheet={{
							flex: 1,
							justifyContent: 'space-between',
							display: { xs: 'none', md: 'flex' },
						}}
					>
						<Button fullWidth colorVariant='primary' size='xl' href='/'>
							Newsletter
						</Button>
						<Button fullWidth colorVariant='neutral' size='xl' href='/'>
							Buy me a coffee
						</Button>
					</Box>
					<Box
						styleSheet={{
							flex: 1,
							justifyContent: 'space-between',
							display: { xs: 'flex', md: 'none' },
						}}
					>
						<Button fullWidth colorVariant='primary' size='xs' href='/'>
							Newsletter
						</Button>
						<Button fullWidth colorVariant='neutral' size='xs' href='/'>
							Buy me a coffee
						</Button>
					</Box>
				</Box>
			</Box>
			<ButtonBase href='https://github.com/jeftepl'>
				<Text tag='h1' variant='heading4'>
					Hello World
				</Text>
			</ButtonBase>
			{/*<Icon name="youtube" size="lg" />
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Icon name="github" />
      <Text>Feed Header</Text> */}
		</Box>
	)
}
Feed.Header = FeedHeader

const FeedPosts = () => {
	return (
		<Box>
			<Text>Feed Posts</Text>
		</Box>
	)
}
Feed.Posts = FeedPosts
