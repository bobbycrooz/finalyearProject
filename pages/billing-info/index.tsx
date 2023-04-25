import type { NextPage } from 'next';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import Logo from '@images/logo1.png';
import Button, { Text, InputField } from '@widget';
import TopNav from '@components/topNav';
import BottomNav from '@components/bottomNav';
import headset from '@images/headset.png';
import React, { ReactElement, useEffect } from 'react';
import Link from 'next/link';
import cancleBtn from '@images/cart/red-times.svg';
import OrdersModal from './orderModal';
import DashboardLayout from '@layout';
import { useOrders } from '@contexts/OrderContext';
import { useRouter } from 'next/router';
import { useAuth } from '@contexts/authContext';
import { useCarts } from '@contexts/cartContext';

const Billing = () => {
	const [shipping, setShipping] = React.useState('instant');
	const [showModal, setShow] = React.useState(false);
	const [billingInfo, setBillingInfo] = React.useState({});
	const { onChangeOrderObject } = useOrders();
	const router = useRouter();
	const { user } = useAuth();
	const { cartitems } = useCarts();

	function addOrderOption() {
		onChangeOrderObject(shipping, 'shippingMode');
		router.push('/payment-method');
	}

	// get neccessary details from user
	// console.log(user, 'this is the user object from billing-info');

	useEffect(() => {
		setBillingInfo(user);
	}, []);

	return (
		<div className="bg-admin billing w-screen relative">
			<SEO title="home" />
			{/* details */}
			<div className="w-full mt-20 px-3 space-y-3">
				<div className="billing_details_card">
					<div className="billing_details_card-head yellow">
						<p className="title text-black">Billing information</p>
					</div>

					<div className="billing_details_card-body">
						<div className="w-full">
							<div className="row flex justify-between px-2">
								<Text text="username" type="title" />
								<Text text={user?.username} type="subtitle" />
							</div>

							<div className="row flex justify-between px-2">
								<Text text="email" type="title" />
								<Text text={user?.email} type="subtitle" />
							</div>

							<div className="row flex justify-between px-2">
								<Text text="phone" type="title" />
								<Text text={user?.phone} type="subtitle" />
							</div>

							<div className="row flex justify-between px-2">
								<Text text="Address" type="title" />
								<Text text={user?.address} type="subtitle" />
							</div>
						</div>
						<div className="action_btn w-full px-6 my-4">
							<Link href="/user">
								<button className="bg-yellow ">Edit Billing information</button>
							</Link>
						</div>
					</div>
				</div>
				{/* method */}
				<div className="billing_details_card">
					<div className="billing_details_card-head green">
						<p className="title text-black">Select Shipping Method</p>
					</div>

					<div className="billing_details_card-body">
						<div className="w-full space-y-3 py-6">
							<div
								role={'button'}
								onClick={() => setShipping('door delivery')}
								className="row "
							>
								<div className="middle">
									<div
										className={`${
											shipping === 'door delivery'
												? 'border-blue'
												: ' border-green'
										} "radio_btn border-2 rounded-full w-5 h-5 p-1 bg-white"`}
									>
										{shipping === 'door delivery' && (
											<div className="radio_btn-inner rounded-full bg-blue w-full h-full"></div>
										)}
									</div>
									<Text text="Door  delivery" type="subtitle" customClass="ml-2" />
								</div>
								{`-`}
								<Text text="2hrs delivery for #150.0" />
							</div>

							<div role={'button'} onClick={() => setShipping('instant')} className="row ">
								<div className="middle">
									<div
										className={`${
											shipping === 'instant'
												? 'border-blue'
												: ' border-green'
										} "radio_btn border-2 rounded-full w-5 h-5 p-1 bg-white"`}
									>
										{shipping === 'instant' && (
											<div className="radio_btn-inner rounded-full bg-blue w-full h-full"></div>
										)}
									</div>
									<Text text="In person" type="subtitle" customClass="ml-2" />
								</div>
								{`-`}
								<Text text=" instant delivery for #0.0" />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* action */}
			<div className="section-card my-3 flex between px-4 ">
				<Text type="title" text={`# ${cartitems?.subTotal}`} />

				<Button
					text="Payment Method"
					// link=
					onClick={() => addOrderOption()}
					customClass="custom-btn custom-btn-yellow"
				/>
			</div>
			<div className="space w-full h-[40px]"></div>

			<OrdersModal visibility={showModal} />
		</div>
	);
};

interface AppProps {
	name: string;
}

Billing.getLayout = function getLayout(children: ReactElement) {
	return <DashboardLayout>{children}</DashboardLayout>;
};

export default Billing;
