import { getPost, getPosts } from '@/actions/posts'
import { Post } from '@/types/Post'
import { useEffect, useState } from 'react'

type UsePostsProps = {
	topics?: string[]
	authorId?: string
}

export default function usePosts({ topics, authorId }: UsePostsProps) {
	const [data, setData] = useState<Post[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getPosts({ topics, authorId })
				setData(response)
			} catch (err) {
				console.error(err)
			}
		}
		fetchData()
	}, [topics, authorId])

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
