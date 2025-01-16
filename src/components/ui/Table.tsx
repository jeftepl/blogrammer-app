import BaseComponent from '@/theme/BaseComponent'

type TableProps = {
	children: React.ReactNode
}

export function Table({ children }: TableProps) {
	return (
		<BaseComponent as='table' styleSheet={{ display: 'table', overflowX: 'auto' }}>
			{children}
		</BaseComponent>
	)
}

export function TableHeader({ children }: TableProps) {
	return (
		<BaseComponent as='thead' styleSheet={{ display: 'contents', textAlign: 'left' }}>
			{children}
		</BaseComponent>
	)
}
