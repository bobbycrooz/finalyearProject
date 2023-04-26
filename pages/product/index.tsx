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
import { useRouter } from 'next/router';
import DashboardLayout from 'src/interface/layout';
import ProductCarousel from '@components/productCarousel';
import Related from '@sections/relatedProduct';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { IoMdFlash } from 'react-icons/io';
import { useProducts } from '@contexts/productContext';
import { useCarts } from '@contexts/cartContext';
const Mycart = () => {
	const [val, setVal] = React.useState(1);
	const [liked, setLiked] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);
	const [qqt, setQQt] = React.useState(1);
	const [currentProduct, setCurrentProduct] = React.useState<any>();
	const { push, query } = useRouter();
	const { setProducts, products } = useProducts();
	const { updateCartItem } = useCarts();

	// get product full details
	function fetchProductDetails(productId?: string) {
		const currentItem = products.filter((i: { _id: string | undefined }, a: any) => i._id === productId);
		if (currentItem.length > 0) {
			setCurrentProduct(currentItem[0]);
		}
	}

	async function handleAddToCart(id: string) {
		setIsLoading(true);
		const updated = await updateCartItem(id, qqt);

		if (updated) {
			setIsLoading(false);
		}

		setIsLoading(false);
	}

	function handleInc() {
		setQQt(qqt + 1);
	}

	function handleDec() {
		if (qqt > 0) {
			setQQt(qqt - 1);
		}
	}

	console.log(currentProduct?._id);

	useEffect(() => {
		fetchProductDetails(String(query.id));
	}, []);

	return (
		<div className="bg-admin product-item w-screen relative">
			<SEO title="home" />
			<div className="bg-body shadow-sm rounded-md w-full  h-[490px]">
				<div className="display_image w-full   min-h-[300px] p-2 shadow-xl relative bg-white ">
					{/* <div className="circle-bg"></div> */}
					<ProductCarousel productImages={currentProduct?.imageUrl} />
				</div>

				<div className="product-info mt-4 p-3 space-y-2">
					<div className="name-like between">
						<Text type="title" text={'Oraimo free pod 3'} />
						<div role={'button'} onClick={() => setLiked(!liked)} className="heart">
							{liked ? (
								<AiFillHeart className="text-red-500 text-3xl " />
							) : (
								<AiOutlineHeart className="text-red-500 text-3xl" />
							)}
						</div>
					</div>

					<div className="price_box  flex items-end">
						<Text type="subtitle" text={`# ${currentProduct?.price}`} />
						<Text text={`# ${currentProduct?.initialPrice}`} customClass={'ml-2'} />
					</div>

					<div className="condition between">
						<Text type="subtitle" text={'34 likes'} />
						<Text text={'working perfect'} />
						{/* <span className="love-icon w-8 h-8 bg-red rounded-full"></span> */}
					</div>
				</div>
			</div>

			<div className="section-card my-4 flex justify-between items-end">
				<div className="flash-sales ">
					<div className="group between ">
						<IoMdFlash className={'flash text-yellow text-xl'} />
						<Text type="subtitle" text={'falsh sales ends:'} />
					</div>
					<Text type="subtitle" text={'00:05:2022'} customClass={'mt-2 ml-2'} />
				</div>

				<div className="percentage-sold text-right ">
					<Text type="subtitle" text={'80% sold'} />
					<div className="progress_bar w-28 mt-1 h-3 bg-slate-300 border border-slate-300 rounded-md">
						<div className="progress_bar-inner bg-yellow h-full w-[80%]"></div>
					</div>
				</div>
			</div>

			<div className="section-card my-4 flex justify-between items-end">
				<div className="color-picker ">
					<Text type="subtitle" text={'colors available'} />
					<div className="color_box  mt-1 h-6 flex space-x-2">
						<div className="color_box-item bg-blue-500 w-5 h-5 centerd rounded-full p-1">
							{/* <span className="selected-dot bg-white w-full h-full"></span> */}
						</div>
						{/*  */}
						<div className="color_box-item bg-yellow-500 w-5 h-5 centerd rounded-full p-1">
							{/* <span className="selected-dot bg-white w-full h-full"></span> */}
						</div>
						{/*  */}
						<div className="color_box-item bg-gray-500 w-5 h-5 centerd rounded-full p-1">
							<div className="selected-dot bg-white w-full h-full rounded-full"></div>
						</div>
					</div>
				</div>
			</div>

			{/* PRODUCT OPERAATIONS */}
			<div className="section-card my-4 between">
				<div className="grouped_action flex middle space-x-3">
					<div role="button" onClick={handleDec} className="small_box minus">
						-
					</div>
					<div className="small_box value">{qqt}</div>
					<div role="button" onClick={handleInc} className="small_box plus">
						+
					</div>
				</div>

				<div className="grouped_button middle space-x-3">
					<Button
						isLoading={isLoading}
						onClick={() => handleAddToCart(currentProduct?._id)}
						text="Add"
						customClass="p-2 px-3  rounded-sm text-xs"
					/>
					<Button ghost text="Buy now" customClass="p-2 px-3 rounded-sm text-xs" />
				</div>
			</div>

			<div className="section-card my-4 p-4">
				<Text type="title" text={'Specifications'} />

				<p className="text my-2">{currentProduct?.description}</p>

				<ul className="conditions list-disc ml-6 my-2">
					<li>Good conditons</li>
					<li>working perfect</li>
					<li>100% life span</li>
					<li>Water resistance</li>
				</ul>

				<p className="text my-2">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit veritatis quod,
					mollitia esse odio iste a rerum, quae accusamus fugit veniam laudantium culpa officia
					maxime et excepturi totam odit doloremque.
				</p>
			</div>

			<div className="section-card py-6">
				<Related />
			</div>

			<div className="space w-full h-[100px]"></div>

			{/* <Modal visibility={true}/> */}
		</div>
	);
};

interface AppProps {
	name: string;
}

Mycart.getLayout = function getLayout(children: ReactElement) {
	return <DashboardLayout>{children}</DashboardLayout>;
};

export default Mycart;
