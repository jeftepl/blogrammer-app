import { Theme, ThemeColorVariant } from '@/types/Theme'

export type Variant = 'ghost' | 'contained' | 'outlined'

type ButtonColorVarintProps = {
	theme: Theme
	colorVariant: ThemeColorVariant
	variant: Variant
}

function createButtonVariant(theme: Theme, colorVariant: ThemeColorVariant) {
	return {
		contained: {
			backgroundColor: theme.colors[colorVariant].x500,
			color: theme.colors.neutral.x000,
			hover: {
				backgroundColor: theme.colors[colorVariant].x400,
			},
			focus: {
				backgroundColor: theme.colors[colorVariant].x600,
			},
		},
		outlined: {
			border: '1px solid',
			backgroundColor: 'transparent',
			color: theme.colors[colorVariant].x500,
			borderColor: theme.colors[colorVariant].x400,
			hover: {
				backgroundColor: theme.colors[colorVariant].x050,
			},
			focus: {
				backgroundColor: theme.colors[colorVariant].x100,
			},
		},
		ghost: {
			backgroundColor: 'transparent',
			color: theme.colors[colorVariant].x500,
			hover: {
				backgroundColor: theme.colors[colorVariant].x050,
			},
			focus: {
				backgroundColor: theme.colors[colorVariant].x100,
			},
		},
	}
}

export function buttonColorVariant({ theme, colorVariant, variant }: ButtonColorVarintProps) {
	const styles = {
		primary: createButtonVariant(theme, 'primary'),
		accent: createButtonVariant(theme, 'accent'),
		positive: createButtonVariant(theme, 'positive'),
		negative: createButtonVariant(theme, 'negative'),
		warning: createButtonVariant(theme, 'warning'),
		neutral: createButtonVariant(theme, 'neutral'),
	}

	return styles[colorVariant][variant]
}
