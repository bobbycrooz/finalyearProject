import headsetW from '@images/product/headsetWhite.jpg';
import headsetB from '@images/product/headsetBlack.jpg';
import charger from '@images/product/3in1.jpg';
// import ProductItem from '../ProductItem';
import { useProducts } from '@contexts/productContext';

import SoftLoader from '@components/softLoader';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import SkelectonLoader from '@components/SkelectonLoader';
import type { NextPage } from 'next';
// import Head from 'next/head';
import Image from 'next/image';

import chargerIcon from '@images/charger.svg';

import { Text } from '@widget/index';
import freepod from '@images/freepod.png';
import headset from '@images/headset.png';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import 'swiper/css/effect-fade';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { useRouter } from 'next/router';

const categoriesEnum = {
	LAPTOPS: 'laptops',
	SMARTPHONES: 'smartphones',
	HB: 'health & beauty',
	GROCERIES: 'groceries',
	ACADEMICS: 'academics',
	FASHION: 'fashion'
};

const flashSales = [
	{
		name: 'Oraimo freebud 3 filled with more',
		flashPrice: '# 36,000',
		countLeft: '40',
		originalPrice: '50,000',
		img: '/products/watch1.webp'
	},

	{
		name: 'Oraimo freebud 3 filled with more',
		flashPrice: '# 36,000',
		countLeft: '40',
		originalPrice: '50,000',
		img: '/products/watch2.webp'
	},

	{
		name: 'Oraimo freebud 3 filled with more',
		flashPrice: '# 36,000',
		countLeft: '40',
		originalPrice: '50,000',
		img: freepod
	},

	{
		name: 'Oraimo freebud 3 filled with more',
		flashPrice: '# 36,000',
		countLeft: '40',
		originalPrice: '50,000',
		img: headset
	},

	{
		name: 'Oraimo freebud 3 filled with more',
		flashPrice: '# 36,000',
		countLeft: '40',
		originalPrice: '50,000',
		img: headset
	}
];

const ProductsCategory = [
	{
		name: categoriesEnum.LAPTOPS,

		img: '/category/laptops.webp'
	},

	{
		name: categoriesEnum.ACADEMICS,

		img: '/category/academics.webp'
	},

	{
		name: categoriesEnum.GROCERIES,

		img: '/category/groceries.jpg'
	},

	{
		name: categoriesEnum.SMARTPHONES,

		img: '/category/smartphone.webp'
	},

	{
		name: categoriesEnum.FASHION,

		img: '/category/fashion.webp'
	},

	{
		name: categoriesEnum.HB,
		img: '/category/hb.webp'
	}
];

/* 
    PRODUCT LIST COMPONENT
------------------------------------
    @param listType: grid or list
    @param data: array of products
*/
const ProductList = ({ listType, data }: ProductListProps) => {
	const { setProducts, products } = useProducts();
	console.log(data, 'data for categories');
	const {push} = useRouter()

	// console.log(products);
	function Img(str: any) {
		let thumbnail = str[0];

		return String(thumbnail);
	}


	function handlePush(params:string) {
		push(`/product?id=${params}`)
		
	}

	if (listType === 'list') {
		return (
			<div className="w-full space-y-3 bg-gray-50 mt-6">
				{data.map((item: any, index: number) => {
					return (
						//  <Link href={`/products?=id${item._id} key={index} >
						<div  role="button" onClick={() => handlePush(item._id)} className="flex w-full middle h-[130px] relative shadow bg-white" key={index}>
							<>
								{/* DISCOUNT */}
								{true && (
									<div className="tag absolute top-0 left-0 rounded-r-2xl z-[5] bg-red-400  p-2 text-white">
										<h1 className="text-white text-sm">25%</h1>
									</div>
								)}

								{/* IMAGE SECTION */}
								<div className="product_image relative h-full w-[45%] ">
									{item.imageUrl[0] !== undefined ? (
										<Image
											alt=""
											src={Img(item.imageUrl)}
											// height={80}
											// width={70}
											layout="fill"
										/>
									) : (
										<Image
											alt=""
											src={headset}
											// height={80}
											// width={70}
											layout="fill"
										/>
									)}
								</div>

								{/* INFO SECTIION */}
								<div className="product_details  w-[55%] p-2 h-full space-y-1">
									<h1 className="text-sm font-std-medium capitalize text-gray-500">
										{item.name}
									</h1>

									<div className="price_box flex middle justify-between">
										<h1 className="text-xl text-gray-800 font-std-medium">
											₦{item?.price}
										</h1>

										<p className="text-xs text-gray-400">
											₦{item.initialPrice}
										</p>
									</div>

									<div className="store_name">
										<h1 className="text-sm capitalize text-gray-500">
											sold by{' '}
											<span className="text-red-400">bobstores</span>
										</h1>
									</div>

									<div className="ratting">
										<h1 className="body">⭐⭐⭐⭐</h1>
									</div>
								</div>
							</>
						</div>
						// </Link>
					);
				})}
			</div>
		);
	}

	return <div>grid style</div>;
};

// <Link href={`/product?id=${`giodgadfafadjjiad`}`}>
// 	<div>
// 		{/* PRODUCT IMAGE */}
// 		<div className="centered  relative product-image-box h-[100px]  ">
// 			<Image alt="product image" src={item.img} height={90} width={90} />
// 		</div>

// 		{/* PRODUCT DETAILS */}
// 		<div className="product-details p-2 centered text-center">
// 			<Text text={item.name} />

// 			{/* <Text text={`${item.countLeft} items left`} /> */}
// 		</div>
// 	</div>
// </Link>;

interface ProductListProps {
	listType?: string;
	data?: any;
}

export default ProductList;
