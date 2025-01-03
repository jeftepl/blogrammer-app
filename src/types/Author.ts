export type Author = {
	id: string
	name: string
	description: string
	avatar: string
	cover?: string
	socialNetworks: {
		github: string
		youtube: string
		instagram: string
		linkedin: string
	}
}
