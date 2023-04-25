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

const Category = () => {
	const [val, setVal] = useState(1);
	const [showModal, setShow] = useState(false);
	const [currentCategoryName, setCategoryName] = useState('phones');
	const { setProducts, products } = useProducts();
	const [result, setResult] = useState<[]>([]);
	const { pathname, query } = useRouter();

	const categorySearchValue = query.name;
	console.log(categorySearchValue);

	// setCategoryName(String(categorySearchValue).toLowerCase());

	// handlers

	function filterByCat(categoryName: string) {
		console.log('filter start');

		setCategoryName(categoryName);
		console.log('here is wjat you are looking for:', categoryName);

		let filteredData = products?.filter((item: { category: string }) => item.category == categoryName);

		if (filteredData) {
			console.log(filteredData);

			setResult(filteredData);
			console.log('done');
		}
		console.log('filter ends and your result was based on ', currentCategoryName);
	}

	// console.log(query, 'before useEffect');

	useEffect(() => {
		// compute result for category name
		filterByCat(String(categorySearchValue).toLowerCase());
	}, [pathname, categorySearchValue]);

	return (
		<div className="category w-screen h-screen relative space-y-2 bg-admin">
			<SEO title="caategories" />
			{/* VERTICAL SPACE */}
			<div className="space-from-top h-16 "></div>

			{/* PAGE HEADER */}
			<div className="section-card">
				<h1 className="w-full header-big text-center font-std-medium">Fashion Store</h1>

				<p className="body w-full text-center">1-40 of 1000 results</p>
			</div>

			{/* FILTER SECTION */}
			<div className="section-card middle justify-around  px-6 ">
				<button className="filter middle px-6 space-x-2">
					<RiFilter2Fill />
					<h1 className="button_text">FILTER</h1>
				</button>

				<div className="line h-6 w-[2px] border border-red bg-red"></div>

				<button className="sort middle px-6 space-x-2">
					<BiSort />
					<h1 className="button_text">SORT</h1>
				</button>
			</div>

			{/* CTO BANNER */}
			<div className="cto_banner w-full h-28  "></div>

			{/* CATEGORIES CAROUSEL*/}
			<div className="">
				<Carousel />
			</div>

			{/* PRODUCT LISTING */}
			<div className="w-full mt-4">
				<ProductList listType="list" />
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
