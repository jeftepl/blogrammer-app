import templateConfig from '@/actions/template'
import StyledComponentsRegistry from '@/lib/registry'
import TemplateConfigProvider from '@/providers/TemplateConfigProvider'
import ThemeProvider from '@/providers/ThemeProvider'
import GlobalStyle from '@/theme/GlobalStyle'
import type { Metadata, ResolvingMetadata } from 'next'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

type Params = {
	params: Record<string, string>
}

export async function generateMetadata(
	{ params }: Params,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const template = await templateConfig()

	return {
		title: template.site?.title || 'Blog page - Timeline',
		description: template.site?.description || 'Welcome to the blog timeline',
	}
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={openSans.className}>
				<StyledComponentsRegistry>
					<TemplateConfigProvider>
						<ThemeProvider>
							<GlobalStyle />
							{children}
						</ThemeProvider>
					</TemplateConfigProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}
