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
		price: 300
	},

	{
		name: 'Bob the assassin',
		img: freepod,
		color: 'red',
		price: 54000
	},

	{
		name: 'New Age Iphone series',
		img: headset,
		color: 'green',
		price: 34000
	}
];

const Carousel = () => {
	return (
		<div className="carousel-parentt-div">
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
				spaceBetween={10}
				slidesPerView={1}
				effect="fade"
				// pagination={{ clickable: true }}
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
					<SwiperSlide key={index + 'yter'} className='second-advert-banner centered'>
						
						<h1 className="text-white mx-auto text-2xl font-std-book">
							Place you adds here
						</h1>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Carousel;
