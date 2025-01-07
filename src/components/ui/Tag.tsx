import { ThemeTypographyVariants } from '@/types/Theme'
import { useTheme } from 'styled-components'
import Link from './Link'
import ButtonBase from './button/ButtonBase'

type TagProps = {
	tag: string
	currentTags?: string[]
	variant?: ThemeTypographyVariants
	isButton?: boolean
	onClick?: () => void
	params?: string
}

export default function Tag({
	tag,
	variant,
	currentTags = [],
	isButton = false,
	onClick,
	params = '/',
}: TagProps) {
	const theme = useTheme()

	const getTagUrl = (selectedTag: string, tagList: string[]): string => {
		const isSelected = tagList.includes(selectedTag)

		if (isSelected) {
			const filteredTags = tagList.filter((t) => t !== selectedTag)
			return filteredTags.length ? `${params}?tags=${filteredTags.join(',')}` : (params ?? '/')
		}

		return `${params}?tags=${[selectedTag, ...tagList].join(',')}`
	}

	const isSelected = currentTags.includes(tag)
	const href = getTagUrl(tag, currentTags)

	const TagComponent = isButton ? ButtonBase : Link

	return (
		<TagComponent
			{...(isButton ? { href: '' } : { href })}
			variant={variant}
			onClick={onClick}
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
		</TagComponent>
	)
}
