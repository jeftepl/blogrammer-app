export type TemplateConfig = {
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
