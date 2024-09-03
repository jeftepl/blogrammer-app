import { TemplateConfig } from '@/types/Template'
import { createContext, useContext } from 'react'

export const TemplateConfigContext = createContext<TemplateConfig>({})

export const useTemplateConfig = () => useContext(TemplateConfigContext)
