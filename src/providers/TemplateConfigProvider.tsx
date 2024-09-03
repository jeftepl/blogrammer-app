'use client'

import templateConfig from '@/actions/template'
import { TemplateConfigContext } from '@/app/context/TemplateConfigContext'
import { TemplateConfig } from '@/types/Template'
import { useEffect, useState } from 'react'

type TemplateConfigProviderProps = {
	children: React.ReactNode
}

export default function TemplateConfigProvider({ children }: TemplateConfigProviderProps) {
	const [value, setValue] = useState<TemplateConfig>({})

	useEffect(() => {
		const data = async () => {
			const template = await templateConfig()
			setValue(template)
		}
		data()
	}, [])

	return <TemplateConfigContext.Provider value={value}>{children}</TemplateConfigContext.Provider>
}
