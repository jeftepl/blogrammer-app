export type Post = {
	metadata: {
		date: string
		url: string
		excerpt: string
		tags: string[]
	}
	author: string
	image?: string
	slug: string
	title: string
	content: string
	published: boolean
}
