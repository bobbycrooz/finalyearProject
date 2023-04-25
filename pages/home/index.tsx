// import type { NextPage } from 'next';
import SEO from 'src/interface/components/SEO';
// import BottomNav from '@components/bottomNav';
// import TopNav from '@components/topNav';
// import AdvertBanner from '@sections/AdvertBanner';
import SecondAdvertBanner from '@sections/SecondAdvertBanner';
// import Categories from '@sections/categories';
import TopDeals from '@sections/TopDeals';
import Collections from '@sections/collections';
import NewArival from '@sections/NewArival';
import Product from '@sections/products';
import Loader from '@components/loader';
import React, { ReactElement } from 'react';
import { useAuth } from '@contexts/authContext';
import { useProducts } from '@contexts/productContext';
import DashboardLayout from '@layout';
import { CgMoreO } from 'react-icons/cg';
import { GiMailShirt } from 'react-icons/gi';
import { RiComputerLine } from 'react-icons/ri';
import { HiOutlineDeviceMobile } from 'react-icons/hi';
import { BiCertification, BiChevronRight } from 'react-icons/bi';
// import {  } from 'react-icons/bi';
import Carousel from '@components/Carousel';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Home = () => {
	const [setLoader, toggleLoader] = React.useState(true);
	const data = useAuth();
	const { setProducts, products } = useProducts();
	const { push } = useRouter();
	const categoryArr = [
		{
			name: 'All',
			icon: <CgMoreO className="text-[24px]" />,
			link: '/more'
		},

		{
			name: 'fashion',
			icon: <GiMailShirt className="text-[24px]" />,
			link: '/fashion'
		},

		{
			name: 'computers',
			icon: <RiComputerLine className="text-[24px]" />,
			link: '/computers'
		},

		{
			name: 'phone',
			icon: <HiOutlineDeviceMobile className="text-[24px]" />,
			link: '/phones'
		},

		{
			name: 'more',
			icon: <BiCertification className="text-[24px]" />,
			link: '/Deals'
		}
	];

	const storeBanner = [
		'/carousel/store1.jpg',
		'/stores/store-phones.webp',
		'/carousel/store1.jpg',
		'/stores/store-phones.webp'
	]

	// console.log(products)

	function handleCatLink(link: string) {
		push({
			pathname: '/categories',
			query: { cat: link.toLowerCase() }
		});
	}

	// --------useEffect--------------

	React.useEffect(() => {
		setTimeout(() => {
			toggleLoader(false);
		}, 200);
	}, []);



	if (setLoader) {
		return <Loader visibility={true} />;
	}

	// console.log(data, "this is whats stored in state");

	return (
		<div className="homepage">
			<SEO title="home" />

			{/* CATEGORY LIST */}
			<div className="category-list p-2 px-4 space-x-2 middle shadow-sm bg-white">
				{categoryArr.map((item, key) => (
					<div
						role={'button'}
						onClick={() => handleCatLink(item.name)}
						key={key}
						className="category-item w-full flex flex-col items-center "
					>
						{item.icon}
						<h1 className="category-name capitalize text-sm">{item.name}</h1>
					</div>
				))}
			</div>

			<div className="h-2"></div>

			<div className="advert- my-2">
				<Carousel />
			</div>

			<div className="h-2"></div>

			{/* TOP 4 STORES */}
			<div className="stores w-full   px-4">
				<div className="store_card-container grid grid-cols-2 gap-2">
					{storeBanner
						.map((i, key) => (
							<div
								className="store_card w-full h-40   rounded relative"
								key={key}
							>

								{/* STORE BANNER */}
								<Image alt='store banner' src={i} layout='fill' />
								{/* STORE CARD BODY */}
								<div className="store_card-  w-full h-full flex justify-center ">
									{!true && (
										<div className="mt-3 text-center">
											<h1 className="header">bobmart</h1>
											<p className='text-xs text-gray-400'>all kind of gadgets and accessories</p>
										</div>
									)}
								</div>
								{!true && (
									<div className=" absolute bottom-2 px-5 w-full centered">
										<button className="px-3 middle p-1 br rounded-sm bg-yellow text-black ">
											<p className="shop  mb-1">shop now</p>
											<BiChevronRight className="text-2xl text-gray" />
										</button>
									</div>
								)}
							</div>
						))}
				</div>
			</div>

			{/* TOP DEALS */}
			<div className="top-deals w-full  px-4">
				<TopDeals />
			</div>

			{true && <NewArival />}

			<div className="best-selling w-full  px-4">
				<Product data={products} />
			</div>

			<div className="second-banner">
				<SecondAdvertBanner />
			</div>

			<div className="collections">
				<Collections />
			</div>
		</div>
	);
};

// interface AppProps {
// 	name: string;
// }
Home.getLayout = function getLayout(children: ReactElement) {
	return <DashboardLayout>{children}</DashboardLayout>;
};

export default Home;
