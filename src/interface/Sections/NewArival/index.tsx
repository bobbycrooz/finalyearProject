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
import { useProducts } from '@contexts/productContext';

import 'swiper/css/effect-fade';
// import Swiper and modules styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import SectionLoader from '@components/SectionLoader';
import Link from 'next/link';

// interface PropsTypes {
// 	text: string;
// }

const NewArrival = () => {
	const { products } = useProducts();
	const [newArrivalProducts, setNewArrPro] = useState<Array<any>>([]);

	function Img(str: any) {
		let thumbnail = str[0];
		return String(thumbnail);
	}

	function getNewArrivalFromProducs() {
		if (products.length > 0) {
			const topDealsArr = products.filter((i: { newItem: boolean }, a: any) => i.newItem == true);
			if (topDealsArr.length > 0) setNewArrPro(topDealsArr);
		}
	}

	useEffect(() => {
		getNewArrivalFromProducs();
	}, [products]);

	return (
		<div className=" w-full py-4 my-6 new-arriaval-container">
			<div className="row flex justify-between px-6">
				<h1 className="capitalze text-neutral-600 font-std-medium">New Items</h1>
				<h1 className="capitalze underline text-amber-700 text-xs">view more</h1>
			</div>

			<div className="carousel-section  new-arrival-carousel mt-4">
				{newArrivalProducts.length > 0 ? (
					<Swiper
						// install Swiper modules
						modules={[Navigation, Pagination, Scrollbar, FreeMode, Autoplay, EffectFade]}
						spaceBetween={5}
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
						{newArrivalProducts?.map((item, index) => (
							<SwiperSlide key={index + 'yter'} className="rounded-md shadow  bg-white">
								<Link href={`/product?id=${item._id}`}>
									<>
										<div className="centered  p-2 product-image-box ">
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
													className="br"
												/>
											)}
										</div>

										<div className="product-price  centered p-2">
											<h1 className="pill bg-yellow">{item.price}</h1>
										</div>
									</>
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

export default NewArrival;
