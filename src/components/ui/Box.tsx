import BaseComponent from '@/theme/BaseComponent'
import { StyleSheet } from '@/theme/Stylesheet'

type BoxProps = {
	tag?: 'header' | 'main' | 'div' | 'article' | 'section' | 'ul' | 'span'
	styleSheet?: StyleSheet
	children?: React.ReactNode
}

export default function Box({ tag, styleSheet, children, ...props }: BoxProps) {
	const Tag = tag || 'div'

	return (
		<BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
			{children}
		</BaseComponent>
	)
}
