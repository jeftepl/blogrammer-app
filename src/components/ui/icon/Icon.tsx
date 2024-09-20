import BaseComponent from '@/theme/BaseComponent'
import { StyleSheet } from '@/theme/Stylesheet'
import * as icons from './svgs'

const iconSizes = {
	xs: '12px',
	sm: '16px',
	md: '24px',
	lg: '32px',
	xl: '36px',
} as const

type IconProps = {
	name: keyof typeof icons
	styleSheet?: StyleSheet
	size?: keyof typeof iconSizes
}

export default function Icon({ name, styleSheet, size = 'md' }: IconProps) {
	const CurrentIcon = icons[name]
	return (
		<BaseComponent
			as='svg'
			styleSheet={{
				...styleSheet,
				width: iconSizes[size],
				height: iconSizes[size],
				color: 'inherit',
				fill: 'currentColor',
				viewBox: '0 0 25 24',
				xmlns: 'http://www.w3.org/2000/svg',
			}}
		>
			<CurrentIcon />
		</BaseComponent>
	)
}
