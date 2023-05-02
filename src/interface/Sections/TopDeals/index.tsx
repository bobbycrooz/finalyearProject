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
import { useProducts } from '@contexts/productContext';
import { useEffect, useState } from 'react';
import Loader from '@components/loader';
import SectionLoader from '@components/SectionLoader';

// TOP DEALS, DISPLAY ALL HOLINE AND FEATURED PRODUCTS
const TopDeals = () => {
	const { products } = useProducts();
	const [topDeals, setTopDeals] = useState<Array<any>>([]);

	console.log(topDeals);
	console.log(products, "products --");
	

	function Img(str: any) {
		let thumbnail = str[0];
		return String(thumbnail);
	}

	function getTopDealsFromProducts() {
		if (products.length > 0) {
			const topDealsArr = products.filter((i: { price: number }, a: any) => i.price < 50000);
			if (topDealsArr.length > 0) setTopDeals(topDealsArr);
		}
	}

	useEffect(() => {
		getTopDealsFromProducts();
	}, [products]);

	return (
		<div className=" w-full  my-4 ">
			{/* HEADER ROW */}
			<div className="row flex justify-between bg-amber-600 p-2 rounded-t-md">

				<h1 className="capitalze text-neutral-50 ">Top Deals</h1>
				<h1 className="capitalze underline text-neutral-100 text-xs">view more</h1>
			</div>

			{/* PRODUCT CAROUSEL */}
			<div className="carousel-section  flash-sales-carousel mt-4 ">
				{topDeals.length > 0 ? (
					<Swiper
						modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
						spaceBetween={10}
						slidesPerView={2.2}
						loop={true}
						autoplay={{
							delay: 2000,
							disableOnInteraction: false
						}}
						tag={'div'}
					>
						{topDeals?.map((item, index) => (
							<SwiperSlide key={index + 'yter'} className="rounded-md shadow  relative">
								<Link href={`/product?id=${item._id}`}>
									<div>
										{/* DISCOUNT TAG */}
										<div className="tag absolute top-3 left-0 rounded-r-2xl bg-red-500 z-10 p-2 text-white">
											<h1 className="text-white">25%</h1>
										</div>

										{/* PRODUCT IMAGE */}
										<div className="centered  p-2 product-image-box h-[100px]  ">
											{item.imageUrl[0] !== undefined ? (
												<Image
													alt=""
													src={Img(item.imageUrl)}
													height={80}
													width={70}
													layout="intrinsic"
												/>
											) : (
												<Image
													alt=""
													src={'/products/watch1.webp'}
													height={80}
													width={70}
													layout="intrinsic"
													className='br'
												/>
											)}
										</div>

										{/* PRODUCT DETAILS */}
										<div className="product-details p-2">
											<Text text={item.name} />
											<div className="price-row flex items-center ">
												<h1 className="text-blue text-sm">
													{item.price}
												</h1>

												<p className="text-gray original-price text-xs ml-3">
													{item.initialPrice}
												</p>
											</div>

											{/* <Text text={`${item.countLeft} items left`} /> */}
										</div>
									</div>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
				) : (
					<SectionLoader />
				)}
			</div>
		</div>
	);
};

export default TopDeals;
