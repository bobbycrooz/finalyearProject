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

const DashboardLayout = ({ children }: { children?: ReactElement }) => {
	const [val, setVal] = React.useState(1);

	return (
		<div className="bg-admin w-screen relative">
			{/* <SEO title="home" /> */}
			<TopNav
				searchSetter={function (value: React.SetStateAction<never[]>): void {
					throw new Error('Function not implemented.');
				}}
			/>

			<div className="mt-20">{children}</div>

			<div className="space w-full h-[100px]"></div>

			<BottomNav />
			{/* <Modal visibility={true}/> */}
		</div>
	);
};

interface AppProps {
	name: string;
}

export default DashboardLayout;
