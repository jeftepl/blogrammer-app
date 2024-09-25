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
	type?: 'button' | 'submit' | 'reset'
	onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
	disabled?: boolean
}

export default function ButtonBase({
	children,
	href,
	styleSheet,
	type = 'button',
	onClick,
	disabled,
}: ButtonBaseProps) {
	const isLink = Boolean(href)
	const Tag = isLink ? 'a' : 'button'

	const commonProps = {
		href,
		onClick,
		disabled,
		styleSheet: {
			overflow: 'hidden',
			position: 'relative',
			backgroundColor: 'transparent',
			color: 'inherit',
			border: '0',
			outline: '0',
			cursor: 'pointer',
			textDecoration: 'none',
			...styleSheet,
		},
	}

	const buttonProps = isLink ? {} : { type }

	return (
		<Text tag={Tag} {...commonProps} {...buttonProps}>
			{children}
			<Ripple />
		</Text>
	)
}
