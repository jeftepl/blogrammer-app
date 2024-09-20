import { useTemplateConfig } from '@/context/TemplateConfigContext'
import { useTheme } from '@/hooks/useTheme'
import { TemplateConfig } from '@/types/Template'
import Box from '../Box'
import Image from '../Image'
import Link from '../Link'
import Text from '../Text'
import Button from '../button/Button'
import ButtonBase from '../button/ButtonBase'
import Icon from '../icon/Icon'

export default function FeedHeader() {
	const theme = useTheme()
	const templateConfig = useTemplateConfig()

	type SocialNetwork = keyof NonNullable<TemplateConfig['profile']>['socialNetworks']

	const socialNetwork = templateConfig.profile?.socialNetworks

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
					src={templateConfig.profile?.avatar ?? ''}
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
						<Button fullWidth colorVariant='primary' size='xl' href='/newsletter'>
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
						<Button fullWidth colorVariant='primary' size='xs' href='/newsletter'>
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
					{templateConfig.profile?.name}
				</Text>
			</ButtonBase>
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
	)
}
