'use server'

import { Author } from '@/types/Author'
import fs from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'

export default async function author(id: string): Promise<Author | null> {
	const PATH_AUTHORS = path.resolve('.', '_data', 'authors')
	const authorsFiles = await fs.readdir(PATH_AUTHORS, { encoding: 'utf-8' })

	for (const authorFile of authorsFiles) {
		const authorPath = path.join(PATH_AUTHORS, authorFile)
		const authorContent = await fs.readFile(authorPath, { encoding: 'utf-8' })
		const { data, content } = matter(authorContent)

		if (data.id === id) {
			const titleMatch = content.match(/^#\s+(.+)$/m)
			const name = titleMatch ? titleMatch[1].trim() : ''
			const authorData = { ...data, name } as Author

			return authorData
		}
	}

	return null
}
