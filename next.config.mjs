/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	experimental: {
		outputFileTracingIncludes: {
			'/**': ['./content/**/*'],
		},
	},
}

export default nextConfig
