import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import Button from '@widget/Button';
import Text from '@widget/Text';
import headset from '@images/headset.png';
import React, { ReactElement, useEffect, useRef } from 'react';
import Link from 'next/link';
import cancleBtn from '@images/cart/red-times.svg';
import { useProducts } from '@contexts/productContext';
import { useCarts } from '@contexts/cartContext';
import DashboardLayout from '@layout';
import { getCart, updateCart } from '@axios/cart';
import SkelectonLoader from '@components/SkelectonLoader';
import Nothing from '@components/Nothing';
import CartItem from './new-store';
import SecondAdvertBanner from '@sections/SecondAdvertBanner';

// delete add update

/* 
CART PAGE
--------------------
*/

const Mycart = () => {
	const { setProducts, products } = useProducts();
	const { cartitems, setCartItems, updateCartItem } = useCarts();

	/* 
	
		<div className="cart_list_container px-2 shadow-sm">
						{cartitems.items?.map((item: any, index: number) => (
							<div key={index} className="">
								<CartItem item={item} updateCartItem={updateCartItem} />
							</div>
						))}
					</div>

					!!cartitems?.items
	
	*/
	const addArr = [
		'connect with more friends',
		'sell more products',
		'Expert product delivery',
		'import revenue',
		'Sell at comfort',
		'trusted buyers'
	];

	return (
		<div className="bg-gray-100 cart_list_page  w-screen h-screen relative stack">
			<SEO title="Store" />

			<div className="section-card mt-9 bg-green-400 centered font-std-medium">
				Create new store for your products
			</div>
			<div className="section-card mt-9 bg-green-400 stack">
				<h1 className="text-lg w-full text-center capitalize">why create a store?</h1>
				<div className="w-full grid grid-cols-2 gap-2 ">
					{addArr.map((i, k) => (
						<div key={k} className="rounded-md  bg-red-400 text-center px-4 p-3 h-12">
							<p className="text-xs text-gray-50  capitalize">{i}</p>
						</div>
					))}
				</div>
			</div>
			{/*  */}

			<div className="second-banner">
				<SecondAdvertBanner />
			</div>

			{/*  */}

			<div className="section-card  bg-green-400 flex flex-col stack">
				<h1 className="text-sm w-full text-left text-gray-600">
					 Creating a store is the key to selling your products online. With a dedicated store
					page,
				</h1>

				<h1 className="text-sm w-full text-left text-gray-600">
					you can showcase your brand and products to potential customers, build credibility, and
					increase sales.
				</h1>

				<h1 className="text-sm w-full text-left text-gray-600">
					Don &apos; t miss out on the opportunity to reach a wider audience and grow your business
					with a personalized online store.
				</h1>

				<Link href={'/store/new-store'}>
					<div className="rounded-md  bg-red-400 text-center px-4 p-3 h-12">
						<p className="text-xs text-gray-50  capitalize">get Started</p>
					</div>
				</Link>
			</div>

			{/* <div className="section-card  bg-green-400 flex flex-col">
				<p className="text-lg w-full text-center capitalize ">active stores</p>
			</div> */}
		</div>
	);
};

interface AppProps {
	name: string;
}

const cartIcon = (
	<svg height="58" width="60" aria-label="empty-cart" className="" name="empty-cart">
		<g fill="none">
			<path
				d="M46.85 58a6.26 6.26 0 0 1-6.26-6.26 6.26 6.26 0 0 1 6.26-6.25 6.26 6.26 0 0 1 6.26 6.25A6.26 6.26 0 0 1 46.85 58zm0-10.01a3.76 3.76 0 0 0-3.75 3.75 3.76 3.76 0 0 0 3.75 3.76 3.76 3.76 0 0 0 3.76-3.76A3.76 3.76 0 0 0 46.85 48zM21.82 58a6.26 6.26 0 0 1-6.26-6.26 6.26 6.26 0 0 1 6.26-6.25 6.26 6.26 0 0 1 6.26 6.25A6.26 6.26 0 0 1 21.82 58zm0-10.01a3.76 3.76 0 0 0-3.75 3.75 3.76 3.76 0 0 0 3.75 3.76 3.76 3.76 0 0 0 3.75-3.76A3.76 3.76 0 0 0 21.82 48zm30.04-5H22.97a8.79 8.79 0 0 1-8.6-7.05l-6.1-30.5H1.8a1.25 1.25 0 0 1 0-2.5H9.3c.6 0 1.11.42 1.23 1l6.3 31.51a6.27 6.27 0 0 0 6.14 5.03h28.89a1.25 1.25 0 0 1 0 2.5z"
				fill="#6610F2"
			></path>
			<path
				d="M17.25 37.86a1.25 1.25 0 0 1-1.24-1.08 1.25 1.25 0 0 1 1.08-1.4l36.7-4.9 3.54-19.53a1.24 1.24 0 0 1 1.52-.91c.67.16 1.08.84.91 1.51l-3.74 20.36c-.13.5-.54.87-1.05.94l-37.55 5-.17.01zm3.06-24.9h-8.5a1.25 1.25 0 0 1-1.26-1.26c0-.69.56-1.25 1.25-1.25h8.5a1.25 1.25 0 0 1 0 2.5z"
				fill="#6610F2"
			></path>
			<path d="M57.78 12.5h-8.53a1.25 1.25 0 0 1 0-2.5h8.53a1.25 1.25 0 0 1 0 2.5z" fill="#6610F2"></path>
			<g fill="#6610F2">
				<path d="M34.37 19.77A10 10 0 0 1 24.3 9.88 10 10 0 0 1 34.37 0a10 10 0 0 1 10.08 9.88 10 10 0 0 1-10.08 9.88zm0-17.3a7.5 7.5 0 0 0-7.56 7.41 7.5 7.5 0 0 0 7.56 7.41 7.5 7.5 0 0 0 7.56-7.4 7.5 7.5 0 0 0-7.56-7.42z"></path>
				<path
					d="M34.24 10.88l-2.34 2.33a.72.72 0 0 1-1 0 .7.7 0 0 1 0-1l2.34-2.33-2.34-2.32a.7.7 0 0 1 0-1 .71.71 0 0 1 1 0l2.34 2.32 2.34-2.32a.71.71 0 0 1 1 0 .7.7 0 0 1 0 1l-2.33 2.32 2.34 2.33a.7.7 0 0 1-.5 1.2.72.72 0 0 1-.5-.2l-2.35-2.33z"
					stroke="#6610F2"
				></path>
			</g>
		</g>
	</svg>
);

Mycart.getLayout = function getLayout(children: ReactElement) {
	return <DashboardLayout>{children}</DashboardLayout>;
};

export default Mycart;
