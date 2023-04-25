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
		<div className="bg-admin w-screen relative">
			<SEO title="home" />

			<TopNav
				searchSetter={function (value: React.SetStateAction<never[]>): void {
					throw new Error('Function not implemented.');
				}}
			/>

			<div className="w-full mt-20 px-2 space-y-3">
				<div className="cart_list_container px-2 shadow-sm">
					<Text text={'this is  template for creating new page.'} />
				</div>

				<div className="coupon_container shadow-sm space-y-2">
					<Text type="title" text={'this is a title'} />
					<Text type="subtitle" text={'this is a subtitle.'} />
					<Text text={'this is a paragraph.'} />
					<Text type="success" text={'this is  success text.'} />
					<Text type="error" text={'this is  an error text.'} />
				</div>

				<div className="checkout_container ">
					<Text type="subtitle" text={'you can use regular tags if you want to nest tag'} />

					<p className="body">
						this is a p tag with a <b>bold</b> and <strong>strong</strong> letter embeded in it
					</p>

					<Button text="checkout" customClass="custom-btn custom-btn-yellow" />
					<Button text="checkout" full customClass=" mt-10" />
				</div>

				<div className="images">
					<Image src={headset} alt="" layout="intrinsic" width={90} height={90} />
				</div>
			</div>

			<div className="space w-full h-[100px]"></div>

			<BottomNav />

			{/* <Modal visibility={true}/> */}
		</div>
	);
};

interface AppProps {
	name: string;
}

Template.getLayout = function getLayout(children: ReactElement) {
	return <DashboardLayout>{children}</DashboardLayout>;
};
export default Template;
