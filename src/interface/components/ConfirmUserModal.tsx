
import Button from '@widget/Button';
import Text from '@widget/Text';
import { AnimatePresence, motion } from 'framer-motion';

import React from 'react';

interface PropsTypes {
	visibility: boolean;
	currentUser: string
	// customClass?: string;
	// link?: string; //path
	// onClick?: () => void;
}

const Modal = ({ visibility, currentUser }: PropsTypes) => {

	return (
		<div className={`${visibility && 'active'} modal layer`}>
			<AnimatePresence>
				<motion.div exit={{ opacity: 0 }} className="card-gesture px-4 pb-6 fadeIn ">
					<div className="w-[30%] h-1 bg-[#CCCCCC] rounded mx-auto mt-2"></div>


					<div className="mx-auto mt-6">
						<Text text="You are curerntly logged in as:" customClass="text-center" type="subtitle" />
						<Text text={currentUser} customClass=" text-center text title" />
					</div>

					<Button full link="/home" text="Continue" customClass="mt-8 stritFadeIn" />
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default Modal;
