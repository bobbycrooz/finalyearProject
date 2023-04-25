import type { NextPage } from 'next';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import Logo from '@images/logo1.png';
import Button, { Text, InputField } from '@widget';
import TopNav from '@components/topNav';
import BottomNav from '@components/bottomNav';
import headset from '@images/headset.png';
import React, { ReactElement } from 'react';
import Link from 'next/link';
import cancleBtn from '@images/cart/red-times.svg';
import DashboardLayout from '@layout';

const Template = () => {
	const [val, setVal] = React.useState(1);

	return (
		<div className="bg-admin w-screen h-screen centered relative">
			<SEO title="home" />

			<div className="rounded-lg p-4 shadow-lg text-center space-y-3">
				<Text type="title" text={"Sorry this page can't be viewed on a desktop"} />
				<Text type="title" text={'Please switch to a mobile phone'} />

				<Button link='/home' text='Home' customClass='p-2 px-4 mx-auto'/>
		
			</div>

			{/* <Modal visibility={true}/> */}
		</div>
	);
};



export default Template;
