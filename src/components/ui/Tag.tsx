import { ThemeTypographyVariants } from '@/types/Theme'
import { useTheme } from 'styled-components'
import Link from './Link'

type TagProps = {
	tag: string
	variant?: ThemeTypographyVariants
}

export default function Tag({ tag, variant }: TagProps) {
	const theme = useTheme()

	return (
		<Link
			href={`/tags/${tag}`}
			variant={variant}
			styleSheet={{
				borderRadius: '1000px',
				padding: '6px 8px',
				color: theme.colors.neutral.x800,
				backgroundColor: theme.colors.neutral.x200,
				hover: {
					color: theme.colors.primary.x900,
					backgroundColor: theme.colors.primary.x200,
				},
			}}
			colorVariantEnabled={false}
		>
			#{tag}
		</Link>
	)
}
