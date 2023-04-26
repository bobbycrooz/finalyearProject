import type { NextPage } from 'next';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import Logo from '@images/logo1.png';
import Button from '@widget/Button';
import Text from '@widget/Text';
import InputField from '@widget/InputField';
import order from '@images/admin/order.svg';
import users from '@images/admin/Users.svg';
import category from '@images/admin/category.svg';
import TopNav from '@components/topNav';
import BottomNav from '@components/bottomNav';
import headset from '@images/headset.png';
import { Key, ReactElement, SetStateAction, useState } from 'react';
import CustomField from '@widget/CustomInput';
import { createNewProduct } from '@axios/admin';
// @ts-ignore
import { PickerOverlay } from 'filestack-react';
import DashboardLayout from '@layout';
import Product from '@sections/products';
import { useProducts } from '@contexts/productContext';

let tempArry: any[] = [];

const StoreReview = () => {
	const [showPicker, openPicker] = useState(false);
	const [isNewItem, setIsNew] = useState(false);
	const [isFlash, setIsFlash] = useState(false);
	const [isAvailable, setIsAvalable] = useState(false);
	const [newProductDetails, setNewProDetails] = useState<{ [key: string]: any }>({});

	const { setProducts, products } = useProducts();


	return (
		<div className="bg-admin add_new  w-screen relative">
			<SEO title="Store overview" />

			<div className="page_content w-full px-4 mt-[70px]">
				<div className="store_banner w-full h-[100px] bg-blue-300 relative">
					<div className="avatar absolute -bottom-1/2 left-6 bg-gray-50 rounded-full w-24 h-24 p-2">
						<div className="w-full h-full bg-blue-400 rounded-full"></div>
					</div>
				</div>
				<div className="info w-full mt-1 bg-gray-50 py-6 justify-between flex">
					<div></div>
					<div className="info_box text-right">
						<p className="name text-gray-600 font-std-medium capitalize text-xl">
							bobmart plaza
						</p>
						<p className="name text-gray-500 font-std-book capitalize text-sm">
							{' '}
							<span className="text-gray-300">by:</span> lazy bones
						</p>
					</div>
				</div>

				<div className="section-card mt-3">
					<h1 className="capitalize  font-std-medium text-gray-600">Description:</h1>
					<hr className="w-full my-2" />
					<p className=" font-std-book text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facilis fugit nam,
						natus consequuntur, eos officiis voluptatibus, ut minus sequi accusantium expedita
						debitis quibusdam ex adipisci voluptate? Porro, labore quam?
					</p>
				</div>

				<div className="section-card mt-3">
					<div className="header flex justify-between">
						<h1 className="capitalize  font-std-medium text-gray-500">products:</h1>

						<Button text={'Add'} ghost />
					</div>
					<hr className="w-full my-2" />
					<div className="w-full br h-auto">
						<div className="best-selling w-full px-4">
							<Product data={products} />
						</div>
					</div>
				</div>
			</div>

			{/* <Modal visibility={true}/> */}
		</div>
	);
};

interface AppProps {
	name: string;
}

StoreReview.getLayout = function getLayout(children: ReactElement) {
	return <DashboardLayout>{children}</DashboardLayout>;
};

export default StoreReview;
