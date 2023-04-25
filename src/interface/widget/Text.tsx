import type { NextPage } from 'next';
// import Head from 'next/head';
import Image from 'next/image';
// import Styled from 'styled-components';
// import useRedux from '@hooks/useRedux';
// import SEO from 'src/interface/components/SEO';
import successIcon from '@images/successSmall.png';
// import Logo from '@images/logo1.png';
import Link from 'next/link';
import React from 'react';



const Text = ({ variant, text, customClass, type, caps, link, ...rest }: ButtonProps) => {

	if (link)
		return (
			<Link href={link}>
				<p className={`text-blue ${caps && 'caps'}  ${customClass}`}>{text}</p>
			</Link>
		);

	if (type === 'title')
		return (
			<h1 {...rest} className={` text title ${caps && 'caps'}  ${customClass}`}>
				{text}
			</h1>
		);

		if (type === 'subtitle')
		return (
			<h2 {...rest} className={` text subtitle ${caps && 'caps'} ${customClass}`}>
				{text}
			</h2>
		);

	if (type === 'error')
		return (
			<p {...rest} className={`text-error ${customClass}`}>
				{text}
			</p>
		);

	if (type === 'success')
		return (
			<div className="flex items-center  justify-center">
				<div className="">
					<Image className="" alt="" src={successIcon} height={14} width={14} />
				</div>
				{/*  */}
				<p {...rest} className={`text-success ml-1 ${customClass}`}>
					{text}
				</p>
			</div>
		);

	return (
		<p {...rest} className={`text ${caps && 'caps'} ${customClass}`}>
			{text}
		</p>
	);
};



interface ButtonProps {
	variant?: string;
	text: string | number;
	type?: 'error'| 'success' | 'title' | 'subtitle';
	customClass?: string;
	link?: string; //path
	caps?: boolean;
	onClick?: () => void;
}

export default Text;
