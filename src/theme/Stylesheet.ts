import { Breakpoints, StyleSheet as ResponsiveStyleSheet } from '@skynexui/responsive_stylesheet'

type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>

export interface StyleSheet extends ResponsiveStyleSheet {
	// Layout
	display?: ResponsiveProperty<string> | string
	position?: ResponsiveProperty<string> | string
	overflow?: ResponsiveProperty<string> | string
	alignSelf?: ResponsiveProperty<string> | string
	margin?: ResponsiveProperty<string> | string
	marginTop?: ResponsiveProperty<string> | string
	marginBottom?: ResponsiveProperty<string> | string
	marginLeft?: ResponsiveProperty<string> | string
	marginRight?: ResponsiveProperty<string> | string
	padding?: ResponsiveProperty<string> | string
	paddingVertical?: ResponsiveProperty<string> | string
	paddingHorizontal?: ResponsiveProperty<string> | string
	paddingTop?: ResponsiveProperty<string> | string
	paddingBottom?: ResponsiveProperty<string> | string
	paddingLeft?: ResponsiveProperty<string> | string
	paddingRight?: ResponsiveProperty<string> | string
	gap?: ResponsiveProperty<string> | string

	// Sizing
	maxWidth?: ResponsiveProperty<string> | string
	minWidth?: ResponsiveProperty<string> | string
	maxHeight?: ResponsiveProperty<string> | string
	minHeight?: ResponsiveProperty<string> | string

	// Positioning
	top?: ResponsiveProperty<string | number> | string | number
	bottom?: ResponsiveProperty<string | number> | string | number
	left?: ResponsiveProperty<string | number> | string | number
	right?: ResponsiveProperty<string | number> | string | number

	// Borders
	border?: ResponsiveProperty<string> | string
	borderTop?: ResponsiveProperty<string> | string
	borderBottom?: ResponsiveProperty<string> | string
	borderLeft?: ResponsiveProperty<string> | string
	borderRight?: ResponsiveProperty<string> | string
	borderRadius?: ResponsiveProperty<string> | string

	// Background
	backgroundImage?: ResponsiveProperty<string> | string
	backgroundPosition?: ResponsiveProperty<string> | string
	backgroundSize?: ResponsiveProperty<string> | string

	// Text
	textAlign?: ResponsiveProperty<string> | string
	textDecoration?: ResponsiveProperty<string> | string
	fontWeight?: ResponsiveProperty<string> | string

	//Behavior
	cursor?: ResponsiveProperty<string> | string
	transform?: ResponsiveProperty<string> | string

	// Miscellaneous
	viewBox?: string
	xmlns?: string
}
