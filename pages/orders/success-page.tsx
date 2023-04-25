import type { NextPage } from 'next';
import Image from 'next/image';

import SEO from 'src/interface/components/SEO';

import Button from '@widget/Button';
import Text from '@widget/Text';

import Success from '@images/successBig.svg';

const SuccessPage: NextPage = () => {

	return (
		<div className="bg-body h-screen w-screen relative centered px-4">
			<SEO title="home" />

			<div className=" mx-auto  justify-center flex flex-col item-center">
				<div className="mx-auto ">
					<Image  alt='' src={Success} height={100} width={100} />
				</div>

					<Text text="Your order has been created" customClass=" text-center" type="title" />
					<Text text="Check your email for your order details. and tracking" customClass=" text-center" type="subtitle" />

			</div>

			<div className="w-full fixed bottom-3 px-4">
				<Button full link="/home" text="Shop for more" customClass="" />
			</div>
		</div>
	);
};


interface AppProps {
	name: string;
}

export default SuccessPage;
