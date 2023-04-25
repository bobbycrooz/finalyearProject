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

// interface PropsTypes {
// 	text: string;
// }

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

// TOP DEALS, DISPLAY ALL HOLINE AND FEATURED PRODUCTS
const TopDeals = () => {
	return (
		<div className=" w-full  my-4 ">
			{/* HEADER ROW */}
			<div className="row flex justify-between bg-pink-400 p-2 rounded-t-md">
				<Text type="title" customClass="text-white" text="Top Deals for today" />

				<h1 className="capitalze">see more items</h1>
			</div>

			{/* PRODUCT CAROUSEL */}
			<div className="carousel-section  flash-sales-carousel mt-4 ">
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
					{flashSales.map((item, index) => (
						<SwiperSlide key={index + 'yter'} className="rounded-md shadow  relative">
							<Link href={`/product?id=${`giodgadfafadjjiad`}`}>
								<div>
									{/* DISCOUNT TAG */}
									<div className="tag absolute top-3 left-0 rounded-r-2xl bg-red z-10 p-2 text-white">
										<h1 className="text-white">25%</h1>
									</div>

									{/* PRODUCT IMAGE */}
									<div className="centered  p-2 product-image-box h-[100px]  ">
										<Image
											alt="product image"
											src={item.img}
											height={80}
											width={70}
										/>
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
		</div>
	);
};

export default TopDeals;
