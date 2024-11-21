import { author, authors } from '@/actions/author'
import { Author } from '@/types/Author'
import { useEffect, useState } from 'react'

export function useAuthor(id: string) {
	const [data, setData] = useState<Author | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
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

export function useAuthors() {
	const [data, setData] = useState<Author[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await authors()
				setData(response)
			} catch (err) {
				console.error(err)
			}
		}
		fetchData()
	}, [])

	return data
}
