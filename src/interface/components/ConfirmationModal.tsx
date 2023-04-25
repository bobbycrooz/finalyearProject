import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import LogoAnimate from '@images/logo-animate.gif';
import Success from '@images/success.png';
import Link from 'next/link';
import Button from '@widget/Button';
import Text from '@widget/Text';
import { AnimatePresence, motion } from 'framer-motion';

interface PropsTypes {
	visibility: boolean;
	// customClass?: string;
	// link?: string; //path
	// onClick?: () => void;
}

const Modal = ({ visibility }: PropsTypes) => {
	return (
		<div className={`${visibility && 'active'} modal layer`}>
			<AnimatePresence>
				<motion.div exit={{ opacity: 0 }} className="card-gesture px-4 pb-6 fadeIn ">
					<div className="w-[30%] h-1 bg-[#CCCCCC] rounded mx-auto mt-2"></div>

					<div className="mx-auto centered mt-[40px]">
						<Image className="br"  alt='' src={Success} height={60} width={60} />
					</div>

					<div className="mx-auto mt-6">
						<Text text=" account created" customClass=" text-center" type="title" />
						<Text text="Verify email" customClass=" text-center" />
					</div>

					<Button full link="/auth/verify-email" text="Now" customClass="mt-8 stritFadeIn" />
					<Button full ghost text="later" customClass="mt-3" />
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default Modal;
