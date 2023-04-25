import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import LogoBag from '@images/logo-bag.svg';
import Hamburger from '@images/hamburger.svg';
//first advert banner section
// uses carousel from carousel component


import chargerIcon from '@images/charger.svg'

import Link from 'next/link';
import Button from '@widget/Button';
import Text from '@widget/Text';
import SearchBox from '@widget/SearchBox';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import 'swiper/css/effect-cards';
// import Swiper and modules styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Carousel from '@components/Carousel';

interface PropsTypes {
	text: string;
}


const FirstCarousel = () => {

	return (
		<div className='w-full'>
			<Carousel />
		</div>
	);
};



export default FirstCarousel;
