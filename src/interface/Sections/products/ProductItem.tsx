// import Head from 'next/head';
import Image from 'next/image';
// import useRedux from '@hooks/useRedux';
// import SEO from 'src/interface/components/SEO';
// import LogoBag from '@images/logo-bag.svg';
// import Hamburger from '@images/hamburger.svg';
import chargerIcon from '@images/charger.svg';
import Link from 'next/link';
// import Button from '@widget/Button';
import Button, { Text } from '@widget/index';
import freepod from '@images/freepod.png';
import headset from '@images/headset.png';
import { cartTwo } from '@images/bottom-nav/bottomNavIcons';

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
import { useCarts } from '@contexts/cartContext';
import React from 'react';

const ProductItem = ({ item }: { item: any }) => {
	const [adding, setAdding] = React.useState(false);

	const { updateCartItem } = useCarts();

	function Img(str: any) {
		let thumbnail = str[0];

		return String(thumbnail);
	}

	// add product to cart
	async function submitValue(productID: string) {
		setAdding(true);

		await updateCartItem(productID, 1);

		setAdding(false);
	}

	return (
		<div className="display_product-card  w-full relative h-auto rounded-lg p-3 bg-white shadow-sm hover:shadow-md">
			{true && (
				<Badge badgeType={item.badge && item.badge.type} badgeValue={item.badge && item.badge.value} />
			)}

			{/* <div className="plus-box absolute right-0 bottom-0  middle">
					<div className="add-to-cart centered p-2   bg-gray text-white">
						<p className="plus  text-xl font-bold">+</p>
						<p className="add text-xm">Add</p>
					</div>
				</div> */}

			<div className="centered p-2 product-image-box ">
				{item.imageUrl[0] !== undefined ? (
					<Image alt="" src={Img(item.imageUrl)} height={80} width={70} layout="intrinsic" />
				) : (
					<Image alt="" src={headset} height={80} width={70} layout="intrinsic" />
				)}
			</div>

			<div className="action">
				<Text text={item.name} type="subtitle" customClass="" />

				<div className=" prices middle space-x-2 ">
					<Text text={item.price} type="title" customClass="text-blue" />
					<Text text={item.initialPrice} customClass="" />
				</div>
			</div>

			<div className="cto_btns w-full left-0 middle">
				<Link href={`/product?id=${item.id}`}>
					<div className="view centered bg-blue text-white border border-blue h-full w-full">
						view
					</div>
				</Link>

				<div
					role={'button'}
					title={'add to cart'}
					onClick={() => submitValue(item._id)}
					className="add centered  bg-white text-blue border border-blue h-full w-full"
				>
					{!adding ? (
						cartTwo(true)
					) : (
						<div className="loader-body">
							<div className="loader-body-roller two"></div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

const Badge = ({ badgeType, badgeValue }: { badgeType: string; badgeValue: string }) => {
	return <div className={`${badgeType} product-item-badge`}>{badgeValue}</div>;
};

export default ProductItem;
