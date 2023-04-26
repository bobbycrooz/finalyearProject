import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import Logo from '@images/logo1.png';
import Button from '@widget/Button';
import Text from '@widget/Text';
import InputField from '@widget/InputField';
import acc from '@images/account.svg';
import lock from '@images/Lock.svg';
import Modal from '@components/ConfirmationModal';
import ConfirmCurrentUser from '@components/ConfirmUserModal';
import emailIcon from '@images/emailIcon.svg';
import SoftLoader from '@components/softLoader';
import { validateField } from '@utils';
import { creatUser, userLogin } from '@axios/auth';
import utils from '@utils/index';
import { useRouter } from 'next/router';
import ls from '@utils/localStorage';
import { useAuth } from '@contexts/authContext';
import { USER, USER_TEMP } from '@constants';
import { NotifyTypes } from '@types';

const Auth: NextPage = () => {
	// hooks
	const { loggedInUser, setLogedInUser } = useAuth();
	const [isSigningUp, setIsSigningUp] = React.useState(!true);
	const [showModal, setShowModal] = React.useState(false);
	const [showContinueModal, setShowContinueModal] = React.useState({
		active: false,
		name: ''
	});
	const [notify, setNotify] = React.useState<NotifyTypes>({
		type: 'error',
		message: ''
	});
	const [isLoading, seIsLoading] = React.useState(false);
	const [user, setUser] = React.useState<UserTypes>({});
	const [errMsg, setErrMsg] = React.useState('');
	const { push } = useRouter();

	// logics and handlers ______

	function Notify(type: 'success' | 'error', message: string) {
		return setNotify({
			...notify,
			type: type,
			message: message
		});
	}

	async function submitHandler() {
		seIsLoading(true);

		if (!user?.email || !user?.password) {
			seIsLoading(!true);
			return Notify('error', 'One or more field are required');
		}

		if (isSigningUp) {
			// FUNCTION TO CREATE NEW USER

			seIsLoading(true);
			// @ts-ignore
			const { serverResponse, error } = await creatUser(user);
			if (error) {
				seIsLoading(!true);

				return Notify('error', `${serverResponse}`);
			}
			seIsLoading(false);
			setIsSigningUp(false);
		} else {
			// FUNCTION TO LOG IN NEW USER

			// @ts-ignore
			const { serverResponse, error } = await userLogin(user);

			if (error) {
				seIsLoading(!true);

				return Notify('error', `${serverResponse}`);
			}

			const saveUserToken = utils.saveToken(serverResponse.token);
			// console.log(saveUserToken, 'the user token here');

			const userData = serverResponse.member;

			if (ls.localGet(USER_TEMP)) {
				localStorage.clear();

				// @ts-ignore
				localStorage.setItem(USER, JSON.stringify(userData));

				setLogedInUser(userData);
			} else {
				// console.log(userData, 'from here i ran ===>');

				// @ts-ignore
				localStorage.setItem(USER, JSON.stringify(userData));

				setLogedInUser(userData);
			}

			if (!saveUserToken) {
				Notify('error', `you are logged in`);

				return push('/home');
			}

			seIsLoading(!true);
			return push('/home');
		}
	}

	function isGuest() {
		// create guest user
		const guestUser = {
			name: 'GUEST_uuid',
			id: 'uuid',
			token: 'guest_user_uuid'
		};

		const saveUserToken = utils.saveToken(guestUser.token);

		const userData = {
			email: guestUser.id,
			username: guestUser.name
		};

		localStorage.setItem(USER_TEMP, JSON.stringify(userData));

		if (!saveUserToken) {
			Notify('error', `you are logged in`);

			return push('/home');
		}

		seIsLoading(!true);
		return push('/home');
	}

	function getUserDetails(e: EventTypes, fieldName: string) {
		let fieldValue = e && e.target.value;

		Notify('error', '');
		let { valid, errMsg } = validateField(fieldName, fieldValue);

		if (errMsg) {
			return Notify('error', errMsg);
		}

		valid &&
			setUser({
				...user,
				[fieldName]: fieldValue
			});
	}

	function isLoggedIn() {
		let localUser = ls.localGet(USER_TEMP) || ls.localGet(USER);

		if (utils.getToken() && localUser) {
			return setShowContinueModal({
				...showContinueModal,
				active: true,
				name: localUser.username
			});
		}

		return setShowContinueModal({
			...showContinueModal,
			active: !true
		});
	}

	// logics and handlers ______

	// React.useEffect(() => {
	// 	// check if user Exist
	// 	// console.log(isLoggedIn());
	// }, []);

	return (
		<div className="bg-body h-screen w-screen relative px-6">
			<SEO title="home" />
			<SoftLoader visibility={isLoading} />
			<div className="logo middle justify-center space-x-1 mx-auto mt-20 ">
				<div className="rounded-full w-8 h-8 bg-blue-500 text-white centered">
					<p className="logo-icon text-xl mb-1 font-std-medium ">c</p>
				</div>
				<h1 className="logotext logoFont text-2xl">campuStore</h1>
			</div>

			<div
				className={` ${
					isSigningUp ? 'mt-[25%]' : 'mt-[40%]'
				} "input-field-container  h-56 w-full  space-y-5 transition-all"`}
			>
				{isSigningUp && (
					<InputField
						onChangeHandler={getUserDetails}
						icon={acc}
						label="Username"
						type="text"
						placeholder="eg. bobby"
					/>
				)}

				<InputField
					icon={emailIcon}
					onChangeHandler={getUserDetails}
					label="Email"
					type="email"
					placeholder="eg.bobby@gmail.com"
				/>

				<InputField
					icon={lock}
					onChangeHandler={getUserDetails}
					label="Password"
					type="password"
					placeholder="********"
				/>

				{!isSigningUp && <Text link="/auth" text="Forget Password" customClass="ml-2 text-right" />}

				{!!notify.message.length && (
					<Text text={notify.message} type={notify.type} customClass="text-center" />
				)}
			</div>

			<div className={`button-container  space-y-2 ${isSigningUp ? 'mt-[35%]' : 'mt-[15%]'}`}>
				<Button
					full
					onClick={() => submitHandler()}
					text={isSigningUp ? 'Sign Up' : 'Login'}
					customClass=""
					disabled={!!notify.message}
				/>

				<div className="flex items-center mx-auto  justify-center">
					<Text text={isSigningUp ? 'I have  an account?' : 'Create an account'} />{' '}
					<Text
						onClick={() => setIsSigningUp(!isSigningUp)}
						text={isSigningUp ? 'Login' : 'here'}
						customClass="ml-2"
					/>
				</div>

				<Text
					onClick={() => isGuest()}
					text="view as guest"
					customClass="uppercase text-center underline"
				/>
			</div>

			<Modal visibility={showModal} />
			<ConfirmCurrentUser currentUser={showContinueModal.name} visibility={showContinueModal.active} />
		</div>
	);
};

interface AppProps {
	name: string;
}
interface UserTypes {
	name?: string;
	email?: string;
	password?: any;
}

interface EventTypes {
	preventDefault: () => void;
	target: { value: any };
}

export default Auth;
