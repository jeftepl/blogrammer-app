export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const buttonSize = {
	xs: {
		paddingVertical: '12px',
		paddingHorizontal: '12px',
	},
	sm: {
		paddingVertical: '8px',
		paddingHorizontal: '12px',
	},
	md: {
		paddingVertical: '8px',
		paddingHorizontal: '16px',
	},
	lg: {
		paddingVertical: '8px',
		paddingHorizontal: '16px',
	},
	xl: {
		paddingVertical: '16px',
		paddingHorizontal: '24px',
	},
}

export type ButtonRounded = 'lg' | 'md' | 'sm'

export const buttonRounded = {
	lg: {
		borderRadius: '999px',
	},
	md: {
		borderRadius: '16px',
	},
	sm: {
		borderRadius: '6px',
	},
}
