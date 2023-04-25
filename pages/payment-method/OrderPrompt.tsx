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

interface PropsTypes {
	visibility: boolean;
	// createUserOrder?: any;
	// link?: string; //path
	back: () => void;
}

const OrderPrompt = ({ visibility, back }: PropsTypes) => {
	const router = useRouter();
	const { createUserOrder } = useOrders();

	async function initCreateOrder() {
		const created = await createUserOrder();

		if (created) {
			router.push('/payment-method/success-page');
		}
	}

	return (
		<div className={`${visibility && 'active'} modal layer`}>
			<AnimatePresence>
				<motion.div exit={{ opacity: 0 }} className="card-gesture px-4 pb-6 fadeIn ">
					<div className="w-[30%] h-1 bg-[#CCCCCC] rounded mx-auto mt-2"></div>

					<div className="order-summary p-2 br mt-3">
						<h1 className="w-full text-center subtitle">Summary</h1>

						<div className="order-summary-content"></div>
					</div>
					{/* 
					<div className="mx-auto centered mt-[40px]">
						<Image className="br" alt="" src={Success} height={60} width={60} />
					</div> */}

					<div className="mx-auto mt-6">
						<Text text="Create Order" customClass=" text-center" type="title" />
						<p className="text subtitle text-center">you are about to pay #4000 by Cash</p>
					</div>

					<Button
						full
						// link="/payment-method/success-page"

						onClick={initCreateOrder}
						text="Yes"
						customClass="mt-8 stritFadeIn"
					/>
					<Button full ghost onClick={back} text="Cancle" customClass="mt-3" />
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default OrderPrompt;
