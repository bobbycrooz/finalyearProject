import type { NextPage } from 'next';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import Logo from '@images/logo1.png';
import Button, { Text, InputField } from '@widget';
import TopNav from '@components/topNav';
import BottomNav from '@components/bottomNav';
import headset from '@images/headset.png';
import React, { ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';
import cancleBtn from '@images/cart/red-times.svg';
import OrdersModal from './orderModal';
import DashboardLayout from '@layout';
import Categories from '@sections/categories';
import Product from '@sections/products';
import { useRouter } from 'next/router';
import { useProducts } from '@contexts/productContext';
import { RiFilter2Fill } from 'react-icons/ri';
import { BiSort } from 'react-icons/bi';
import Carousel from '@components/Carousel';
import ProductList from '@components/ProductList';
import SectionLoader from '@components/SectionLoader';

const Category = () => {
	const [val, setVal] = useState(1);
	const [showModal, setShow] = useState(false);
	const [currentCategoryName, setCategoryName] = useState('phones');
	const { setProducts, products } = useProducts();
	const [result, setResult] = useState<[]>([]);
	const { pathname, query } = useRouter();
	const [showFilterList, setShowFL] = React.useState(false);

	const categorySearchValue = query.cat;
	const filterBy = ['mobile phone', 'accessories', 'computers','laptops'];

	function handleFilterBy(key: string) {

		filterByCat(key)
		handleShowFilterList()
	}

	function handleShowFilterList() {
		setShowFL((p) => !p);
	}


	// setCategoryName(String(categorySearchValue).toLowerCase());

	// handlers

	function filterByCat(categoryName: string) {

		if(categoryName) setCategoryName(categoryName);

		

		let filteredData = products?.filter((item: { category: string }) => item.category == categoryName);

		if (filteredData) {
			console.log(
				filteredData, 'the filtered data'
			);
			

			setResult(filteredData);
		}
	}


	useEffect(() => {
		filterByCat(String(categorySearchValue).toLowerCase());
	}, [pathname, categorySearchValue]);

	return (
		<div className="category w-screen h-screen relative space-y-2 bg-admin">
			<SEO title="caategories" />
			{/* VERTICAL SPACE */}
			<div className="space-from-top h-16 "></div>

			{/* PAGE HEADER */}
			<div className="section-card">
				<h1 className="w-full  text-center font-std-medium tn-6 capitalize">{String(categorySearchValue) || "Categories"}</h1>

				{/* <p className="body w-full text-center">1-40 of 1000 results</p> */}
			</div>

			{/* FILTER SECTION */}
			<div className="section-card middle justify-around  px-6 ">
				<button onClick={handleShowFilterList} className="filter middle px-6 space-x-2">
					<RiFilter2Fill />
					<h1 className="button_text">FILTER</h1>
				</button>

				<div className="line h-6 w-[2px] border border-red bg-red"></div>

				<button className="sort middle px-6 space-x-2">
					<BiSort />
					<h1 className="button_text">SORT</h1>
				</button>
			</div>
			{showFilterList && (
					<div className="section-card mt-1">
						<ul className="filterList  p-1 space-y-2">
							{filterBy.map((i, k) => (
								<li
								role='button'
								onClick={() => handleFilterBy(i)}
									key={k}
									className={`fil_item p-2 ${
										k != 2 && 'border-b'
									} text-gray-500 font-std-medium  capitalize`}
								>
									{i}
								</li>
							))}
						</ul>
					</div>
				)}

			{/* CTO BANNER */}
			<div className="cto_banner w-full h-28  "></div>

			{/* CATEGORIES CAROUSEL*/}
			<div className="">
				<Carousel />
			</div>

			{/* PRODUCT LISTING */}
			<div className="w-full mt-4">
				

				{result.length > 0  ? (<ProductList listType="list" data={result} />) : (<SectionLoader message={'No product in this store'}/>)}
			</div>

			<div className="space w-full h-[100px]"></div>

			<OrdersModal visibility={showModal} />
		</div>
	);
};

interface AppProps {
	name: string;
}

Category.getLayout = function getLayout(children: ReactElement) {
	return <DashboardLayout>{children}</DashboardLayout>;
};

export default Category;
