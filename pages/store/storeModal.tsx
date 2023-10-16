import Button from '@widget/Button';
import Text from '@widget/Text';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

interface PropsTypes {
	visibility: boolean;
	create?: any;
	setShow?: any;
	isLoading?: boolean;
	// customClass?: string;
	// link?: string; //path
	// onClick?: () => void;
}

const StoreModal = ({ visibility, create, setShow, isLoading }: PropsTypes) => {
	return (
		<div className={`${visibility && 'active'} modal layer z-10`}>
			<AnimatePresence>
				<motion.div exit={{ opacity: 0 }} className="card-gesture z-10 px-4 pb-6 fadeIn bg-white">
					<div className="w-[30%] h-1 bg-[#CCCCCC] rounded mx-auto mt-2"></div>

					<div className="mx-auto bg-gray w-1/2 h-[120px]   my-4 relative">
						<Image src={'/stores/store-2.jpg'} alt="store" layout="fill" />
					</div>

					<div className="mx-auto mt-6">
						<Text
							text="You are about to create your store"
							customClass="text-center"
							type="title"
						/>
						<Text
							text={'your store will be created in few minutes'}
							type="subtitle"
							customClass=" text-center text title"
						/>
					</div>

					{/* <Link href={''}> */}
					<div
						role="button"
						onClick={create}
						className="rounded-md  bg-red-400 text-center px-4 p-3 h-12 mt-8"
					>
						{isLoading ? (
							<p className="italic text-sm text-gray-50 capitalize">creating store ...</p>
						) : (
							<p className="text-sm text-gray-50  capitalize">continue</p>
						)}
					</div>

					<div
						role="button"
						onClick={setShow}
						className="rounded-md  bg-red-50 border border-red-400 text-center px-4 p-3 h-12 mt-1"
					>
						
							<p className="text-sm text-red-400  capitalize">cancle</p>
					</div>

					
					{/* </Link> */}
					{/* <Button full link="/store/review-store" text="continue" isLoading={!true} customClass="mt-8 stritFadeIn" /> */}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default StoreModal;
