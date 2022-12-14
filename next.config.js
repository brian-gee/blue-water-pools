/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
			{ protocol: 'https', hostname: 'tailwindui.com' },
		],
	},
};
