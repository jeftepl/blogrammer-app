import { parseStyleSheet } from '@skynexui/responsive_stylesheet'
import React from 'react'
import styled from 'styled-components'
import { StyleSheet } from './Stylesheet'

const StyledBaseComponent = styled.div.withConfig({
	shouldForwardProp: (prop) => prop !== 'styleSheet',
})<StyleSheet>`
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	${({ styleSheet }) => parseStyleSheet(styleSheet)}
`

type BasecomponentProps<T extends keyof JSX.IntrinsicElements = 'div'> = {
	as?: T
	styleSheet?: StyleSheet
} & React.ComponentPropsWithoutRef<T>

const BaseComponent = React.forwardRef(
	<T extends keyof JSX.IntrinsicElements = 'div'>(
		{ styleSheet = {}, ...props }: BasecomponentProps<T>,
		ref: React.LegacyRef<React.ElementRef<T>>,
	) => <StyledBaseComponent styleSheet={styleSheet} {...props} ref={ref} />,
)

BaseComponent.displayName = 'BaseComponent'
export default BaseComponent
