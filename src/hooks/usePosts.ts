import { getPost, getAllPosts } from '@/actions/posts'
import { Post } from '@/types/Post'
import { useEffect, useState } from 'react'

export default function usePosts() {
	const [data, setData] = useState<Post[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getAllPosts()
				setData(response)
			} catch (err) {
				console.error(err)
			}
		}
		fetchData()
	}, [])

	return data
}

export function usePost(id: string) {
	const [data, setData] = useState<Post | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getPost(id)
				setData(response)
			} catch (err) {
				console.error(err)
			}
		}
		fetchData()
	}, [id])

	return data
}
