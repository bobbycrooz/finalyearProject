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
import { Navigation, Pagination, Scrollbar, FreeMode, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import 'swiper/css/effect-fade';
// import Swiper and modules styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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

const NewArrival = () => {
	return (
		<div className=" w-full py-4 my-6 new-arriaval-container">
			<div className="row flex justify-between px-6">
				<Text type="title" customClass="" text="New Arrival" />

				<h1 className="ends text-blue">view more</h1>
			</div>

			<div className="carousel-section  new-arrival-carousel mt-4">
				<Swiper
					// install Swiper modules
					modules={[Navigation, Pagination, Scrollbar, FreeMode, Autoplay, EffectFade]}
					spaceBetween={10}
					slidesPerView={3.5}
					freeMode={true}
					// effect="fade"
					// pagination={{ clickable: true }}
					loop={true}
					autoplay={{
						delay: 1,
						disableOnInteraction: false
					}}
					speed={7200}
					// scrollbar={{ draggable: true }}
					// onSwiper={(swiper) => console.log(swiper)}
					// onSlideChange={() => console.log('slide change')}
					tag={'div'}
				>
					{flashSales.map((item, index) => (
						<SwiperSlide key={index + 'yter'} className="rounded-md shadow">
							<div className="centered  p-2 product-image-box">
								<Image alt='product image' src={item.img} height={80} width={70} />
							</div>

							<div className="product-price  centered p-2">
								<h1 className="pill bg-yellow">{item.flashPrice}</h1>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default NewArrival;
