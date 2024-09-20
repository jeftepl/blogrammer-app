import posts from '@/actions/posts'
import { Post } from '@/types/Post'
import { useEffect, useState } from 'react'

export default function usePosts() {
	const [data, setData] = useState<Post[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await posts()
				setData(response)
			} catch (err) {
				console.error(err)
			}
		}
		fetchData()
	}, [])

	return data
}
