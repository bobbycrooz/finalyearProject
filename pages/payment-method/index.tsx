import type { NextPage } from 'next';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import Logo from '@images/logo1.png';
import Button, { Text, InputField } from '@widget';
import TopNav from '@components/topNav';
import BottomNav from '@components/bottomNav';
import headset from '@images/headset.png';
import React, { ReactElement } from 'react';
import Link from 'next/link';
import cancleBtn from '@images/cart/red-times.svg';
import OrderPrompt from './OrderPrompt';
import DashboardLayout from '@layout';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { BsCashCoin } from 'react-icons/bs';
import Toggler from '@widget/Toggler';
import { useOrders } from '@contexts/OrderContext';
import { useRouter } from 'next/router';
import { useCarts } from '@contexts/cartContext';

const PaymentMethod = () => {
	const [shouldCreate, setShouldCreate] = React.useState(false);
	const [hasAgrred, setAgreement] = React.useState(false);
	const [payMethod, changePayMethod] = React.useState('cash');
	const [isLoading, setLoading] = React.useState(false);

	const { onChangeOrderObject, generateSummary, orderList } = useOrders();
	const router = useRouter();
	const { cartitems } = useCarts();

	async function addOrderOption() {
		setLoading(true);


		onChangeOrderObject(payMethod, 'paymentMethod');

		const OrderId = await generateSummary();


		if (typeof OrderId == 'string') {
			setLoading(false);
		

			router.push(`/orders/summary?id=${OrderId}`);
		} else {
			return console.log('there was a problem');
		}

		setTimeout(() => {}, 2000);
		// setShouldCreate(true);
	}

	return (
		<div className=" payment_method w-screen relative">
			<SEO title="home" />
			{/* details */}
			<div className="w-full h-[70vh] bg-white mt-20 px-3 ">
				<Text text={'Select Payment method'} type="title" customClass="text-center" />

				<div className="options">
					<div
						role={'button'}
						title="pay with card"
						onClick={() => changePayMethod('card')}
						className={`options-card ${payMethod === 'card' && 'active'}`}
					>
						<AiOutlineCreditCard className="text-4xl mx-auto" />
						<h1 className="name subtitle">Card</h1>
					</div>

					{/*  */}
					<div
						role={'button'}
						title="Pay with cash"
						onClick={() => changePayMethod('cash')}
						className={`options-card ${payMethod === 'cash' && 'active'}`}
					>
						<BsCashCoin className="text-4xl mx-auto" />
						<h1 className="name subtitle">Cash</h1>
					</div>
				</div>

				<div className="section-card my-4">
					<p className="text title capitalize">
						You pay # {cartitems?.subTotal} by {payMethod}
					</p>

					<p className="text mt-2">
						while paying with cash, make sure you have the exact amount at hand.
					</p>

					<div className="flex justify-between items-center  my-2 p-2">
						<Text text={'I agreed to the conditions above'} />
						<Toggler state={hasAgrred} toggle={() => setAgreement(!hasAgrred)} />
					</div>
				</div>

				<div className="absolute bottom-0 w-full left-0 px-4">
					<Button
						onClick={() => addOrderOption()}
						isLoading={isLoading}
						disabled={!hasAgrred}
						text="summary"
						full
					/>
				</div>
			</div>

			{/* <OrderPrompt
				back={() => setShouldCreate(false)}
				visibility={shouldCreate}
				// createUserOrder={createUserOrder}
			/> */}
		</div>
	);
};

interface AppProps {
	name: string;
}

PaymentMethod.getLayout = function getLayout(children: ReactElement) {
	return <DashboardLayout>{children}</DashboardLayout>;
};

export default PaymentMethod;
