'use server'

import { Author } from '@/types/Author'
import fs from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'

export async function author(id: string): Promise<Author | null> {
	const PATH_AUTHORS = path.resolve('.', '_data', 'authors')
	const authorsFiles = await fs.readdir(PATH_AUTHORS, { encoding: 'utf-8' })

	for (const authorFile of authorsFiles) {
		const authorPath = path.join(PATH_AUTHORS, authorFile)
		const authorContent = await fs.readFile(authorPath, { encoding: 'utf-8' })
		const { data, content } = matter(authorContent)

		if (data.id === id) {
			const regex = /^#\s+(.+)$/m
			const titleMatch = content.match(regex)
			const name = titleMatch ? titleMatch[1].trim() : ''
			const description = content.replace(regex, '').trim()

			return { ...data, name, description } as Author
		}
	}

	return null
}

export async function authors(): Promise<Author[]> {
	const PATH_AUTHORS = path.resolve('.', '_data', 'authors')
	const authorsFiles = await fs.readdir(PATH_AUTHORS, { encoding: 'utf-8' })
	const authors = []

	for (const authorFile of authorsFiles) {
		const authorPath = path.join(PATH_AUTHORS, authorFile)
		const authorContent = await fs.readFile(authorPath, { encoding: 'utf-8' })
		const { data, content } = matter(authorContent)

		const regex = /^#\s+(.+)$/m
		const titleMatch = content.match(regex)
		const name = titleMatch ? titleMatch[1].trim() : ''
		const description = content.replace(regex, '').trim()

		authors.push({ ...data, name, description } as Author)
	}

	return authors
}
