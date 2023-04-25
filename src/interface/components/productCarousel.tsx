import Image from 'next/image';
import freepod from '@images/freepod.png';
import headset from '@images/headset.png';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import headsetW from '@images/product/headsetWhite.jpg';
import headsetB from '@images/product/headsetBlack.jpg';
import charger from '@images/product/3in1.jpg';
import { motion } from 'framer-motion';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let carouselArr = [
	headsetW,
headsetB,
charger,
	// "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	// "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	// "https://media.istockphoto.com/photos/music-tape-and-headphones-on-yellow-background-with-copy-space-flat-picture-id1267820953?k=20&m=1267820953&s=612x612&w=0&h=7z76r4N8dvB750UFaV4SAB65Lr58fcY5Z9lMkfUAHeU=",
	// 'https://media.istockphoto.com/photos/music-tape-and-headphones-on-yellow-background-with-copy-space-flat-picture-id1267820953?k=20&m=1267820953&s=612x612&w=0&h=7z76r4N8dvB750UFaV4SAB65Lr58fcY5Z9lMkfUAHeU=',
	// 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
];

const ProductCarousel = ({productImages} : {productImages?: Array<string>}) => {
	return (
		<div className="product_item_image-carousel">
			{productImages ? <Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Autoplay, EffectFade]}
				slidesPerView={1}
				// effect="fade"
				pagination={{ clickable: true }}
				navigation={true}
				loop={true}
				// autoplay={{
				// 	delay: 2000,
				// 	disableOnInteraction: false
				// }}
				// onSwiper={(swiper) => console.log(swiper)}
				// onSlideChange={() => console.log('slide change')}
			>
				{ productImages?.map((item, index) => (
					<SwiperSlide key={index + 'yter'} className={`p-4`}>
						<div className="placehoder display_image-inner  w-full h-[300px] centered">
							<Image
								src={item}
								placeholder={'blur'}
								blurDataURL={item}
								alt="product image one"
								height={200}
								width={200}
								layout={'intrinsic'}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>  : null }
		</div>
	);
};

interface BannaContentProps {
	name: string;
	img?: any;
	color: string;
	price: number;
}
export default ProductCarousel;
