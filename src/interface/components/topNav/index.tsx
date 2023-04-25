import Image from 'next/image';
import LogoBag from '@images/logo-bag.svg';
import { Twirl as Hamburger } from 'hamburger-react';
import backArrow from '@images/admin/backArrow.svg';
import filterIcon from '@images/admin/Filter.svg';
import Text from '@widget/Text';
import SearchBox from '@widget/SearchBox';
import Menu from './menu';
import React from 'react';
import Router, { useRouter } from 'next/router';
import Button from '@widget';
import { BiStore, BiCart } from 'react-icons/bi';
import Link from 'next/link';
import { useCarts } from '@contexts/cartContext';


interface PropsTypes {
	context?: string;
	searchSetter: React.Dispatch<React.SetStateAction<never[]>>;
}

const TopNav = ({ context, searchSetter }: PropsTypes) => {
	const [openMenu, setOpenMenu] = React.useState(false);
	const menuRef = React.useRef(null);
	const { pathname } = useRouter();
	const { cartitems } = useCarts();



	function menuHandler(e?: any) {
		const MenuElement = menuRef.current;

		if (MenuElement && MenuElement !== e.target) {
			setOpenMenu(false);
		}

		setOpenMenu(!openMenu);
	}

	function showSearchComponent() {
		if(['/home', '/categories'].includes(pathname)) return true
		return false
		
	}

	const isAdminPage = pathname.slice(0, 6) == '/admin';
	let currentRouteName = pathname === '/admin' ? 'Overview' : pathname.slice(7).replace('/', '-');
	let routeName = ['/home', '/categories'].includes(pathname) ? null : pathname.slice(1).replace('/', ' ');

	if (isAdminPage) {
		return (
			<>
				<div className="top-nav px-6 ">
					{currentRouteName !== 'Overview' && (
						<div className="centered" aria-label="open-menu" onClick={() => history.back()}>
							<Image src={backArrow} alt="" height={16} width={20} />
						</div>
					)}

					<Text text={currentRouteName} customClass="" type="title" />

					<div className="centered" aria-label="open-menu" onClick={menuHandler}>
						{/* <Image src={Hamburger} alt="" height={30} width={30} /> */}
					</div>

					<Menu ref={menuRef} menuHandler={menuHandler} visibility={openMenu} />
				</div>

				{['products', 'users', 'orders'].includes(currentRouteName) && (
					<div className="admin-mode-top-nav shadow px-3 h-[45px] w-full between bg-green">
						<SearchBox context={'admin-products'} searchSetter={searchSetter} />
						<div className="button-group flex ">
							<button className="border centered border-blue px-3 rounded-md text-blue ghost">
								<Image src={filterIcon} alt="" height={20} width={20} />
							</button>

							<Button
								text="Add"
								link="/admin/products/add-new"
								customClass="text-sm p-2 px-6 rounded-md ml-3"
							/>
						</div>
					</div>
				)}
			</>
		);
	}

	return (
		<>
			{/* NAVBAR FOR WHEN THE USER IS A BUYER */}
			<div className="top-nav">
				{/* NAV ITEM ROW */}
				<div className="row px-4 py-3 flex items-center justify-between ">
					{/* LOGO AND HAMBURGER ICON */}
					<div className="logo-burger flex">
						<div className="hambuger">
							<Hamburger toggled={openMenu} toggle={setOpenMenu} size={20} />
						</div>

						<div className="logo middle space-x-1">
							<div className="rounded-full w-8 h-8 bg-blue-500 text-white centered">
								<p className="logo-icon text-xl mb-1 font-std-medium ">c</p>
							</div>
							<h1 className="logotext font-std-medium text-xl">campusStore</h1>
						</div>
					</div>

					{/* CART AND STORE */}
					<div className="icon-cart space-x-3 flex">
						<BiStore className="text-[32px] text-gray-500" />
						<Link href={'/cart'}>
							<div className="cart_badge  relative">
								<div className="p-1 rounded-full bg-blue-500 px-2 text-gray-50 text-[8px] absolute -top-2 -right-2 ">
								{cartitems?.items?.length}
								</div>
								<BiCart className="text-[32px] text-gray-500" />
							</div>
						</Link>
					</div>
				</div>
				{/* SEARCH BOX CONTAINER */}
				{showSearchComponent() && <div className="row px-4 p-2 h-16 bg-white w-full centered ">
					<SearchBox
						searchSetter={function (value: React.SetStateAction<never[]>): void {
							throw new Error('Function not implemented.');
						}}
					/>
				</div>}
				{/* MENU */}
				<Menu ref={menuRef} menuHandler={menuHandler} visibility={openMenu} />
			</div>
		</>
	);
};

export default TopNav;

// <div className="top-nav px-6 ">
// 		{routeName ? (
// 			<>
// 				<div className="centered" aria-label="open-menu" onClick={() => history.back()}>
// 					<Image src={backArrow} alt="" height={16} width={20} />
// 				</div>
// 				<Text text={routeName} customClass="capitalize" type="title" />
// 			</>
// 		) : (
// 			<>

// 				<div className="logo centered">
// 					<Image src={LogoBag} alt="" height={28} width={35} />
// 				</div>
// <SearchBox
// 	searchSetter={function (value: React.SetStateAction<never[]>): void {
// 		throw new Error('Function not implemented.');
// 	}}
// />
// 			</>
// 		)}

// 		<div className="centered" aria-label="open-menu" onClick={menuHandler}>
// 			<Image src={Hamburger} alt="" height={30} width={30} />
// 		</div>

// 	</div>