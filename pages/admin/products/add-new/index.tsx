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

let tempArry: any[] = [];

const AdminProducts: NextPage = () => {
	const [showPicker, openPicker] = useState(false);
	const [isNewItem, setIsNew] = useState(false);
	const [isFlash, setIsFlash] = useState(false);
	const [isAvailable, setIsAvalable] = useState(false);
	const [newProductDetails, setNewProDetails] = useState<{ [key: string]: any }>({});

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
		// @ts-ignore
		const { serverResponse, error } = await createNewProduct(newProductDetails);
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
				<button className=" add-new-button ">add new product</button>

				<div className="uploaded-image-container">
					{tempArry && <Image width={200} height={200} src={tempArry[0]} alt={'produuct image'} />}
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
						placeholder="23000"
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

					<div className="button-group middle space-x-6">
						<Button text="Update" isLoading={false} customClass="update-button " />
						<Text text={'Update success'} type="success" customClass="" />
					</div>
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

					<div onClick={() => openPicker(true)} className="w-full border">
						<Text text={'select images'} type="title" customClass="" />
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

					<div className="button-group middle space-x-6">
						<Button
							text="Update"
							onClick={submitProduct}
							isLoading={false}
							disabled={!newProductDetails}
							customClass="update-button "
						/>
						<Text text={'Update success'} type="success" customClass="" />
					</div>
				</div>

				<div className="h-[80px]"></div>
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
