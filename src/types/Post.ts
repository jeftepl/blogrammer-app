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
	content: string
	published: boolean
}
