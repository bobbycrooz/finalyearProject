import type { NextPage } from 'next';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import Logo from '@images/logo1.png';
import Button from '@widget/Button';
import Text from '@widget/Text';
import InputField from '@widget/InputField';
import emailIcon from '@images/emailIcon.svg';

const VerifyEmail: NextPage = () => {

	return (
		<>
			{' '}
			<div className="bg-body  h-screen w-screen relative px-4">
				<SEO title="home" />

				<div className="logo mx-auto centered  mt-20">
					<Image alt='' className="br" src={Logo} height={40} width={120} />
				</div>

				<div
					className={` ${
						true ? 'mt-[25%]' : 'mt-[40%]'
					} "input-field-container space-y-8 w-full transition-all"`}
				>
					<div className="text-container">
						<Text text="Email verification" customClass="text-left" type="title" />
						<Text
							text="We will send you a verification link to confirm you email."
							customClass="text-left mt-1"
						/>
					</div>

					<InputField
						icon={emailIcon}
						label="Email"
						type="email"
						placeholder="eg.bobby@gmail.com"
					/>

					{!true && (
						<Text
							link="/auth"
							text="do this later"
							customClass=" text-right underline capitalize text-sm mt-2 "
						/>
					)}

					{true && (
						<Text
							type="success"
							text="Verification link sent to your email."
							customClass="text-center"
						/>
					)}

					<Text
						text="By providing my phone number, I hereby agree theTerm of ServicesandPrivacy Policy."
						customClass="px-2 text-center"
					/>
				</div>

				{/* <Modal/> */}
			</div>
			<div className="fixed bottom-3 px-4 ml-0 w-full">
				<Button
					// onClick={() => console.log('here')}
					text={true ? 'Verify' : 'Login'}
					customClass=""
					link="success-page"
					full
				/>
			</div>
		</>
	);
};


interface AppProps {
	name: string;
}

export default VerifyEmail;
