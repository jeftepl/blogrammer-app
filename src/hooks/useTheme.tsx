import { Theme } from '@/types/Theme'
import { useTheme as useThemeStyled } from 'styled-components'

export function useTheme(): Theme {
	return useThemeStyled() as Theme
}
