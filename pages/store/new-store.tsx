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
import { Key, SetStateAction, useState } from 'react';
import CustomField from '@widget/CustomInput';
import { createStore } from '@axios/stores';
import { useAuth } from '@contexts/authContext';
// @ts-ignore
import { PickerOverlay } from 'filestack-react';
import StoreModal from './storeModal';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import { BiImage } from 'react-icons/bi';

let tempArry: any[] = [];

const AdminProducts: NextPage = () => {
	const [showPicker, openPicker] = useState(false);
	const [showModal, setShow] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { push } = useRouter();
	// const [isFlash, setIsFlash] = useState(false);
	// const [isAvailable, setIsAvalable] = useState(false);


	const { loggedInUser } = useAuth();

	const [newProductDetails, setNewProDetails] = useState<{ [key: string]: any }>({
		storeId: uuidv4(),
		email: loggedInUser.email
	});

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

	async function create(fieldName: string) {
		setIsLoading(true);

		const created = await submitStore();

		if (created) {
			setIsLoading(false);
			setShow(false);

			push('/store/review-store');
		}

		setShow(false);
	}

	function updateImage(res: { filesUploaded: { url: any }[] }) {
		const imageLink = res.filesUploaded[0].url;
		console.log(tempArry, 'the array before pushing');

		tempArry.push(imageLink);

		console.log(tempArry, 'the array after pushing');

		setNewProDetails({
			...newProductDetails,
			cover: tempArry
		});

		openPicker(false);
	}

	async function submitStore() {
		// @ts-ignore
		const { serverResponse, error } = await createStore(newProductDetails);

		console.log(newProductDetails, 'reasonable response', serverResponse, error);

		if (serverResponse && !error) {
			return true;
		}

		setIsLoading(false);
		console.log(serverResponse.message);
	}

	return (
		<div className="bg-admin add_new  w-screen relative">
			<SEO title="home" />

			<TopNav
				searchSetter={function (value: SetStateAction<never[]>): void {
					throw new Error('Function not implemented.');
				}}
			/>

			<div className="page_content w-full px-4 mt-[70px]">
				{/* <button className=" add-new-button ">Creating new store</button> */}
				<div
					//
					className="border-b border-red-500  bg-red-50 text-center px-4 p-3 h-12 mt-8 w-full"
				>
					<p className="text-sm text-red-500  capitalize font-std-medium">Create new store</p>
				</div>

				<div className="uploaded-image-container relative">
					{tempArry && <Image layout="fill" src={tempArry[0]} alt={'produuct image'} />}
				</div>

				<div className="product-details-card space-y-4">
					<CustomField
						change={getDetails}
						label={'Store name'}
						type={'text'}
						name={'name'}
						placeholder="bobmart"
					/>
					<CustomField
						change={getDetails}
						label={'Description'}
						type={'textarea'}
						placeholder="About your store"
						name={'description'}
					/>
					<CustomField
						change={getDetails}
						// change={(e) => catHandler(e,'category')}
						label={'Category'}
						type={'text'}
						placeholder="what "
						name={'category'}
					/>
					<div className="w-full middle space-x-1">
						<div className="rounded-full w-2 h-2 bg-gray-200"></div>
						<p className="text-xs text-gray-400">Category should be one of: </p>
					</div>

					{/* <div className="button-group middle space-x-6">
						<Button text="Update" isLoading={false} customClass="update-button " />
						<Text text={'Update success'} type="success" customClass="" />
					</div> */}
				</div>

				<div className="product-details-card space-y-4">
					<Text text={'Banner'} type="title" customClass="" />

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
						<p className="text-sm text-gray-50  capitalize">Select store banner</p>
					</div>

					<div className="button-group middle space-x-6">
						{/* <Button
							text="create"
							onClick={}
							isLoading={false}
							disabled={!newProductDetails}
							customClass="update-button "
							full={true}
						/> */}

						<div
							role="button"
							onClick={() => setShow((p) => !p)}
							className="rounded-md  bg-red-400 text-center px-4 p-3 h-12 mt-8 w-full"
						>
							<p className="text-sm text-gray-50  capitalize">create</p>
						</div>
						{!true && <Text text={'create success'} type="success" customClass="" />}
					</div>
				</div>

				<div className="h-[80px]"></div>
			</div>

			<BottomNav />
			<StoreModal
				visibility={showModal}
				isLoading={isLoading}
				setShow={() => setShow((p) => !p)}
				create={create}
			/>

			{/* <Modal visibility={true}/> */}
		</div>
	);
};

interface AppProps {
	name: string;
}

export default AdminProducts;
