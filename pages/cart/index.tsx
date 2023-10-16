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
import CartItem from './CartItem';

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

	console.log(cartitems);
	

	return (
		<div className="bg-gray-100 cart_list_page  w-screen h-screen relative">
			<SEO title="cart" />

			{/* VERTICAL SPACE */}
			<div className="space-from-top h-4 "></div>

			{/* CART SECTION */}
			<div className="w-full px-2 space-y-3">
				{cartitems?.items?.length > 0 ? (
					<div className="carts space-y-3">
						{cartitems.items
							.map((item: any, idex: React.Key | null | undefined) => (
								<div key={idex} className="cart_item">
									<CartItem item={item} updateCartItem={updateCartItem} />
								</div>
							))}
					</div>
				) : (
					<div className="">
						{/* VERTICAL SPACE */}
						{/* <div className="space-from-top h-16 "></div> */}

						{/* <div className="cart_icone">{cartIcon}</div>
						<div className="cart_icone">{cartIcon}</div> */}
						<Nothing icon={cartIcon} />
					</div>
				)}

				{/* coupon */}
				{!!cartitems?.items && (
					<div className="coupon_container shadow-sm space-y-2">
						<Text type="title" text={'Have a coupon?'} />
						<Text text={'Enter your coupon code here and get awesome discount'} />

						<div className="filed_input-container">
							<input type="text" name="" id="" className="apply-input" />
							<button className="apply-btn">Apply</button>
						</div>
					</div>
				)}

				{/* checkout section */}
				{!!cartitems?.items ? (
					<div className="checkout_container ">
						<Text type="title" text={`# ${cartitems.subTotal}`} />

						<Button
							text="checkout"
							link="/billing-info"
							customClass="custom-btn custom-btn-yellow"
						/>
					</div>
				) : (
					<div className="w-full centered">
						<Button
							text="Products"
							link="/categories?cat=phones"
							customClass="custom-btn custom-btn-yellow"
						/>
					</div>
				)}
			</div>

			<div className="space w-full h-[100px]"></div>
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
				fill="#d97706"
			></path>
			<path
				d="M17.25 37.86a1.25 1.25 0 0 1-1.24-1.08 1.25 1.25 0 0 1 1.08-1.4l36.7-4.9 3.54-19.53a1.24 1.24 0 0 1 1.52-.91c.67.16 1.08.84.91 1.51l-3.74 20.36c-.13.5-.54.87-1.05.94l-37.55 5-.17.01zm3.06-24.9h-8.5a1.25 1.25 0 0 1-1.26-1.26c0-.69.56-1.25 1.25-1.25h8.5a1.25 1.25 0 0 1 0 2.5z"
				fill="#d97706"
			></path>
			<path d="M57.78 12.5h-8.53a1.25 1.25 0 0 1 0-2.5h8.53a1.25 1.25 0 0 1 0 2.5z" fill="#d97706"></path>
			<g fill="#d97706">
				<path d="M34.37 19.77A10 10 0 0 1 24.3 9.88 10 10 0 0 1 34.37 0a10 10 0 0 1 10.08 9.88 10 10 0 0 1-10.08 9.88zm0-17.3a7.5 7.5 0 0 0-7.56 7.41 7.5 7.5 0 0 0 7.56 7.41 7.5 7.5 0 0 0 7.56-7.4 7.5 7.5 0 0 0-7.56-7.42z"></path>
				<path
					d="M34.24 10.88l-2.34 2.33a.72.72 0 0 1-1 0 .7.7 0 0 1 0-1l2.34-2.33-2.34-2.32a.7.7 0 0 1 0-1 .71.71 0 0 1 1 0l2.34 2.32 2.34-2.32a.71.71 0 0 1 1 0 .7.7 0 0 1 0 1l-2.33 2.32 2.34 2.33a.7.7 0 0 1-.5 1.2.72.72 0 0 1-.5-.2l-2.35-2.33z"
					stroke="#d97706"
				></path>
			</g>
		</g>
	</svg>
);

Mycart.getLayout = function getLayout(children: ReactElement) {
	return <DashboardLayout>{children}</DashboardLayout>;
};

export default Mycart;
