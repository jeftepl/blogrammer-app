import { useTheme } from '@/hooks/useTheme'
import { ThemeColorVariant, ThemeTypographyVariants } from '@/types/Theme'
import ButtonBase, { ButtonBaseProps } from './ButtonBase'
import { buttonColorVariant, Variant } from './buttonColorVariant'
import { buttonRounded, buttonSize, ButtonSize, ButtonRounded } from './buttonSize'

type ButtonProps = ButtonBaseProps & {
	fullWidth?: boolean
	colorVariant?: ThemeColorVariant
	variant?: Variant
	textVariant?: ThemeTypographyVariants
	size?: ButtonSize
	rounded?: ButtonRounded
}

export default function Button({
	children,
	fullWidth,
	styleSheet,
	colorVariant = 'primary',
	variant = 'contained',
	size = 'md',
	type = 'button',
	textVariant,
	rounded = 'lg',
	...props
}: ButtonProps) {
	const theme = useTheme()

	const textVariantStyle = textVariant ? theme.typography.variants[textVariant] : {}

	return (
		<ButtonBase
			styleSheet={{
				...buttonColorVariant({ theme, colorVariant, variant }),
				...buttonSize[size],
				...buttonRounded[rounded],
				alignSelf: 'flex-start',
				justifyContent: 'center',
				alignItems: 'center',
				...(fullWidth && { alignSelf: 'initial', width: '100%' }),
				...textVariantStyle,
				...styleSheet,
			}}
			type={type}
			{...props}
		>
			{children}
		</ButtonBase>
	)
}
