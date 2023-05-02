import Image from 'next/image';

import Button from '@widget/Button';
import Text from '@widget/Text';
import headset from '@images/headset.png';
import React, { ReactElement, useEffect, useRef } from 'react';
import Link from 'next/link';
import cancleBtn from '@images/cart/red-times.svg';
import { useCarts } from '@contexts/cartContext';

function CartItem({ item }: { item: any; updateCartItem: any }) {
	const [updating, setUpdatting] = React.useState(false);
	// const cartRef = useRef();
	const [baseQtty, setQtty] = React.useState(1);
	const { updateCartItem, refreshCart } = useCarts();
	// function currentItemCount(id: string) {}

	function QttyChangeHandler(e: any, qtty: number = baseQtty) {
		setUpdatting(true);
		setQtty(e.target.value);
	}

	async function submitValue(productID: string, quantity: number) {
		await updateCartItem(productID, quantity);

		await refreshCart()
		

		setUpdatting(false);
	}

	function Img(str: any) {
		let thumbnail = str[0];

		return String(thumbnail);
	}

	

	return (
		<>
			<div className="product_item w-full p-2 stack bg-white">
				{/* ITEM DETAILS */}
				<div className="row flex items-start h-[100px] ">
					<div className="item_image relative h-full w-1/2  p-2">
						<div className="w-full h-full">
							{item?.productID?.imageUrl[0].length > 0 ? (
								<Image
									alt=""
									src={Img(item?.productID?.imageUrl)}
									// height={80}
									// width={70}
									layout="fill"
								/>
							) : (
								<Image
									alt=""
									src={'/products/watch1.webp'}
									height={80}
									width={70}
									layout="intrinsic"
									className="br"
								/>
							)}
						</div>
						{/* <Image
													alt=""
													src={'/products/watch1.webp'}
													// height={80}
													// width={70}
													layout="fill"
													className="br"
												/> */}
					</div>

					<div className="item_details">
						<h1 className="text-lg font-std-medium text-left capitalize">
							{item?.productID?.name}
						</h1>

						<p className="text-sm font-std-book capitalize">
							sold by <span className="text-blue-400">bobstrore</span>
						</p>
					</div>
				</div>

				{/* ITEM OPETATIONS */}
				<div className="row flex middle space-x-8">
					<div className="quantity_container ">
						<h1 className="text-xs">Quantity:</h1>

						<div className="rounded flex middle  shadow-md mt-1">
							<div className="button px-2 border-l border-y rounded-l">-</div>
							<div className="button border border-gray px-2">{item?.quantity}</div>
							<div className="button px-2 border-r border-y rounded-r">+</div>
						</div>
					</div>

					<div className="price_box">
						<h1 className="text-lg font-std-medium ">#{item?.total}</h1>
						<p className="text-xs font-std-book">
							#{item?.price} x {item?.quantity} items
						</p>
					</div>
				</div>

				<div className="w-full border-b border-y-lightGray"></div>

				<div className="button_group justify-center flex">
					<Link href={`/product?id=${item?.productID?._id}`}>
						<button className="border rounded text-gray middle px-3 p-2 w-full capitalize centered space-x-2">
							<Love />
							<p> view</p>
						</button>
					</Link>
					<div className="space w-4"></div>
					<button
						onClick={() => submitValue(item?.productID?._id, 0)}
						className="border rounded text-gray middle px-3 p-2 w-full capitalize centered space-x-2"
					>
						<Buttt />
						<p>remove</p>
					</button>
				</div>
			</div>
		</>
	);
}

/* 


*/

// <div className="px-2 my-2 product_item w-full ">
// 	<div className="container middle space-x-3">
// 		{/* REMOVE ITEM FROM CART BUTTON */}
// 		<button onClick={() => submitValue(item?.productID?._id, 0)} className="">
// 			<Image alt="" src={cancleBtn} width={24} height={24} />
// 		</button>

// 		{/* PRODUCT DETAILS INFORMATION */}
// 		<div className="details-info flex">
// 			{/* PRODUCT THUMBNAIL */}
// 			<div className="product-image border p-1 w-[45px] h-[45px] border-gray centered rounded-md">
// 				<Image alt="" src={headset} width={45} height={45} />
// 			</div>

// 			{/* PRODUCT NAME AND PRICE */}
// 			<div className="name-group ml-4 ">
// 				<Link href={`/product?id=${`kasjdfjdmjficopdfad`}`}>
// 					<Text text={item?.productID.name} customClass="text-xs capitalize font-semibold" />
// 				</Link>
// 				<p className="price">
// 					#{item?.productID.price} x {item?.quantity}
// 				</p>
// 			</div>
// 		</div>
// 	</div>

// 	{/* CART OPERATION */}
// 	<form onSubmit={() => console.log('updating cart')} className="update-count-container middle ">
// 		{updating ? (
// 			<button
// 				onClick={() => submitValue(item?.productID._id, qtty)}
// 				className="update p-2 text-blue capitalize"
// 			>
// 				update
// 			</button>
// 		) : (
// 			<div className="total">
// 				<h1 className="text-xs font-semibold px-1 mx-2">#{item?.total}</h1>
// 			</div>
// 		)}

// 		<input
// 			type="number"
// 			name=""
// 			className="p-2 product-count border w-[50px] h-[45px] border-gray centered rounded-md"
// 			id=""
// 			// ref={cartRef}
// 			max={1}
// 			value={qtty}
// 			onChange={(e) => QttyChangeHandler(e, Number(e.target.value))}
// 		/>
// 	</form>
// </div>;

// {
// 	!true && (
// 		<div className="w-full flex justify-end mb-1">
// 			<Button text="update" customClass="p-2 text-xs px-4 rounded-md " />
// 		</div>
// 	);
// }
// {
// 	true && (
// 		<div className="px-8">
// 			<hr className="dotted-line" />
// 		</div>
// 	);
// }

export default CartItem;

function Buttt({ color }: { color?: string }) {
	return (
		<svg height="15" viewBox="0 0 15 15" width="15" aria-label="remove" className="" name="remove">
			<path
				d="M12.8 12.8c1.467-1.467 2.2-3.233 2.2-5.3 0-2.078-.733-3.847-2.2-5.308C11.333.73 9.567 0 7.5 0 5.428 0 3.658.73 2.192 2.192.73 3.658 0 5.428 0 7.5c0 2.067.73 3.833 2.192 5.3C3.658 14.267 5.428 15 7.5 15c2.067 0 3.833-.733 5.3-2.2zM7.5 6.375l2.05-2.05a.744.744 0 0 1 .558-.233.79.79 0 0 1 .567.233c.15.156.225.342.225.558a.786.786 0 0 1-.225.567L8.625 7.5l2.05 2.05a.762.762 0 0 1 .233.558.771.771 0 0 1-.233.567.771.771 0 0 1-.567.233.762.762 0 0 1-.558-.233L7.5 8.625l-2.05 2.05a.771.771 0 0 1-.567.233.762.762 0 0 1-.558-.233.771.771 0 0 1-.233-.567c0-.216.077-.402.233-.558l2.05-2.05-2.05-2.042a.79.79 0 0 1-.233-.566c0-.217.077-.403.233-.559a.749.749 0 0 1 .558-.241c.223 0 .411.08.567.241L7.5 6.375z"
				fill={`${color || '#d8d8d8'}`}
				fillRule="nonzero"
			></path>
		</svg>
	);
}

function Love({ color }: { color?: string }) {
	return (
		<svg height="14" viewBox="0 0 16 14" width="16" aria-label="love" className="" name="love">
			<path
				d="M14.3 1.3A4.22 4.22 0 0 0 11.254.01c-1.15 0-2.232.46-3.047 1.293l-.425.436-.432-.443A4.242 4.242 0 0 0 4.3 0C3.152 0 2.07.46 1.26 1.29A4.418 4.418 0 0 0 0 4.409a4.43 4.43 0 0 0 1.266 3.116l6.194 6.34a.443.443 0 0 0 .313.135.44.44 0 0 0 .313-.132l6.206-6.33a4.435 4.435 0 0 0 1.264-3.119 4.415 4.415 0 0 0-1.257-3.12z"
				fill={`${color || '#d8d8d8'}`}
				fillRule="nonzero"
			></path>
		</svg>
	);
}
