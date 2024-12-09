import { Breakpoints, StyleSheet as ResponsiveStyleSheet } from '@skynexui/responsive_stylesheet'

type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>

export interface StyleSheet extends ResponsiveStyleSheet {
	// Layout
	display?: ResponsiveProperty<string> | string
	position?: ResponsiveProperty<string> | string
	top?: ResponsiveProperty<string | number> | string | number
	right?: ResponsiveProperty<string | number> | string | number
	bottom?: ResponsiveProperty<string | number> | string | number
	left?: ResponsiveProperty<string | number> | string | number
	float?: ResponsiveProperty<string> | string
	clear?: ResponsiveProperty<string> | string
	zIndex?: ResponsiveProperty<number> | number

	// Sizing
	maxWidth?: ResponsiveProperty<string | number> | string | number
	maxHeight?: ResponsiveProperty<string | number> | string | number

	// Flexbox/Grid
	flexWrap?: ResponsiveProperty<string> | string
	flexFlow?: ResponsiveProperty<string> | string
	alignContent?: ResponsiveProperty<string> | string
	order?: ResponsiveProperty<number> | number
	flexGrow?: ResponsiveProperty<number> | number
	flexShrink?: ResponsiveProperty<number> | number
	flexBasis?: ResponsiveProperty<string | number> | string | number
	alignSelf?: ResponsiveProperty<string> | string

	// Box Model
	margin?: ResponsiveProperty<string | number> | string | number
	marginTop?: ResponsiveProperty<string | number> | string | number
	marginRight?: ResponsiveProperty<string | number> | string | number
	marginBottom?: ResponsiveProperty<string | number> | string | number
	marginLeft?: ResponsiveProperty<string | number> | string | number
	marginVertical?: ResponsiveProperty<string | number> | string | number
	marginHorizontal?: ResponsiveProperty<string | number> | string | number
	padding?: ResponsiveProperty<string | number> | string | number
	paddingTop?: ResponsiveProperty<string | number> | string | number
	paddingRight?: ResponsiveProperty<string | number> | string | number
	paddingBottom?: ResponsiveProperty<string | number> | string | number
	paddingLeft?: ResponsiveProperty<string | number> | string | number

	// Typography
	fontFamily?: ResponsiveProperty<string> | string
	fontSize?: ResponsiveProperty<string | number> | string | number
	fontWeight?: ResponsiveProperty<string | number> | string | number
	lineHeight?: ResponsiveProperty<string | number> | string | number
	letterSpacing?: ResponsiveProperty<string | number> | string | number
	textAlign?: ResponsiveProperty<string> | string
	textDecoration?: ResponsiveProperty<string> | string
	textTransform?: ResponsiveProperty<string> | string

	// Visual
	background?: ResponsiveProperty<string> | string
	backgroundImage?: ResponsiveProperty<string> | string
	border?: ResponsiveProperty<string> | string
	borderRadius?: ResponsiveProperty<string | number> | string | number
	opacity?: ResponsiveProperty<number> | number
	resize?: ResponsiveProperty<string> | string
	outline?: ResponsiveProperty<string> | string

	// Effects
	boxShadow?: ResponsiveProperty<string> | string
	transform?: ResponsiveProperty<string> | string
	transition?: ResponsiveProperty<string> | string

	// Interactive
	cursor?: ResponsiveProperty<string> | string
	pointerEvents?: ResponsiveProperty<string> | string
	scrollbarColor?: ResponsiveProperty<string> | string
	scrollbarWidth?: ResponsiveProperty<string> | string

	// SVG-specific
	fill?: ResponsiveProperty<string> | string
	stroke?: ResponsiveProperty<string> | string
	strokeWidth?: ResponsiveProperty<string | number> | string | number
	strokeLinecap?: ResponsiveProperty<string> | string
	strokeLinejoin?: ResponsiveProperty<string> | string
}
