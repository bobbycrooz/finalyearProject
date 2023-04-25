import Button from '@widget/Button';
import Text from '@widget/Text';
import { AnimatePresence, motion } from 'framer-motion';

import React from 'react';

interface PropsTypes {
	visibility: boolean;
	currentUser?: string;
	// customClass?: string;
	// link?: string; //path
	// onClick?: () => void;
}

const UserSettingsModal = ({ visibility, currentUser }: PropsTypes) => {
	return (
		<div className={`${visibility && 'active'} modal layer z-10`}>
			<AnimatePresence>
				<motion.div exit={{ opacity: 0 }} className="card-gesture z-10 px-4 pb-6 fadeIn ">
					<div className="w-[30%] h-1 bg-[#CCCCCC] rounded mx-auto mt-2"></div>

					<div className="mx-auto bg-gray w-20 h-20 rounded-full my-4"></div>

					<div className="mx-auto mt-6">
						<Text
							text="User settings not yet available"
							customClass="text-center"
							type="subtitle"
						/>
						{/* <Text
							text={'Buy a product to create an order'}
							type="subtitle"
							customClass=" text-center text title"
						/> */}
					</div>

					<Button full link="/home" text="Products" customClass="mt-8 stritFadeIn" />
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default UserSettingsModal;
