'use server'

import { RawPost } from '@/types/Post'
import fs from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'

type GetPostsProps = {
	topics?: string[]
	authorId?: string
	search?: string
}

export async function getPosts({ topics, authorId, search }: GetPostsProps): Promise<RawPost[]> {
	const PATH_POSTS = path.resolve('.', '_data', 'posts')
	const years = await fs.readdir(PATH_POSTS, { encoding: 'utf-8' })

	const allPosts: RawPost[] = []

	for (const year of years) {
		const yearPath = path.join(PATH_POSTS, year)
		const postFiles = await fs.readdir(yearPath, { encoding: 'utf-8' })

		for (const postFile of postFiles) {
			if (postFile.endsWith('.md')) {
				const filePath = path.join(yearPath, postFile)
				const postContent = await fs.readFile(filePath, { encoding: 'utf-8' })
				const { data, content } = matter(postContent)

				if (
					search &&
					!data.title.toLowerCase().includes(search) &&
					!content.toLowerCase().includes(search)
				) {
					continue
				}

				const post: RawPost = {
					metadata: {
						id: data.id,
						date: new Date(data.date).toISOString(),
						excerpt: data.excerpt,
						tags: data.tags,
					},
					image: data.image || '',
					title: data.title,
					slug: postFile.replace('.md', ''),
					content,
					author: data.author,
					published: data.published,
				}

				if (authorId && post.author !== authorId) {
					continue
				}

				if (topics && topics.length > 0) {
					const hasTopics = topics.every((topic) => post.metadata.tags.includes(topic))
					if (hasTopics) {
						allPosts.push(post)
					}
				} else {
					allPosts.push(post)
				}
			}
		}
	}

	allPosts.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())

	return allPosts
}

type GetRecommendedPostsProps = {
	topics?: string[]
	authorId?: string
}

export async function getRecommendedPosts({
	topics,
	authorId,
}: GetRecommendedPostsProps): Promise<RawPost[]> {
	const PATH_POSTS = path.resolve('.', '_data', 'posts')
	const years = await fs.readdir(PATH_POSTS, { encoding: 'utf-8' })

	const allPosts: RawPost[] = []

	for (const year of years) {
		const yearPath = path.join(PATH_POSTS, year)
		const postFiles = await fs.readdir(yearPath, { encoding: 'utf-8' })

		for (const postFile of postFiles) {
			if (postFile.endsWith('.md')) {
				const filePath = path.join(yearPath, postFile)
				const postContent = await fs.readFile(filePath, { encoding: 'utf-8' })
				const { data, content } = matter(postContent)

				const post: RawPost = {
					metadata: {
						id: data.id,
						date: new Date(data.date).toISOString(),
						excerpt: data.excerpt,
						tags: data.tags,
					},
					image: data.image || '',
					title: data.title,
					slug: postFile.replace('.md', ''),
					content,
					author: data.author,
					published: data.published,
				}

				allPosts.push(post)
			}
		}
	}

	const postsWithScore = allPosts.map((post) => {
		let score = 0

		if (authorId && post.author === authorId) {
			score += 100
		}

		if (topics && topics.length > 0) {
			const matchingTopics = topics.filter((topic) => post.metadata.tags.includes(topic))
			const matchPercentage = matchingTopics.length / topics.length
			score += matchPercentage * 50
		}

		// TODO: Review days since published score
		const postDate = new Date(post.metadata.date).getTime()
		const now = Date.now()
		const daysSincePublished = (now - postDate) / (1000 * 60 * 60 * 24)
		score += Math.max(0, 20 - daysSincePublished / 30)

		return { post, score }
	})

	return postsWithScore.sort((a, b) => b.score - a.score).map((item) => item.post)
}

export async function getPost(id: string): Promise<RawPost | null> {
	const PATH_POSTS = path.resolve('.', '_data', 'posts')
	const years = await fs.readdir(PATH_POSTS, { encoding: 'utf-8' })

	let post: RawPost | null = null

	for (const year of years) {
		const yearPath = path.join(PATH_POSTS, year)
		const postFiles = await fs.readdir(yearPath, { encoding: 'utf-8' })

		for (const postFile of postFiles) {
			if (postFile === `${id}.md`) {
				const filePath = path.join(yearPath, postFile)
				const postContent = await fs.readFile(filePath, { encoding: 'utf-8' })
				const { data, content } = matter(postContent)

				post = {
					metadata: {
						id: data.id,
						date: new Date(data.date).toISOString(),
						excerpt: data.excerpt,
						tags: data.tags,
					},
					image: data.image || '',
					title: data.title,
					slug: postFile.replace('.md', ''),
					content,
					author: data.author,
					published: data.published,
				}
			}
		}
	}

	return post
}
