import Text from '@/components/ui/Text'
import 'highlight.js/styles/github-dark.css'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

export default function PostContent({ content }: { content: MDXRemoteSerializeResult }) {
	return (
		<MDXRemote
			{...content}
			components={{
				h1: ({ children }) => (
					<Text tag='h1' variant='heading1'>
						{children}
					</Text>
				),
				h2: ({ children }) => (
					<Text tag='h2' variant='heading2'>
						{children}
					</Text>
				),
			}}
		/>
	)
}
