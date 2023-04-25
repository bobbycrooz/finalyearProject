/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	// remotePatterns: [
	// 	{
	// 		protocol: 'https',
	// 		hostname: 'unsplash.com',
	// 		port: ''
	// 		// pathname: '/account123/**',
	// 	}
	// ],
	images: {
		domains: [
			'images.unsplash.com',
			'media.istockphoto.com',
			'cdn.filestackcontent.com',
			'ng.jumia.is',
			'www.jumia.com.ng'
		]
	}
};

module.exports = nextConfig;
