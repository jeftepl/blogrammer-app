/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	outputFileTracingIncludes: {
		'/**': ['./content/**/*'],
	},
}

export default nextConfig
