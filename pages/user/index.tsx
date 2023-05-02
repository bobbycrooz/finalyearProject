import type { NextPage } from 'next';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import Logo from '@images/logo1.png';
import Button, { Text, InputField, CustomInput } from '@widget';
import TopNav from '@components/topNav';
import BottomNav from '@components/bottomNav';
import headset from '@images/headset.png';
import React, { ReactElement, useState } from 'react';
import Link from 'next/link';
import cancleBtn from '@images/cart/red-times.svg';
import UserSettingsModal from './UserSettingsModal';
import DashboardLayout from '@layout';
import { updateUser } from '@axios/auth';
import ls from '@utils/localStorage';
import { USER, USER_TEMP } from '@constants';

const Orders = () => {
	const [val, setVal] = React.useState(1);
	const [isLoading, setisLoading] = React.useState(false);
	const [showModal, setShowModal] = React.useState(false);
	const [showPicker, openPicker] = useState(false);
	const [isNewItem, setIsNew] = useState(false);
	const [isFlash, setIsFlash] = useState(false);
	const [isAvailable, setIsAvalable] = useState(false);
	const [newUserDetails, setNewUserDetails] = useState<{ [key: string]: any }>({});

	// upload user details
	function getDetails(e: { target: { value: string } }, fieldName: string) {
		let fieldValue = e && e.target.value;

		// if (errMsg) {
		// 	return Notify('error', errMsg);
		// }
		setNewUserDetails({
			...newUserDetails,
			[fieldName]: fieldValue
		});
	}


	// function toggleHandler(fieldName: string) {

	// 	}

	async function submitNewUserDetails() {
		// @ts-ignore
		setisLoading(true);

		// send data to endpoint
		const {
			// @ts-ignore
			error,
			// @ts-ignore
			serverResponse: { data }
		} = await updateUser(newUserDetails);

		if (!error) {
			// setuserdetails to new return user details

			if (ls.localGet(USER_TEMP || USER)) {
				localStorage.clear();

				// @ts-ignore
				localStorage.setItem(USER, JSON.stringify(data));
			} else {
				// console.log(userData, 'from here i ran ===>');

				// @ts-ignore
				localStorage.setItem(USER, JSON.stringify(data));
			}

			setisLoading(false);

			// toast success message.
		}
		// toast error
	}

	return (
		<div className="bg-admin w-screen relative">
			<SEO title="home" />

			<div className="w-full mt-20 px-2 space-y-3">
				<div className="section-card space-y-6">
					

					<div
						//
						className="border-b border-amber-600  bg-amber-100 text-center px-2 p-3 h-12  w-full"
					>
						<p className=" text-amber-600  capitalize font-std-medium">
							update account details
						</p>
					</div>

					<CustomInput
						change={getDetails}
						label={'Phone'}
						type={'text'}
						name={'phone'}
						placeholder={'9077726791'}
					/>
					<CustomInput
						label={'Address'}
						type={'text'}
						name={'address'}
						change={getDetails}
						placeholder={'block 4, room 2, flat 6'}
					/>
					<CustomInput
						change={getDetails}
						label={'username'}
						type={'text'}
						name={'username'}
						placeholder={'bobby dev'}
					/>

					<Button
						text={'update'}
						onClick={submitNewUserDetails}
						disabled={!newUserDetails.phone}
						isLoading={isLoading}
					/>
				</div>

				<div className="section-card space-y-6">
					<h1 className="subtitle w-full capitalize">Appearance</h1>

					<div className="between toggle-box  px-4 p-6">
						<Text text={'Dark theme'} type="title" customClass="" />

						<div
							role={'button'}
							// onClick={() => toggleHandler('isAvailable')}
							title={'toggle'}
							className={`toggler ${!true && 'off'}`}
						>
							<div className="indicator">
								<span className="indicator-point"></span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="space w-full h-[100px]"></div>

			<UserSettingsModal visibility={showModal} />
		</div>
	);
};

interface AppProps {
	name: string;
}

Orders.getLayout = function getLayout(children: ReactElement) {
	return <DashboardLayout>{children}</DashboardLayout>;
};

export default Orders;
