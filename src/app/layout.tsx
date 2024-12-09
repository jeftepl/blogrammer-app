import templateConfig from '@/actions/template'
import StyledComponentsRegistry from '@/lib/registry'
import TemplateConfigProvider from '@/providers/TemplateConfigProvider'
import ThemeProvider from '@/providers/ThemeProvider'
import GlobalStyle from '@/theme/GlobalStyle'
import type { Metadata } from 'next'
import { Cairo, Orbitron } from 'next/font/google'

const orbitron = Orbitron({
	subsets: ['latin'],
	variable: '--font-orbitron',
})

const cairo = Cairo({
	subsets: ['latin'],
	variable: '--font-cairo',
})

export async function generateMetadata(): Promise<Metadata> {
	const template = await templateConfig()

	return {
		title: template.site?.title || 'Blog page - Timeline',
		description: template.site?.description || 'Welcome to the blog feel free to explore our posts',
	}
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body className={`${cairo.className} ${orbitron.variable}`}>
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
