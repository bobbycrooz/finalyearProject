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

					<Text text="Email verified successfully" customClass="mt-8 text-center" type="title" />

					<Text
						text="Your email has been verified continue to dashboard"
						customClass=" text-center  px-11 mt-2"
					/>
			</div>

			<div className="w-full fixed bottom-3 px-4">
				<Button full link="/home" text="proceed" customClass="" />
			</div>
		</div>
	);
};


interface AppProps {
	name: string;
}

export default SuccessPage;
