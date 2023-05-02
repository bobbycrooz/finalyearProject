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
import LogoBag from '@images/logo-bag.svg';

interface PropsTypes {
	visibility: boolean;
	// customClass?: string;
	// link?: string; //path
	// onClick?: () => void;
}

const softLoader = ({ visibility }: PropsTypes) => {
if(visibility){
	return (
		<div className={`${visibility && 'active'} modal loader-screen soft-loader  strictFadeIn layer`}>
			<AnimatePresence>
				<motion.div exit={{ opacity: 0 }} className="loader-image ">
					<div className="spinner">
						
					</div>
					<div className="spinner-logo centered ">
							{/* <Image src={LogoBag} alt="" height={70} width={95} /> */}
						</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}else{
	return(
		<></>
	)
}

	
};

export default softLoader;
