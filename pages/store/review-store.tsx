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
import { Key, ReactElement, SetStateAction, useEffect, useState } from 'react';
import CustomField from '@widget/CustomInput';
import { createNewProduct } from '@axios/admin';
// @ts-ignore
import { PickerOverlay } from 'filestack-react';
import DashboardLayout from '@layout';
import Product from '@sections/products';
import { useProducts } from '@contexts/productContext';
import Related from '@sections/relatedProduct';
import StoreProducts from './StoreProducts';
import { BiPencil, BiPlug, BiPlus, BiStore } from 'react-icons/bi';
import Link from 'next/link';
import { useStores } from '@contexts/storeContext';
import { useAuth } from '@contexts/authContext';
import SectionLoader from '@components/SectionLoader';
import { useRouter } from 'next/router';

let tempArry: any[] = [];

const StoreReview = () => {
	const [showPicker, openPicker] = useState(false);
	const [isNewItem, setIsNew] = useState(false);
	const [isFlash, setIsFlash] = useState(false);
	const [isAvailable, setIsAvalable] = useState(false);
	const [newProductDetails, setNewProDetails] = useState<{ [key: string]: any }>({});
	const [currentStore, setCurrentStore] = useState<{ [key: string]: any }>({});
	// const [storeProducts, setStoreProducts] = useState([]);
	const { loggedInUser } = useAuth();
	const { query } = useRouter();

	// const { setProducts, products } = useProducts();
	const { stores, userStores, fetchStoreProducts, storeProducts } = useStores();

	// console.log(stores, 'this is the store from db');

	async function getStorePro() {
		if (query?.storeId) {
			await fetchStoreProducts(query?.storeId);
		} else {
			await fetchStoreProducts(stores[0]?.storeId);
		}
	}

	async function getCurrentStore() {
		if (query?.storeId) {
			const currentStore = stores.find(
				(store: { storeId: string | string[] | undefined }) => store.storeId === query?.storeId
			);
			setCurrentStore(currentStore);
		} else {
			setCurrentStore(stores[0]);
		}
	}

	useEffect(() => {
		getCurrentStore()
		getStorePro();
	}, []);


	

	return (
		<div className="bg-gray-50 add_new  w-screen h-screen relative ">
			<SEO title="Store overview" />

			{!currentStore?._id ? (
				<div className="h-screen bg-red-50  ">
					<div className="section-card centered flex flex-col ">
						<p className="name text-gray-600 font-std-medium  ">You dont have a store yet</p>

						<Link href={'/store'}>
							<div className="add_btn middle space-x-2 border-red-400 p-2 rounded-sm px-4 bg-red-400 text-red-50 mt-3">
								<div className="plus ">
									<BiStore className="text-red-50 font-std-book" />
								</div>
								<button className="add text-xs capitalize">create one</button>
							</div>
						</Link>
					</div>
				</div>
			) : (
				<div className="page_content w-full px-4 mt-[80px]">
					<div className="store_banner w-full h-[100px] bg-red-300 relative">
						<div className="store_banner w-full h-full ">
							<Image src={currentStore.cover[0]} layout={'fill'} alt="store banner" />
						</div>

						<div className="avatar absolute -bottom-1/2 left-6 bg-gray-50 rounded-full w-24 h-24 p-2">
							<div className="w-full h-full bg-red-300 text-2xl rounded-full centered text-red-50 capitalize">
								{currentStore.name.slice(0, 2) + '.'}
							</div>
						</div>
					</div>
					<div className="info w-full mt-1 bg-gray-50 py-6 justify-between flex">
						<div className=" flex items-end">
							<p></p>
							<p className="name text-gray-500 font-std-book capitalize text-sm">
								{' '}
								<span className="text-gray-300">category:</span> {currentStore.category}
							</p>
						</div>
						<div className="info_box text-right">
							<p className="name text-gray-600 font-std-medium capitalize text-xl">
								{currentStore.name}
							</p>
							<p className="name text-gray-500 font-std-book capitalize text-sm">
								{' '}
								<span className="text-gray-300">by:</span> {loggedInUser.username}
							</p>
						</div>
					</div>

					<div className="section-card mt-3">
						<h1 className="capitalize  font-std-medium text-gray-300">Description:</h1>
						<hr className="w-full my-2" />
						<p className=" font-std-book text-gray-500">{currentStore.description}</p>
					</div>

					<div className=" mt-4">
						<div className="header flex justify-between items-center">
							<h1 className="capitalize  font-std-medium text-gray-300">store product:</h1>

							{/* <Button text={'Add'} ghost /> */}

							<Link href={`/store/add-new?id=${currentStore.storeId}`}>
								<div className="add_btn middle space-x-2 border-red-400 p-2 rounded-sm px-4 bg-red-400 text-red-50">
									<div className="plus ">
										<BiPlus className="text-red-50 font-std-book" />
									</div>
									<button className="add text-xs">Add new</button>
								</div>
							</Link>
						</div>
						<hr className="w-full my-2" />
						<div className="">
							{storeProducts.length > 0 ? (
								<StoreProducts storeProducts={storeProducts} />
							) : (
								<SectionLoader message={'No product in this store'} />
							)}
						</div>
					</div>

					<div className="button_group middle w-full z-[100] justify-between mt-4 fixed bottom-[80px] left-0 p-2">
						<Link href={`/store`}>
							<div className="add_btn middle space-x-2 border border-red-400 w-full centered p-2 rounded-sm px-4 bg-red-50 text-red-400">
								<div className="plus ">
									<BiStore className="text-red-400 font-std-book" />
								</div>
								<button className="add text-xs"> New Store</button>
							</div>
						</Link>

						<div className="w-2"></div>

						<Link href={`/store/new-store?id=${currentStore.storeId}`}>
							<div className="add_btn middle space-x-2 border border-red-400 p-2 w-full centered rounded-sm px-4 bg-red-400 text-red-50">
								<div className="plus ">
									<BiPencil className="text-red-50 font-std-book" />
								</div>
								<button className="add text-xs">Update store</button>
							</div>
						</Link>
					</div>
				</div>
			)}

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
