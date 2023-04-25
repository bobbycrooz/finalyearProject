import headsetW from '@images/product/headsetWhite.jpg';
import headsetB from '@images/product/headsetBlack.jpg';
import charger from '@images/product/3in1.jpg';
import ProductItem from './ProductItem';
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
		originalPrice: '50,000',
		countLeft: '40',
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

function Img(str: any) {
	let thumbnail = str[0];

	return String(thumbnail);
}

const BestSellingProduct = ({ title, data }: { title?: string; data: [] }) => {
	const { setProducts, products } = useProducts();

	console.log(products);

	return (
		<div className=" w-full  my-4 ">
			{/* HEADER ROW */}
			<div className="row flex justify-between bg-admin p-2 rounded-t-md">
				<Text type="title" customClass="" caps text="best selling " />

				<h1 className="capitalze">see more items</h1>
			</div>

			{/* PRODUCT CAROUSEL */}
			<div className="carousel-section  flash-sales-carousel mt-2 ">
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, EffectFade]}
					spaceBetween={10}
					slidesPerView={2.2}
					loop={true}
					// autoplay={{
					// 	delay: 2000,
					// 	disableOnInteraction: false
					// }}
					tag={'div'}
				>
					{/* @ts-ignore */}
					{products.map((item, index) => (
						<SwiperSlide key={index + 'yter'} className="rounded-md shadow  relative">
							<Link href={`/product?id=${item._id}`}>
								<div>
									{/* PRODUCT IMAGE */}
									<div className="centered  p-2 product-image-box h-[100px]  ">
									{item.imageUrl[0] !== undefined ? (
					<Image alt="" src={Img(item.imageUrl)} height={80} width={70} layout="intrinsic" />
				) : (
					<Image alt="" src={headset} height={80} width={70} layout="intrinsic" />
				)}
									</div>

									{/* PRODUCT DETAILS */}
									<div className="product-details p-2">
										<Text text={item.name} />
										<div className="price-row flex items-center ">
											<h1 className="text-blue text-sm">
												{item.flashPrice}
											</h1>

											<p className="text-gray original-price text-xs ml-3">
												{item.originalPrice}
											</p>
										</div>

										{/* <Text text={`${item.countLeft} items left`} /> */}
									</div>
								</div>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* BY CATEGORIES */}
			<div className="row flex justify-between bg-admin p-2 rounded-t-md mt-2">
				<Text type="title" customClass="" caps text="by categories " />

				{/* <h1 className="capitalze">see more items</h1> */}
			</div>
			<div className="carousel-section  flash-sales-carousel mt-2">
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, EffectFade]}
					spaceBetween={10}
					slidesPerView={2.8}
					loop={true}
					tag={'div'}
				>
					{ProductsCategory.map((item, index) => (
						<SwiperSlide key={index + 'yter'} className="rounded-md shadow  relative">
							<Link href={`/categories?cat=${item.name}`}>
								<div>
									{/* PRODUCT IMAGE */}
									<div className="centered  relative product-image-box h-[100px]  ">
										<Image
											alt="product image"
											src={item.img}
											height={90}
											width={90}
										/>
									</div>

									{/* PRODUCT DETAILS */}
									<div className="product-details p-2 centered text-center">
										<Text text={item.name} />

										{/* <Text text={`${item.countLeft} items left`} /> */}
									</div>
								</div>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);

	// return (
	// 	<div className=" w-full px-2  my-6 product br bg-gray-100">
	// 		<div className="row flex justify-between ">
	// 			<Text type="title" customClass="" text={`${title || 'Top Product'}`} />

	// 			<h1 className="ends text-blue">view all</h1>
	// 		</div>

	// 		{!!data?.length ? (
	// 			<div className="grid grid-cols-2 gap-3 mt-3 ">
	// 				{data.map((item: any, key: any) => (
	// 					<div key={`serial ${key}`}>
	// 						<ProductItem item={item} />
	// 					</div>
	// 				))}
	// 			</div>
	// 		) : (
	// 			<SkelectonLoader />
	// 		)}
	// 	</div>
	// );
 };

export default BestSellingProduct;
