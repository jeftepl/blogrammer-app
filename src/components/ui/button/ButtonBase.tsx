import { StyleSheet } from '@/theme/Stylesheet'
import { ThemeTypographyVariants } from '@/types/Theme'
import React from 'react'
import Text from '../Text'
import Ripple from '../ripple/Ripple'

export type ButtonBaseProps = {
	children: React.ReactNode
	href?: string
	textVariant?: ThemeTypographyVariants
	styleSheet?: StyleSheet
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function ButtonBase({ children, href, styleSheet, onClick }: ButtonBaseProps) {
	const isLink = Boolean(href)
	const Tag = isLink ? 'a' : 'button'

	return (
		<Text
			tag={Tag}
			href={href}
			styleSheet={{
				overflow: 'hidden',
				position: 'relative',
				backgroundColor: 'transparent',
				color: 'inherit',
				border: '0',
				outline: '0',
				cursor: 'pointer',
				textDecoration: 'none',
				...styleSheet,
			}}
			onClick={onClick}
		>
			{children}
			<Ripple />
		</Text>
	)
}
