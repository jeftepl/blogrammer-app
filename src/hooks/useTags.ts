import { tags } from '@/actions/tags'
import { useEffect, useState } from 'react'

export default function useTags() {
	const [data, setData] = useState<string[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await tags()
				setData(response)
			} catch (err) {
				console.error(err)
			}
		}
		fetchData()
	}, [])

	return data
}
