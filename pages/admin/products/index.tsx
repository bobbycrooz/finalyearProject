import type { NextPage } from 'next';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import Text from '@widget/Text';
import TopNav from '@components/topNav';
import BottomNav from '@components/bottomNav';
import headset from '@images/headset.png';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { getAllProducts } from '@axios/admin';
import SoftLoader from '@components/softLoader';
import { useProducts } from '@contexts/productContext';

const AdminProducts: NextPage = () => {
	const [val, setVal] = React.useState(1);
	const { setProducts, products } = useProducts();

	async function fetchProducts() {
		// @ts-ignore
		const { serverResponse, error } = await getAllProducts();
		console.log(serverResponse, error, 'reasonable response');

		if (!error) {
			setProducts(serverResponse.data);
		}
	}

	

	return (
		<div className="bg-admin product_list_page px-2 pb-20  w-screen relative">
			<SEO title="home" />

			<TopNav context="admin-products" searchSetter={setProducts} />

			{products?.length ? (
				<div className="product_list_container shadow-sm">
					{products.map(
						(
							item: {
								_id: any;
								name: string | number;
								category: string | number;
								count: any;
							},
							index: React.Key | null | undefined
						) => (
							<Link
								key={index}
								href={{
									pathname: '/admin/products/item',
									query: {
										id: item._id
									}
								}}
							>
								<div>
									<div className="px-2 my-2 product_item between  w-full p-4">
										<div className="details-info flex">
											<div className="product-image border p-1 w-[45px] h-[45px] border-gray centered rounded-md">
												<Image
													alt=""
													src={headset}
													width={45}
													height={45}
												/>
											</div>

											<div className="name-group ml-4">
												<Text
													text={item?.name}
													type="title"
													customClass="capitalize"
												/>
												<Text text={item?.category} />
											</div>
										</div>

										<div className="update-count-container ">
											<input
												type="number"
												name=""
												className="p-2 product-count border w-[50px] h-[45px] border-gray centered rounded-md"
												id=""
												maxLength={1}
												value={item.count || val}
												onChange={(e) => setVal(Number(e.target.value))}
											/>
										</div>
									</div>
									{true && (
										<div className="px-8">
											<hr className="dotted-line" />
										</div>
									)}
								</div>
							</Link>
						)
					)}
				</div>
			) : (
				// <div className="w-full p-6 centered h-auto mt-[180px]">
				// 	<Text text={'loading....'} type={'subtitle'} />
				// </div>
				<SoftLoader visibility={!!!products?.length} />
			)}

			<BottomNav />

			{/* <Modal visibility={true}/> */}
		</div>
	);
};

interface AppProps {
	name: string;
}

export default AdminProducts;
