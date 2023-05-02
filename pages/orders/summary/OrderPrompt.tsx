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
import { useRouter } from 'next/router';
import { useOrders } from '@contexts/OrderContext';

import { useState } from 'react';
import { useCarts } from '@contexts/cartContext';

interface PropsTypes {
	visibility: boolean;
	item: any;
	// link?: string; //path
	back: () => void;
}

const OrderPrompt = ({ visibility, back, item }: PropsTypes) => {
	const { createUserOrder } = useOrders();
	const [isLoading, setIsLoading] = useState(false);
	const [val, setVal] = useState(false);
	const { placeOrder } = useOrders();
	const { setCartItems } = useCarts();
	const router = useRouter();

	async function initiateOrder(id: string) {
		setIsLoading(true);

		const created = await placeOrder(id);

		
		if (created) {
			setIsLoading(false);
			setCartItems([])
			return router.push(`/orders/success-page`);
		}

		return setIsLoading(false);
	}
	return (
		<div className={`${visibility && 'active'} modal layer`}>
			<AnimatePresence>
				<motion.div exit={{ opacity: 0 }} className="card-gesture px-4 pb-6 fadeIn ">
					<div className="w-[30%] h-1 bg-[#CCCCCC] rounded mx-auto mt-2"></div>

					{/* 
					<div className="mx-auto centered mt-[40px]">
						<Image className="br" alt="" src={Success} height={60} width={60} />
					</div> */}

					<div className="mx-auto mt-6">
						<Text text="Create Order" customClass=" text-center" type="title" />
						<p className="text subtitle text-center">
							Are you sure you want to place this order
						</p>
						<p className="text body text-center">
							<strong>note:</strong> order status would be change to active
						</p>
					</div>

					<Button
						full
						// link="/payment-method/success-page"

						onClick={() => initiateOrder(item._id)}
						text="Yes"
						isLoading={isLoading}
						customClass="mt-8 stritFadeIn"
					/>
					<Button full ghost onClick={back} text="Cancle" customClass="mt-3" />
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default OrderPrompt;
