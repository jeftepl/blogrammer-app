'use server'

import fs from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'

export async function tags(search?: string): Promise<string[]> {
	const PATH_TAGS = path.resolve('.', '_data', 'tags')
	const tagsFiles = await fs.readdir(PATH_TAGS, { encoding: 'utf-8' })
	const tags: string[] = []

	for (const tagFile of tagsFiles) {
		const tagPath = path.join(PATH_TAGS, tagFile)
		const tagContent = await fs.readFile(tagPath, { encoding: 'utf-8' })
		const { content } = matter(tagContent)

		let lines = content
			.split('\n')
			.filter((line) => line.trim().startsWith('-'))
			.map((line) => line.replace('-', '').trim())

		if (search) {
			lines = lines.filter((line) => line.toLowerCase().includes(search))
		}

		tags.push(...lines)
	}

	return tags
}
