import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ImageBox = ({ src, type, alt }: ImageProps) => {
	return (
		<div>
			<Image alt={alt || 'an image'} src={src} />
		</div>
	);
};

interface ImageProps {
	alt?: string;
	src: any;
	type?: any;
}
export default ImageBox;
