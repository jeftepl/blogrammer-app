import { MDXRemoteSerializeResult } from 'next-mdx-remote'

type BasePost = {
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
	published: boolean
}

export type RawPost = BasePost & {
	content: string
}

export type SerializedPost = BasePost & {
	content: MDXRemoteSerializeResult
}

export type Post = SerializedPost
