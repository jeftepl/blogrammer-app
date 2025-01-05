import { author, authors } from '@/actions/author'
import { Author } from '@/types/Author'
import { useEffect, useState } from 'react'

export function useAuthor(id: string | undefined) {
	const [data, setData] = useState<Author | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (!id) return
				const response = await author(id)
				setData(response)
			} catch (err) {
				console.error(err)
			}
		}
		fetchData()
	}, [id])

	return data
}

export function useAuthors(search?: string) {
	const [data, setData] = useState<Author[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await authors(search?.toLowerCase())
				setData(response)
			} catch (err) {
				console.error(err)
			}
		}
		fetchData()
	}, [search])

	return data
}
