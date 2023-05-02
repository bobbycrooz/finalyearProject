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
import { Key, SetStateAction, useEffect, useState } from 'react';
import CustomField from '@widget/CustomInput';
import { createNewProduct } from '@axios/admin';
// @ts-ignore
import { PickerOverlay } from 'filestack-react';
import { useRouter } from 'next/router';
import { useStores } from '@contexts/storeContext';
import { BiImage } from 'react-icons/bi';
import Loader from '@components/loader';

let tempArry: any[] = [];

const AdminProducts: NextPage = () => {
	const [showPicker, openPicker] = useState(false);
	const [isNewItem, setIsNew] = useState(false);
	const [isFlash, setIsFlash] = useState(false);
	const [isAvailable, setIsAvalable] = useState(false);
	const [currentStoreDetails, setDetails] = useState<{ [key: string]: any }>({});
	const { stores } = useStores();
	const [isLoading, setIsLoading] = useState(false);


	const [newProductDetails, setNewProDetails] = useState<{ [key: string]: any }>({
		storeId: currentStoreDetails.storeId
	});
	const { query } = useRouter();

	// console.log(newProductDetails, showPicker);

	// upload product details
	function getDetails(e: { target: { value: string } }, fieldName: string) {
		let fieldValue = e && e.target.value;

		// if (errMsg) {
		// 	return Notify('error', errMsg);
		// }
		setNewProDetails({
			...newProductDetails,
			[fieldName]: fieldValue
		});
	}

	function toggleHandler(fieldName: string) {
		if (newProductDetails[fieldName]) {
			return setNewProDetails({
				...newProductDetails,
				[fieldName]: !newProductDetails[fieldName]
			});
		}

		setNewProDetails({
			...newProductDetails,
			[fieldName]: true
		});
	}

	function updateImage(res: { filesUploaded: { url: any }[] }) {
		const imageLink = res.filesUploaded[0].url;

		tempArry.push(imageLink);


		setNewProDetails({
			...newProductDetails,
			imageUrl: tempArry
		});

		openPicker(false);
	}

	async function submitProduct() {


		if(!newProductDetails.name && !newProductDetails.category){
			return console.log('name is required')


		}

		setIsLoading(true)
		// @ts-ignore
		const { serverResponse, error } = await createNewProduct(newProductDetails);
		// console.log(newProductDetails, currentStoreDetails, '----reasonable response');
		setIsLoading(false)

	}

	async function getUserStoreFromQ() {
		let storeId = query.id;

		const currentStore = stores.filter(
			(i: { storeId: string | string[] | undefined }, a: any) => i.storeId === storeId
		);
		// @ts-ignore
		if (currentStore.length > 0) setDetails(currentStore[0]);

		setNewProDetails({
			...newProductDetails,
			storeId: currentStore[0].storeId
		});

	}

	useEffect(() => {
		getUserStoreFromQ();
	}, []);

	return (
		<div className="bg-admin add_new  w-screen relative">
			<SEO title="home" />

			<TopNav
				searchSetter={function (value: SetStateAction<never[]>): void {
					throw new Error('Function not implemented.');
				}}
			/>

			<div className="page_content w-full px-4 mt-[70px]">
				<div
					//
					className="border-b border-red-500  bg-red-50 text-center px-4 p-3 h-12 mt-8 w-full"
				>
					<p className="text-sm text-red-500  capitalize font-std-medium">
						Add product to srore: {currentStoreDetails?.name?.slice(0, 4) + ' ...'}
					</p>
				</div>

				<div className="uploaded-image-container relative">
					{tempArry.length > 0 ? (
						tempArry && <Image layout="fill" src={tempArry[0]} alt={'produuct image'} />
					) : (
						<div className="text-sm">No product image selected</div>
					)}
				</div>

				<div className="product-details-card space-y-4">
					<CustomField
						change={getDetails}
						label={'Name'}
						type={'text'}
						name={'productName'}
						placeholder="Oraimo free pod 3"
					/>
					<CustomField
						change={getDetails}
						label={'Description'}
						type={'textarea'}
						placeholder="What's new in town"
						name={'description'}
					/>
					<CustomField
						change={getDetails}
						label={'Category'}
						type={'text'}
						placeholder="eg. phones"
						name={'category'}
					/>

					<div className="grid grid-cols-2  gap-3">
						<CustomField
							change={getDetails}
							label={'Display price'}
							type={'price'}
							placeholder="23000"
							name={'displayPrice'}
						/>
						<CustomField
							change={getDetails}
							label={'Last price'}
							type={'price'}
							placeholder="13000"
							name={'lastPrice'}
						/>
						<CustomField
							change={getDetails}
							label={'Initial price'}
							type={'price'}
							placeholder="53000"
							name={'initialPrice'}
						/>
						<CustomField
							change={getDetails}
							label={'Count'}
							type={'count'}
							placeholder="34"
							name={'productCount'}
						/>
					</div>

					{/* <div className="button-group middle space-x-6">
						<Button text="Update" isLoading={false} customClass="update-button " />
						<Text text={'Update success'} type="success" customClass="" />
					</div> */}
				</div>

				<div className="product-details-card space-y-4">
					<Text text={'Photos'} type="title" customClass="" />

					{/* <div className="current-uploaded  w-fullh-[80px] grid grid-cols-3 gap-2">
						{newProductDetails.imageUrl &&
							newProductDetails.imageUrl.map(
								(_item: any, index: Key | null | undefined) => (
									<div
										key={index}
										className="product_images bg-lightGray w-full h-[70px] centered"
									>
										<Image src={_item} alt={'blablue'} />
									</div>
								)
							)}
					</div> */}

					<CustomField label={''} type={'text'} placeholder="Image url" name={''} />

					{showPicker && (
						<PickerOverlay
							apikey={'Abo3bgRC5TBCi0kYgbwsSz'}
							onSuccess={(res: any) => updateImage(res)}
							onUploadDone={(res: any) => openPicker(false)}
						/>
					)}

					<div
						onClick={() => openPicker(true)}
						className="rounded-md middle justify-center space-x-2  bg-red-400 text-center px-4 p-3 h-12 mt-8 w-ful"
					>
						<div className="plus ">
							<BiImage className="text-red-50 font-std-book" />
						</div>
						<p className="text-sm text-gray-50  capitalize">Select product image</p>
					</div>

					<div className="toggle-box  px-4 p-6">
						<Text text={'New Item'} type="title" customClass="" />

						<div
							role={'button'}
							onClick={() => toggleHandler('isNew')}
							title={'toggle'}
							className={`toggler ${!newProductDetails['isNew'] && 'off'}`}
						>
							<div className="indicator">
								<span className="indicator-point"></span>
							</div>
						</div>
					</div>
					{/*  */}
					<div className="toggle-box  px-4 p-6">
						<Text text={'Flash sales'} type="title" customClass="" />

						<div
							role={'button'}
							onClick={() => toggleHandler('isFlash')}
							title={'toggle'}
							className={`toggler ${!newProductDetails['isFlash'] && 'off'}`}
						>
							<div className="indicator">
								<span className="indicator-point"></span>
							</div>
						</div>
					</div>
					{/*  */}
					<div className="toggle-box  px-4 p-6">
						<Text text={'Is Available'} type="title" customClass="" />

						<div
							role={'button'}
							onClick={() => toggleHandler('isAvailable')}
							title={'toggle'}
							className={`toggler ${!newProductDetails['isAvailable'] && 'off'}`}
						>
							<div className="indicator">
								<span className="indicator-point"></span>
							</div>
						</div>
					</div>

					{/*  */}

					{/* <Toggler  updater={setIsNew} label={'Flash sales'} />

					

					<Toggler  updater={setIsFlash} label={'New item'} />

					<Toggler  updater={setIsAvalable} label={'Is Available'} /> */}

					{/*  */}

					<div
						role="button"
						onClick={submitProduct}
						className="rounded-md  bg-red-400 text-center px-4 p-3 h-12 mt-8 w-full"
					>
						<p className="text-sm text-gray-50  capitalize">Add this product</p>
					</div>
				</div>

				<div className="h-[80px]"></div>
				<Loader visibility={isLoading}/>

			
			</div>

			<BottomNav />

			{/* <Modal visibility={true}/> */}
		</div>
	);
};

interface AppProps {
	name: string;
}

export default AdminProducts;
