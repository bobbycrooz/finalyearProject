// carousesl component with many features..

import Head from 'next/head';
import Image from 'next/image';
// import useRedux from '@hooks/useRedux';
// import SEO from 'src/interface/components/SEO';
// import LogoBag from '@images/logo-bag.svg';
import freepod from '@images/freepod.png';
import headset from '@images/headset.png';
// import chargerIcon from '@images/charger.svg';
// import Link from 'next/link';
import Button from '@widget/Button';
// import Text from '@widget/Text';
// import SearchBox from '@widget/SearchBox';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import { motion } from 'framer-motion';
import 'swiper/css/effect-fade';
// import Swiper and modules styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface BannaContentProps {
	name: string;
	img?: any;
	color: string;
	price: number;
}

let carouselArr: BannaContentProps[] = [
	{
		name: 'New Oraimo freebud 3',
		img: headset,
		color: 'blue',
		price: 16000
	},

	{
		name: 'Fast charging cable',
		img: freepod,
		color: 'red',
		price: 24000
	},

	{
		name: 'New Age power bank',
		img: headset,
		color: 'green',
		price: 34000
	}
];

const Carousel = () => {
	return (
		<div className="carousel-parentt-div ">
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
				spaceBetween={10}
				slidesPerView={1}
				effect="fade"
				pagination={{ clickable: true }}
				loop={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false
				}}
				// onSwiper={(swiper) => console.log(swiper)}
				// onSlideChange={() => console.log('slide change')}
				tag={'div'}
			>
				{carouselArr.map((item, index) => (
					<SwiperSlide key={index + 'yter'} className={` ${item.color}`}></SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

// <div className="min-w-[168px] ">
// 							<motion.h1 initial={{ x: 0 }} className="header1 w-full">
// 								{item?.name}
// 							</motion.h1>
// 							<h2 className="header2 mt-1">Now at #{item?.price}</h2>
// 							{!true && <p className="banner-text">{item?.img}</p>}

// 							<button className="btn-banner">Buy</button>
// 						</div>

// 						<div className="centered">
// 							<Image alt="" src={item.img} height={97} width={86} />
// 						</div>
export default Carousel;
