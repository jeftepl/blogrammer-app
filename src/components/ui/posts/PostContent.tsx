import { Table, TableHeader } from '@/components/ui/Table'
import Text from '@/components/ui/Text'
import { useTheme } from '@/hooks/useTheme'
import BaseComponent from '@/theme/BaseComponent'
import 'highlight.js/styles/github-dark.css'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import HorizontalRule from '../HorizontalRule'
import Link from '../Link'
import List from '../List'

export default function PostContent({ content }: { content: MDXRemoteSerializeResult }) {
	const theme = useTheme()

	return (
		<MDXRemote
			{...content}
			components={{
				h1: ({ children }) => (
					<Text tag='h1' variant='heading1' styleSheet={{ marginTop: '16px', marginBottom: '8x' }}>
						{children}
					</Text>
				),
				h2: ({ children }) => (
					<Text tag='h2' variant='heading2' styleSheet={{ marginTop: '16px', marginBottom: '8px' }}>
						{children}
					</Text>
				),
				h3: ({ children }) => (
					<Text tag='h3' variant='heading3' styleSheet={{ marginTop: '16px', marginBottom: '8px' }}>
						{children}
					</Text>
				),
				h4: ({ children }) => (
					<Text tag='h4' variant='heading4' styleSheet={{ marginTop: '16px', marginBottom: '8px' }}>
						{children}
					</Text>
				),
				h5: ({ children }) => (
					<Text tag='h5' variant='heading5' styleSheet={{ marginTop: '16px', marginBottom: '8px' }}>
						{children}
					</Text>
				),
				p: ({ children }) => <Text variant='body2'>{children}</Text>,
				ul: ({ children }) => <List tag='ul'>{children}</List>,
				ol: ({ children }) => <List tag='ol'>{children}</List>,
				table: ({ children }) => <Table>{children}</Table>,
				thead: ({ children }) => <TableHeader>{children}</TableHeader>,
				hr: () => <HorizontalRule />,
				a: ({ children, href }) => (
					<Link href={href ?? ''} styleSheet={{ display: 'inline-block' }}>
						{children}
					</Link>
				),
				code: ({ children }) => (
					<BaseComponent
						as='code'
						styleSheet={{
							display: 'block',
							padding: '16px',
							marginVertical: '8px',
							borderRadius: '8px',
							backgroundColor: theme.colors.neutral.x999,
							color: theme.colors.neutral.x000,
							overflow: 'auto',
						}}
					>
						{children}
					</BaseComponent>
				),
			}}
		/>
	)
}
