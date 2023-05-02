import type { NextPage } from 'next';
// import Head from 'next/head';
import Image from 'next/image';
// import Styled from 'styled-components';
// import useRedux from '@hooks/useRedux';
import SEO from 'src/interface/components/SEO';
// import LogoAnimate from '@images/logo-animate.gif';
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
import React, { useEffect } from 'react';
import CustomField from '@widget/CustomInput';
import { useRouter } from 'next/router';
import { useProducts } from '@contexts/productContext';
const AdminProducts: NextPage = () => {
	const [val, setVal] = React.useState(1);
	const { setProducts, products } = useProducts();
	const [currentProduct, setCurrentProduct] = React.useState<{
		_id: string;
		name: string;
		description: string;
		category: string;
		imageUrl: string[];
		uuid: string;
		price: number;
		initialPrice: number;
		count: number;
		isFlash: boolean;
		newItem: boolean;
		isAvailable: boolean;
		__v: number;
		// @ts-ignore
	}>({});
	const [isOn, setIsOn] = React.useState(false);
	const router = useRouter();


	function getProductDetailsFromStore() {
		const { query } = router;

		let Product = products.filter((item: { _id: string }) => item._id === String(query.id));

		setCurrentProduct(Product[0]);
	}


	useEffect(() => {
		getProductDetailsFromStore();
	}, []);

	return (
		<div className="bg-admin add_new  w-screen relative">
			<SEO title="home" />

			<TopNav
				searchSetter={function (value: React.SetStateAction<never[]>): void {
					throw new Error('Function not implemented.');
				}}
			/>

			<div className="page_content w-full px-4 mt-[70px]">
				<div className={` product-action-tab  ${isOn && 'off'}`}>
					<div className="tab-active"></div>

					<div onClick={() => setIsOn(!isOn)} className="tab-btns-container">
						<button className={`tab-btn ${isOn && 'off'}`}>view</button>
						<button className={`tab-btn ${!isOn && 'off'}`}>Edit</button>
					</div>
				</div>

				<div className="uploaded-image-container">
					{currentProduct?.imageUrl?.length && (
						<Image
							width={200}
							height={200}
							src={currentProduct.imageUrl[0]}
							alt={'produuct image'}
						/>
					)}
				</div>

				<div className="product-details-card space-y-4">
					<CustomField label={'Name'} type={'text'} placeholder={currentProduct?.name} name={''} />
					<CustomField
						label={'Description'}
						type={'textarea'}
						placeholder={currentProduct?.description}
						name={''}
					/>
					<CustomField
						label={'Category'}
						type={'text'}
						placeholder={currentProduct?.category}
						name={''}
					/>

					<div className="grid grid-cols-2  gap-3">
						<CustomField
							label={'Display price'}
							type={'price'}
							placeholder={String(currentProduct?.price)}
							name={''}
						/>
						<CustomField
							label={'Last price'}
							type={'price'}
							placeholder={String(currentProduct?.price)}
							name={''}
						/>
						<CustomField
							label={'Initial price'}
							type={'price'}
							placeholder={String(currentProduct?.initialPrice)}
							name={''}
						/>
						<CustomField
							label={'Count'}
							type={'count'}
							placeholder={String(currentProduct?.count)}
							name={''}
						/>
					</div>

					<div className="button-group middle space-x-6">
						<Button text="Update" isLoading={false} customClass="update-button " />
						<Text text={'Update success'} type="success" customClass="" />
					</div>
				</div>

				<div className="product-details-card space-y-4">
					<Text text={'Photos'} type="title" customClass="" />

					<div className="current-uploaded  w-fullh-[80px] grid grid-cols-3 gap-2">
						{Array(3)
							.fill(1)
							.map((item, index) => (
								<div
									key={index}
									className="product_images bg-lightGray w-full h-[70px] centered"
								>
									<Text text={'Image one'} customClass="" />
								</div>
							))}
					</div>

					<CustomField label={''} type={'text'} placeholder="Image url" name={''} />

					{/*  */}
					<div className="toggle-box px-4 p-6">
						<Text text={'Flash Sale'} type="title" customClass="" />

						<div className={`toggler ${!isOn && 'off'}`} onClick={() => setIsOn(!isOn)}>
							<div className="indicator">
								<span className="indicator-point"></span>
							</div>
						</div>
					</div>

					<div className="toggle-box px-4 p-6">
						<Text text={'New Arrival'} type="title" customClass="" />

						<div className={`toggler ${!isOn && 'off'}`} onClick={() => setIsOn(!isOn)}>
							<div className="indicator">
								<span className="indicator-point"></span>
							</div>
						</div>
					</div>

					<div className="toggle-box px-4 p-6">
						<Text text={'Available'} type="title" customClass="" />

						<div className={`toggler ${isOn && 'off'}`} onClick={() => setIsOn(!isOn)}>
							<div className="indicator">
								<span className="indicator-point"></span>
							</div>
						</div>
					</div>
					{/*  */}

					<div className="button-group middle space-x-6">
						<Button text="Update" isLoading={false} customClass="update-button " />
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
