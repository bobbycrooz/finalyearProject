import React, { ReactElement } from 'react';
import Link from 'next/link';
import Button, { Text } from '@widget';
import OrdersModal from './orderModal';
import { useOrders } from '@contexts/OrderContext';
import { useRouter } from 'next/router';

const OrderItem = ({ collapse, item, confirm }: { collapse?: boolean; item: any; confirm?: any }) => {
	const [val, setVal] = React.useState(false);
	// const [isLoading, setIsLoading] = React.useState(true);
	// const { placeOrder } = useOrders();

	// console.log(item?.status);

	if (collapse) {
		return (
			<Link href={`orders/summary?id=${item?._id}`}>
				<div className="section-card space-y-6">
					{/* <h1 className="subtitle w-full capitalize">Orders</h1> */}

					<div className="box middle space-x-2">
						<h1 className="text-sm font-std-book text-gray-500 capitalize">order id:</h1>
						<h1 className="font-std-medium text-gray-700">{item?._id}</h1>
					</div>

					<div className="order-info  p-2 space-y-3">
						<div className="row between capitalize">
							<h1 className="text-sm font-std-book text-gray-500">status</h1>

							{item?.status === 'pending' ? (
								<div className="status-btn p-1  px-2 border rounded-md border-[#f3f31a8a] text-black bg-[#f3f31a8a]">
									Pending
								</div>
							) : (
								<div className="status-btn p-1  px-2 border rounded-md border-[#50f033ac] text-white bg-[#4ff033d4]">
									Created
								</div>
							)}
						</div>

						<hr className="border border-b border-dashed border-slate-300" />
						<div className="date_created">
							<h1 className="text-sm font-std-book text-gray-500">21-04-2023 at 12:45pm</h1>
						</div>
					</div>
				</div>
			</Link>
		);
	}

	return (
		<div className="section-card space-y-6">
			{/* <h1 className="subtitle w-full capitalize">Orders</h1> */}

			<div className="space-y-3">
				<div className="box middle">
					<h1 className="body capitalize">order id:</h1>
					<h1 className="title">{item?._id}</h1>
				</div>
				<h1 className="body text-xs">21-04-2023 at 12:45pm</h1>
			</div>

			<div className="order-info  p-2 space-y-3">
				<div className="row between capitalize">
					<h1 className="subtitle">status</h1>
					{item?.status === 'pending' ? (
						<div className="status-btn p-1  px-2 border rounded-md border-[#f3f31a8a] text-black bg-[#f3f31a8a]">
							pending
						</div>
					) : (
						<div className="status-btn p-1  px-2 border rounded-md border-[#50f033ac] text-white bg-[#4ff033d4]">
							Created
						</div>
					)}
				</div>

				<div className="items-details border border-[#f3f31a8a] bg-slate-50 rounded-md p-2">
					{/* <div className="item_card  p-2 w-full">
						<div className="row between">
							<h1 className="subtitle">{'powerbank 240mah '}</h1>
							<h1 className="body">{'#300'}</h1>
						</div>
					</div> */}

					{item?.cart?.items.map((item: any, index: any) => (
						<div className="item_card  p-2 w-full" key={index}>
							<div className="row between">
								<h1 className="subtitle">{'free oraimo pod 3'}</h1>
								<h1 className="body"># {item.total}</h1>
							</div>
						</div>
					))}
				</div>

				<div className="order-details space-y-3">
					<div className="row between">
						<h1 className="subtitle capitalize">recipent address:</h1>
						<h1 className="body text-left"> {item?.user?.address}</h1>
					</div>

					<div className="row between">
						<h1 className="subtitle capitalize">shipping mode:</h1>
						<h1 className="body text-left"> {item?.shippingMethod}</h1>
					</div>

					<div className="row between">
						<h1 className="subtitle capitalize">payment method:</h1>
						<h1 className="body text-left">{item?.paymentMethod}</h1>
					</div>

					<div className="row between">
						<h1 className="subtitle capitalize">Delivery status :</h1>
						<h1 className="body text-left"> {item?.deliveryStatus}</h1>
					</div>

					<div className="row between">
						<h1 className="subtitle capitalize">total cost</h1>
						<h1 className="body text-left"># {item?.cart?.subTotal}</h1>
					</div>
				</div>
			</div>

			<div className="action_center boder relative border border-slate-300 rounded-lg p-2 py-6 ">
				<div className="absolute -top-6 left-[50%] rounded-lg -translate-x-[50%] bg-white p-2 px-4 border border-slate-300">
					<h1 className="subtitle capitalize "> order actions</h1>
				</div>
				<div className="check_box">
					<p className="body text-center text-sm text-gray mt-4">
						by clicking on create order you agree to the terms and condition attached to is and
						if you fuck up in future na you fuck up o
					</p>
					<div className="toggle centered ">
						<div className=" toggle-box middle space-x-1 px-4 p-6">
							<input
								type="checkbox"
								name=""
								id=""
								// @ts-ignore
								value={val}
								onChange={(e) => setVal(!val)}
							/>

							<Text text={'I agree'} customClass="" />
						</div>
					</div>
				</div>
				<div className="btn_box w-full">
					{item?.status == 'created' ? (
						<Button
							onClick={confirm}
							isLoading={false}
							disabled={!val}
							full
							ghost
							text="cancle order"
						/>
					) : (
						<Button
							onClick={confirm}
							isLoading={false}
							disabled={!val}
							full
							text="place order"
						/>
					)}
				</div>
				{/* <OrdersModal visibility={!showModal} /> */}
			</div>
		</div>
	);
};

export default OrderItem;
