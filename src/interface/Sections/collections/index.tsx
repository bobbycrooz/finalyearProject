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

const flashSales = [
	{
		name: 'New age',
		countLeft: '40',
		class: 'new-age'
	},

	{
		name: 'Oraimo ',
		class: 'oraimo',
		countLeft: '40'
	},

	{
		name: 'Oraimo ',
		class: 'philip',
		countLeft: '40'
	},

	{
		name: 'Oraimo ',
		class: 'apple',
		countLeft: '40'
	}
];

const FlashSales = () => {
	return (
		<div className=" w-full py-1 my-4">
			<div className="row flex justify-between  px-2 rounded-t-md">
				<h1 className="capitalze text-neutral-600 font-std-medium">Best selling</h1>
				<h1 className="capitalze underline text-amber-700 text-xs">view more</h1>
			</div>

			<div className="carousel-section  flash-sales-carousel mt-4">
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
					spaceBetween={10}
					slidesPerView={2.5}
					loop={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false
					}}
					// onSwiper={(swiper) => console.log(swiper)}
					// onSlideChange={() => console.log('slide change')}
					tag={'div'}
				>
					{flashSales.map((item, index) => (
						<SwiperSlide
							key={index + 'yter'}
							className={`brand_card rounded-md shadow ${item.class}`}
						>
							<div className="brand_card-text p-2">
								<Text text={item.name} customClass="text-md text-body" />

								<Text
									text={`${item.countLeft} new items`}
									customClass="text-xs text-body"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default FlashSales;
