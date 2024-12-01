'use client'

import { useTheme } from '@/hooks/useTheme'
import { StyleSheet } from '@/theme/Stylesheet'
import { ThemeColorVariant, ThemeTypographyVariants } from '@/types/Theme'
import NextLink from 'next/link'
import React from 'react'
import Text from './Text'

type LinkProps = {
	href: string
	children: React.ReactNode
	styleSheet?: StyleSheet
	variant?: ThemeTypographyVariants
	colorVariant?: ThemeColorVariant
	colorVariantEnabled?: boolean
}

const Link = React.forwardRef<HTMLDivElement, LinkProps>(
	(
		{
			href,
			children,
			variant,
			colorVariant = 'primary',
			styleSheet,
			colorVariantEnabled = true,
		}: LinkProps,
		ref,
	) => {
		const theme = useTheme()

		const isExternalLink = href.startsWith('http')
		const tag: 'a' = 'a'
		const currentColorSet = {
			color: theme.colors[colorVariant].x500,
			hover: {
				color: theme.colors[colorVariant].x400,
			},
			focus: {
				color: theme.colors[colorVariant].x600,
			},
		}

		const linkProps = {
			variant,
			tag,
			ref,
			href,
			children,
			styleSheet: {
				textDecoration: 'none',
				...(colorVariantEnabled && {
					...currentColorSet,
				}),
				...styleSheet,
			},
		}

		if (isExternalLink) {
			return <Text {...{ ...linkProps, target: '_blank' }}>{children}</Text>
		}

		return (
			<NextLink href={href} passHref legacyBehavior scroll={false}>
				<Text {...linkProps}>{children}</Text>
			</NextLink>
		)
	},
)

Link.displayName = 'Link'
export default Link
