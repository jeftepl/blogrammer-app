import { getPost, getPosts } from '@/actions/posts'
import { Post } from '@/types/Post'
import { useEffect, useState } from 'react'

type UsePostsProps = {
	topics?: string[]
	authorId?: string
	search?: string
}

export default function usePosts({ topics, authorId, search }: UsePostsProps) {
	const [data, setData] = useState<Post[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getPosts({ topics, authorId, search: search?.toLowerCase() })
				setData(response)
			} catch (err) {
				console.error(err)
			}
		}
		fetchData()
	}, [topics, authorId, search])

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
