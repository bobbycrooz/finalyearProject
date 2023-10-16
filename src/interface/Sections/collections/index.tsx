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

import { useStores } from '@contexts/storeContext';
import SectionLoader from '@components/SectionLoader';
import { BiCaretRight, BiChevronRight } from 'react-icons/bi';
import { useRouter } from 'next/router';

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
	const { stores, fetchStoreProducts, storeProducts } = useStores();
	const { push } = useRouter();

	console.log(stores, 'this is the store from collection conponent');

	function storeHandleer(storeId: string) {
		push({
			pathname: '/store/review-store',

			query: {
				storeId
			}
		});
	}

	return (
		<div className=" w-full py-1 my-4">
			<div className="row flex justify-between  px-2 rounded-t-md">
				<h1 className="capitalze text-neutral-600 font-std-medium">Available stores</h1>
				<h1 className="capitalze underline text-amber-700 text-xs">view more</h1>
			</div>

			<div className="carousel-section  flash-sales-carousel mt-4">
				{stores.length > 0 ? (
					<Swiper
						modules={[Autoplay]}
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
						{/* @ts-ignore */}
						{stores?.map((item, index) => (
							<SwiperSlide
								key={index + 'yter'}
								onClick={() => storeHandleer(item.storeId)} 
								className={`brand_card rounded-md shadow bg-white ${item.class} relative`}
							>
								{item.cover && <Image src={item?.cover[0]} alt="" layout="fill" />}

								<div className="brand_card-text p-2 middle justify-between">
									<h1 className="capitalze text-neutral-50 font-std-book text-xs">
										{item.name}
									</h1>

									<BiChevronRight className=" text-neutral-50 font-std-medium" />
								</div>
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

export default FlashSales;
