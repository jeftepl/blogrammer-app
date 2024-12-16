import { ThemeTypographyVariants } from '@/types/Theme'
import { useTheme } from 'styled-components'
import Link from './Link'

type TagProps = {
	tag: string
	currentTags?: string[]
	variant?: ThemeTypographyVariants
}

export default function Tag({ tag, variant, currentTags = [] }: TagProps) {
	const theme = useTheme()

	const getTagUrl = (selectedTag: string, tagList: string[]): string => {
		const isSelected = tagList.includes(selectedTag)

		if (isSelected) {
			const filteredTags = tagList.filter((t) => t !== selectedTag)
			return filteredTags.length ? `/?tags=${filteredTags.join(',')}` : '/'
		}

		return `/?tags=${[selectedTag, ...tagList].join(',')}`
	}

	const isSelected = currentTags.includes(tag)
	const href = getTagUrl(tag, currentTags)

	return (
		<Link
			href={href}
			variant={variant}
			styleSheet={{
				borderRadius: '1000px',
				padding: '6px 8px',
				color: isSelected ? theme.colors.primary.x900 : theme.colors.neutral.x800,
				backgroundColor: isSelected ? theme.colors.primary.x200 : theme.colors.neutral.x200,
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
