import { tags } from '@/actions/tags'
import { useEffect, useState } from 'react'

export default function useTags(search?: string) {
	const [data, setData] = useState<string[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await tags(search?.toLowerCase())
				setData(response)
			} catch (err) {
				console.error(err)
			}
		}
		fetchData()
	}, [search])

	return data
}
