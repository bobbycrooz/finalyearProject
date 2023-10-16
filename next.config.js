/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,

	images: {
		domains: [
			'images.unsplash.com',
			'media.istockphoto.com',
			'cdn.filestackcontent.com',
			'ng.jumia.is',
			'www.oraimo.com',
			'www.jumia.com.ng'
		]
	}
};

module.exports = nextConfig;
