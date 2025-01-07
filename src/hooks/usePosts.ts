import { getPost, getPosts } from '@/actions/posts'
import { Post } from '@/types/Post'
import { serialize } from 'next-mdx-remote/serialize'
import { useEffect, useState } from 'react'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

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
				if (!response) return null

				const serializedContent = await serialize(response.content, {
					mdxOptions: {
						remarkPlugins: [remarkGfm],
						rehypePlugins: [rehypeHighlight],
					},
				})
				setData({ ...response, content: serializedContent })
			} catch (err) {
				console.error(err)
			}
		}
		fetchData()
	}, [id])

	return data
}
