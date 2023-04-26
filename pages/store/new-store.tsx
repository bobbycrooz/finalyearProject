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
import { createNewProduct } from '@axios/admin';
// @ts-ignore
import { PickerOverlay } from 'filestack-react';
import StoreModal from './storeModal';

let tempArry: any[] = [];

const AdminProducts: NextPage = () => {
	const [showPicker, openPicker] = useState(false);
	const [isNewItem, setIsNew] = useState(false);
	const [isFlash, setIsFlash] = useState(false);
	const [isAvailable, setIsAvalable] = useState(false);
	const [newProductDetails, setNewProDetails] = useState<{ [key: string]: any }>({});

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
		console.log(tempArry, 'the array before pushing');

		tempArry.push(imageLink);

		console.log(tempArry, 'the array after pushing');

		setNewProDetails({
			...newProductDetails,
			imageUrl: tempArry
		});

		openPicker(false);
	}

	async function submitProduct() {
		// @ts-ignore
		const { serverResponse, error } = await createNewProduct(newProductDetails);
		console.log(serverResponse, error, 'reasonable response');
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
				<button className=" add-new-button ">Creating new store</button>

				<div className="uploaded-image-container">
					{/* {tempArry && <Image width={200} height={200} src={} alt={'produuct image'} />} */}
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

					<div onClick={() => openPicker(true)} className="w-full border p-3">
						<Text text={'Select images'} type="title" customClass="" />
					</div>

					<div className="button-group middle space-x-6">
						<Button
							text="create"
							onClick={submitProduct}
							isLoading={false}
							disabled={!newProductDetails}
							customClass="update-button "
							full={true}
						/>
						{!true && <Text text={'create success'} type="success" customClass="" />}
					</div>
				</div>

				<div className="h-[80px]"></div>
			</div>

			<BottomNav />
			<StoreModal visibility={true}/>

			{/* <Modal visibility={true}/> */}
		</div>
	);
};

interface AppProps {
	name: string;
}

export default AdminProducts;
