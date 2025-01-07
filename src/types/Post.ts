import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type Post = {
	metadata: {
		id: string
		date: string
		excerpt: string
		tags: string[]
	}
	author: string
	image?: string
	slug: string
	title: string
	content: MDXRemoteSerializeResult
	published: boolean
}
