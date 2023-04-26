import type { NextPage } from 'next';
// import Head from 'next/head';
import Image from 'next/image';
// import useRedux from '@hooks/useRedux';
// import SEO from 'src/interface/components/SEO';
// import LogoBag from '@images/logo-bag.svg';
// import Hamburger from '@images/hamburger.svg';
import chargerIcon from '@images/charger.svg';
// import Link from 'next/link';
// import Button from '@widget/Button';
import { Text } from '@widget/index';
import freepod from '@images/freepod.png';
import headset from '@images/headset.png';
// import SearchBox from '@widget/SearchBox';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import 'swiper/css/effect-fade';
// import Swiper and modules styles
// Import Swiper styles
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

const StoreProducts = () => {
	return (
		<div className=" w-full py-1">
			<div className="row flex justify-between">
			{/* <h1 className="capitalize  font-std-medium text-gray-500">products in store</h1> */}
				

				{/* <h1 className="ends text-red mr-6">
					<strong className="text-gray">Ends:</strong>
					00 - 00 - 00
				</h1> */}
			</div>

			<div className="carousel-section  flash-sales-carousel mt-1">
				<Swiper
					// install Swiper modules
					modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
					spaceBetween={10}
					slidesPerView={2.5}
					// effect="fade"
					// pagination={{ clickable: true }}
					loop={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false
					}}
					// scrollbar={{ draggable: true }}
					// onSwiper={(swiper) => console.log(swiper)}
					// onSlideChange={() => console.log('slide change')}
					tag={'div'}
				>
					{flashSales.map((item, index) => (
						<SwiperSlide key={index + 'yter'} className="rounded-md shadow bg-white">
							<Link href={'/product?=sjfiaoidfhkasdhfk'}>
								<div>
									<div className="centered  p-2 product-image-box">
										<Image
											alt="product image"
											src={item.img}
											height={80}
											width={70}
										/>
									</div>

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

										<Text text={`${item.countLeft} items left`} />
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

export default StoreProducts;
