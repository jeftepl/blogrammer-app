'use server'

import path from 'path'
import readYamlFile from 'read-yaml-file'

type TemplateConfig = {
	site?: {
		title?: string
		description?: string
	}
	profile?: {
		name?: string
		avatar?: string
		socialNetworks: {
			github?: string
			youtube?: string
			instagram?: string
			linkedin?: string
		}
	}
}

export default async function templateConfig() {
	const PATH_TEMPLATE_CONFIG = path.resolve('.', 'config.yaml')
	const templateConfig = await readYamlFile<TemplateConfig>(PATH_TEMPLATE_CONFIG)

	console.log(templateConfig)

	return templateConfig
}
