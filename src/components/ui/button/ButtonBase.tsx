import { useTheme } from '@/hooks/useTheme'
import { StyleSheet } from '@/theme/Stylesheet'
import { ThemeTypographyVariants } from '@/types/Theme'
import React from 'react'
import Link from '../Link'
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
	textVariant,
	type = 'button',
	onClick,
	disabled,
}: ButtonBaseProps) {
	const theme = useTheme()

	const textVariantStyle = textVariant ? theme.typography.variants[textVariant] : {}
	const isLink = Boolean(href)
	const Tag = isLink ? 'a' : 'button'

	const commonProps = {
		onClick,
		disabled,
		styleSheet: {
			fontFamily: 'inherit',
			overflow: 'hidden',
			position: 'relative',
			backgroundColor: 'transparent',
			color: 'inherit',
			border: '0',
			outline: '0',
			cursor: 'pointer',
			textDecoration: 'none',
			...textVariantStyle,
			...styleSheet,
		},
	}

	if (isLink) {
		return (
			<Link href={href!} {...commonProps}>
				{children}
				<Ripple />
			</Link>
		)
	}

	const buttonProps = { type }
	return (
		<Text tag={Tag} {...commonProps} {...buttonProps}>
			{children}
			<Ripple />
		</Text>
	)
}
