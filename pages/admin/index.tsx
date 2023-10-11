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
import graph1 from '@images/admin/graph1.svg';
import graph2 from '@images/admin/graph2.svg';
import graph3 from '@images/admin/graph3.svg';
import graph4 from '@images/admin/graph4.svg';
import productIcon from '@images/admin/Suitcase.svg';
import Link from 'next/link';
import React from 'react';
import Loader from '@components/loader';
import SoftLoader from '@components/softLoader';

const Admin: NextPage = () => {
	const [setLoader, toggleLoader] = React.useState(!true);

	const overviewArray = [
		{
			cardName: 'total users',
			count: 459
		},

		{
			cardName: 'total profits',
			count: 459
		},

		{
			cardName: 'total orders',
			count: 459
		},

		{
			cardName: 'total categories',
			count: 459
		},

		{
			cardName: 'total products',
			count: 459
		}
	];

	function graphType(name: string) {
		switch (name) {
			case 'total users':
				return graph1;

			case 'total orders':
				return graph2;

			case 'total categories':
				return graph3;

			case 'total products':
				return graph4;

			case 'total profits':
				return graph2;

			default:
				return graph3;
		}
	}

	function iconType(name: string) {
		switch (name) {
			case 'total users':
				return users;

			case 'total orders':
				return order;

			case 'total categories':
				return category;

			case 'total products':
				return productIcon;

			case 'total profits':
				return productIcon;

			default:
				return graph3;
		}
	}

	React.useEffect(() => {
		setTimeout(() => {
			toggleLoader(false);
		}, 1500);
	}, []);

	if (setLoader) {
		return <Loader visibility={true} />;
	}

	return (
		<div className="bg-admin admin  w-screen relative">
			<SEO title="home" />

			<TopNav
				searchSetter={function (value: React.SetStateAction<never[]>): void {
					throw new Error('Function not implemented.');
				}}
			/>

			<div className="overview-container">
				<div className="overview-grid grid grid-cols-2 gap-3">
					{overviewArray?.map((item, index) => (
						<Link key={index} href="/admin/products">
							<div className="card-item">
								<div className="between p-2 px-3">
									<div className="info">
										<Text text={item.cardName} customClass={`capitalize`} />
										<Text text={item.count} type="title" />
									</div>

									<div className="icon">
										<Image
											src={iconType(item.cardName)}
											alt=""
											width={20}
											height={20}
										/>
									</div>
								</div>

								<div className="graph-image w-full h-[50px]">
									<Image
										src={graphType(item.cardName)}
										alt=""
										layout="fill"
										objectFit="cover"
									/>
								</div>
							</div>
						</Link>
					))}
				</div>

				<div className="graph-box">
					<Text text="graph component" customClass=" " />
				</div>
			</div>

			<BottomNav />

			
		</div>
	);
};

interface AppProps {
	name: string;
}

export default Admin;
