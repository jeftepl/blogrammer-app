'use server'

import { TemplateConfig } from '@/types/Template'
import path from 'path'
import readYamlFile from 'read-yaml-file'

export default async function templateConfig() {
	const PATH_TEMPLATE_CONFIG = path.join(process.cwd(), 'src', 'config.yaml')
	const templateConfig = await readYamlFile<TemplateConfig>(PATH_TEMPLATE_CONFIG)

	return templateConfig
}
