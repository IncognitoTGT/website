/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "github.com",
				pathname: "**",
			},
		],
	},
};

export default nextConfig;
