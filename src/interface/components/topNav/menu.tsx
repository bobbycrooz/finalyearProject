import Image from 'next/image';
// import useRedux from '@hooks/useRedux';
// import SEO from 'src/interface/components/SEO';
import LogoBag from '@images/logo-bag.svg';
import Hamburger from '@images/hamburger.svg';
import userIcon from '@images/menu/User.svg';
import notiIcon from '@images/menu/Bell.svg';
import cartIcon from '@images/menu/Cart.svg';
import settingsIcon from '@images/menu/Settings.svg';
import adminIcon from '@images/menu/Award.svg';
import signUpIcon from '@images/menu/Logout.svg';
import closeIcon from '@images/menu/close.svg';
// import Link from 'next/link';
// import Button from '@widget/Button';
// import Text from '@widget/Text';
import SearchBox from '@widget/SearchBox';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { forwardRef } from 'react';
import utils from '@utils/index';
import ls from '@utils/localStorage';
import { useAuth } from '@contexts/authContext';
import { USER, USER_TEMP } from '@constants';
import React from 'react';
import { UserTypes } from '@types';
import { useCarts } from '@contexts/cartContext';
import { useOrders } from '@contexts/OrderContext';
import { AiOutlineUser } from 'react-icons/ai';
import { GrUserAdmin } from 'react-icons/gr';
import { BiCart, BiLogOut, BiPurchaseTag, BiStore } from 'react-icons/bi';

interface PropsTypes {
	visibility?: boolean;
	menuHandler: () => void;
}

const navList = [
	{
		name: 'profie',
		link: '/user',
		icon: <AiOutlineUser className="text-xl text-black" />
	},

	{
		name: 'My store',
		link: '/store/review-store',
		icon: <BiStore className="text-xl text-black" />
	},

	{
		name: 'cart',
		link: '/cart',
		icon: <BiCart className="text-xl text-black" />
	},

	{
		name: 'orders',
		link: '/orders',
		icon: <BiPurchaseTag className="text-xl text-black" />
	},

	{
		name: 'Admin',
		link: '/admin',
		icon: <GrUserAdmin/>
	},

	{
		name: 'Sign out',
		link: '/',
		icon: <BiLogOut className="text-xl text-black" />
	}
];

const Menu = forwardRef(({ visibility, menuHandler }: PropsTypes, ref) => {
	const { push } = useRouter();
	const [user, setUser] = React.useState<UserTypes>({});
	const { setCartItems } = useCarts();
	const { setOrdersList } = useOrders();
	const { setLogedInUser } = useAuth();
	function logOut() {
		console.log('signin out');

		let removeToken = utils.removeToken();

		localStorage.clear();

		if (removeToken) {
			setCartItems([]);
			console.log('cleared cart items');

			setOrdersList([]);
			console.log('cleared order items');

			setLogedInUser({});
			console.log('cleared user object');

			return push('/auth');
		}
	}

	React.useEffect(() => {
		// @ts-ignore
		let user = JSON.parse(localStorage.getItem(USER_TEMP)) || JSON.parse(localStorage.getItem(USER));
		// console.log(user);

		setUser(user);
	}, []);

	return (
		<div onClick={menuHandler} className={`${visibility && 'active'}  menu_layer `}>
			<div className="menu_sidebar ">
				<div
					role="button"
					onClick={menuHandler}
					arial-label="close"
					className="close-btn absolute right-0 top-0"
				>
					<Image alt="" className="" src={closeIcon} height={45} width={45} />
				</div>

				{/* @ts-ignore */}
				<div ref={ref} className="content ">
					<div className="profile_details space-y-2">
						<div className="profile_details-image mx-auto centered">
							<Image src={LogoBag} alt="logo" layout="intrinsic" />
						</div>
						<h1 className="profile_details-name text-2xl">{user?.username}</h1>
						<p className="profile_details-orders mt-1">Total Orders: 0</p>
					</div>

					<ol className="nav_list  space-y-0 ">
						{navList.map((item, index) =>
							item.name === 'Sign out' ? (
								// button

								<li
									onClick={() => logOut()}
									role="button"
									key={`${index}-serial`}
									aria-label="log out"
									className={`${
										item.link === '/profile' && 'active'
									} nav_list-item flex items-center p-3  `}
								>
								{item.icon}
									<h1 className="nav_list-item-text ">{item.name}</h1>
								</li>
							) : (
								<Link href={item.link} key={`${index}-serial`}>
									<li
										className={`${
											item.link === '/profile' && 'active'
										} nav_list-item flex items-center p-3  `}
									>
										{item.icon}
										<h1 className="nav_list-item-text ">{item.name}</h1>
									</li>
								</Link>
							)
						)}
					</ol>
				</div>
			</div>
		</div>
	);
});

Menu.displayName = 'Menu';

export default Menu;
