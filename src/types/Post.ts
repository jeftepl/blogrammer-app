export type Post = {
	metadata: {
		date: string
		url: string
		excerpt: string
		tags: string[]
	}
	image?: string
	slug: string
	title: string
	content: string
}
