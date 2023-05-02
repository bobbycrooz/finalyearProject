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
import OrdersModal from '../orderModal';
import OrderPromt from './OrderPrompt';

import OrderItem from '../OrderItem';
import DashboardLayout from '@layout';
import { useRouter } from 'next/router';
import OrderPrompt from './OrderPrompt';
import { useOrders } from '@contexts/OrderContext';

const Orders = () => {
	const [val, setVal] = React.useState(1);
	const [showModal, setShow] = React.useState(false);
	const [confirmation, setConfirmation] = React.useState(false);
	const { query } = useRouter();
	const { orderList } = useOrders();
	const [currentOrderItem, setCurrentOrderItem] = React.useState({});
	
	const OrderId = query.id as string;

	function filterOrderList(id: string) {
	

		const orderDetals = orderList.filter((item: { _id: string | string[] }) => item._id === OrderId)[0];
		setCurrentOrderItem(orderDetals);
	}

	useEffect(() => {
		filterOrderList(OrderId);
	}, []);


	return (
		<div className="bg-admin w-screen relative">
			<SEO title="order summary" />

			<div className="w-full mt-20 px-2 space-y-3">
				<OrderItem confirm={() => setConfirmation(true)} collapse={false} item={currentOrderItem} />
			</div>

			<div className="space w-full h-[100px]"></div>

			<OrdersModal visibility={showModal} />
			<OrderPrompt
				back={() => setConfirmation(false)}
				visibility={confirmation}
				item={currentOrderItem}
				// createUserOrder={createUserOrder}
			/>
		</div>
	);
};

interface AppProps {
	name: string;
}

Orders.getLayout = function getLayout(children: ReactElement) {
	return <DashboardLayout>{children}</DashboardLayout>;
};

export default Orders;
