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
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

// interface PropsTypes {
// 	text: string;
// }

const StoreProducts = ({ storeProducts }: { storeProducts?: any }) => {

	function Img(str: any) {
		let thumbnail = str[0];

		return String(thumbnail);
	}
	return (
		<div className=" w-full py-1">
		

			<div className="carousel-section  flash-sales-carousel  mt-1">
				<Swiper
					modules={[ EffectFade]}
					spaceBetween={10}
					slidesPerView={2.5}
				
				
					
					tag={'div'}
				>
					{storeProducts?.map(
						(
							item: any,
							index: number
						) => (
							<SwiperSlide
								key={index + 'yter'}
								className="rounded-md shadow border border-red-100 bg-white"
							>
								<Link href={`/product?=${item?._id}`}>
									<div>
										<div className="centered  p-2 product-image-box w-full h-[100px] ">
											<div className="relative w-full h-full">
												{item.imageUrl[0] !== undefined ? (
													<Image
														alt=""
														src={Img(item.imageUrl)}
														// height={80}
														// width={70}
														layout="fill"
													/>
												) : (
													<Image
														alt=""
														src={'/stores/store-phones.webp'}
														// height={80}
														// width={70}
														layout="fill"
													/>
												)}
											</div>
										</div>

										<div className="product-details p-2">
											<Text text={item.name} caps/>
											<div className="price-row flex items-center ">
												<h1 className="text-blue text-sm">
													{item.initialPrice}
												</h1>

												<p className="text-neutral-500 original-price text-xs ml-3">
													{item.price}
												</p>
											</div>

											{/* <Text text={`5 items left`} type='body' customClass='text-xs' /> */}
										</div>
									</div>
								</Link>
							</SwiperSlide>
						)
					)}
				</Swiper>
			</div>
		</div>
	);
};

export default StoreProducts;
