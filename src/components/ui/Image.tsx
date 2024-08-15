import BaseComponent from '@/theme/BaseComponent'
import { StyleSheet } from '@skynexui/responsive_stylesheet'

type ImageProps = {
	src: string
	alt: string
	styleSheet?: StyleSheet
}

export default function Image({ src, alt, styleSheet }: ImageProps) {
	return <BaseComponent as='img' src={src} alt={alt} styleSheet={styleSheet} />
}
