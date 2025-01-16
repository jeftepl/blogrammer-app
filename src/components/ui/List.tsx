import BaseComponent from '@/theme/BaseComponent'

type ListProps = {
	children: React.ReactNode
	tag?: 'ol' | 'ul'
}

export default function List({ children, tag = 'ul' }: ListProps) {
	return (
		<BaseComponent as={tag} styleSheet={{ paddingLeft: '32px', marginVertical: '8px' }}>
			{children}
		</BaseComponent>
	)
}
