export type Post = {
	metadata: {
		date: string
		url: string
		excerpt: string
		tags: string[]
	}
	slug: string
	title: string
	content: string
}
