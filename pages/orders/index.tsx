import type { NextPage } from 'next';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import Logo from '@images/logo1.png';
import Button, { Text, InputField } from '@widget';
import TopNav from '@components/topNav';
import BottomNav from '@components/bottomNav';
import headset from '@images/headset.png';
import React, { ReactElement, useEffect } from 'react';
import cancleBtn from '@images/cart/red-times.svg';
import OrdersModal from './orderModal';
import OrderItem from './OrderItem';
import DashboardLayout from '@layout';
import { useOrders } from '@contexts/OrderContext';
import Nothing from '@components/Nothing';
import { RiFilter2Fill } from 'react-icons/ri';
import { BiSort } from 'react-icons/bi';

const Orders = () => {
	const [val, setVal] = React.useState(1);
	const [showModal, setShow] = React.useState(true);
	const [showFilterList, setShowFL] = React.useState(false);
	const [filterResult, setFilterResult] = React.useState([]);
	const [listToShow, setListToShow] = React.useState([]);
	const { orderList } = useOrders();

	// console.log(orderList, 'showing order list from orders.tsx');

	const filterBy = ['pending', 'created', 'cancled'];

	function handleShowFilterList() {
		setShowFL((p) => !p);
	}

	function handleFilterBy(key: string) {
		setShowFL((p) => !p);

		const result = orderList.filter((i, a) => i.status == key);

		if (result) {
			setFilterResult(result);
		}
	}

	useEffect(() => {
		if (filterResult.length > 0) {
			setListToShow(filterResult);
		} else if (filterResult.length <= 0 && orderList.length > 0) {
			setListToShow(orderList);
		} else {
			setListToShow([]);
		}
	}, [filterResult, orderList]);

	return (
		<div className="bg-gray-50  w-screen relative">
			<SEO title="home" />

			{/* FILTER SECTION */}
			<div className="px-2 sticky top-[70px]">
				<div className="section-card middle justify-around  px-6 mt-[80px] ">
					<button onClick={handleShowFilterList} className="filter middle px-6 space-x-2">
						<RiFilter2Fill />
						<h1 className="button_text">FILTER</h1>
					</button>

					<div className="line h-6 w-[2px] border border-red bg-red"></div>

					<button className="sort middle px-6 space-x-2">
						<BiSort />
						<h1 className="button_text">SORT</h1>
					</button>
				</div>
				{/* dropdwon */}

				{showFilterList && (
					<div className="section-card mt-1">
						<ul className="filterList  p-1 space-y-2">
							{filterBy.map((i, k) => (
								<li
								role='button'
								onClick={() => handleFilterBy(i)}
									key={k}
									className={`fil_item p-2 ${
										k != 2 && 'border-b'
									} text-gray-500 font-std-medium  capitalize`}
								>
									{i}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>

			{listToShow?.length > 0 ? (
				<div className="w-full mt-4 px-2 space-y-3 ">
					{listToShow?.map((item: any, index: number) => (
						<div className="" key={index}>
							<OrderItem collapse item={item} />
						</div>
					))}
				</div>
			) : (
				<div className="w-full mt-[100px] px-2 space-y-3 bg-white">
					<div className="mt-11">
						<Nothing message={'You have not placed any order'} />
					</div>
				</div>
			)}

			<div className="space w-full h-[100px]"></div>

			<OrdersModal visibility={!showModal} />
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
