'use server'

import { Post } from '@/types/Post'
import fs from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'

type GetPostsProps = {
	topics?: string[]
	authorId?: string
}

export async function getPosts({ topics, authorId }: GetPostsProps): Promise<Post[]> {
	const PATH_POSTS = path.resolve('.', '_data', 'posts')
	const years = await fs.readdir(PATH_POSTS, { encoding: 'utf-8' })

	const allPosts: Post[] = []

	for (const year of years) {
		const yearPath = path.join(PATH_POSTS, year)
		const postFiles = await fs.readdir(yearPath, { encoding: 'utf-8' })

		for (const postFile of postFiles) {
			if (postFile.endsWith('.md')) {
				const filePath = path.join(yearPath, postFile)
				const postContent = await fs.readFile(filePath, { encoding: 'utf-8' })
				const { data, content } = matter(postContent)

				const post: Post = {
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

export async function getPost(id: string): Promise<Post | null> {
	const PATH_POSTS = path.resolve('.', '_data', 'posts')
	const years = await fs.readdir(PATH_POSTS, { encoding: 'utf-8' })

	let post: Post | null = null

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
