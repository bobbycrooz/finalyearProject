import Image from 'next/image';
// import useRedux from '@hooks/useRedux';
// import SEO from 'src/interface/components/SEO';
import LogoBag from '@images/logo-bag.svg';
import Hamburger from '@images/hamburger.svg';
// import SearchIcon from '@images/search-icon.svg';
// import Link from 'next/link';
// import Button from '@widget/Button';
// import Text from '@widget/Text';
import SearchBox from '@widget/SearchBox';
import home, { order, user, cart, category } from '@images/bottom-nav/bottomNavIcons';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useCarts } from '@contexts/cartContext';

interface PropsTypes {
	text: string;
	// customClass?: string;
	// link?: string; //path
	// onClick?: () => void;
}

const navItem = [
	{
		name: 'Home',
		icon: (isActive: boolean) => home(isActive),
		link: '/home'
	},

	{
		name: 'Cart',
		icon: (isActive: boolean) => cart(isActive),
		link: '/cart',
		homeBtn: true
	},

	{
		name: 'Orders',
		icon: (isActive: boolean) => order(isActive),
		link: '/orders'
	},

	{
		name: 'User',
		icon: (isActive: boolean) => user(isActive),
		link: '/user'
	}
];

const navItemAdmin = [
	{
		name: 'Home',
		icon: (isActive: boolean) => home(isActive),
		link: '/home'
	},

	{
		name: 'products',
		icon: (isActive: boolean) => cart(isActive),
		link: '/admin/products',
		homeBtn: true
	},

	{
		name: 'admin',
		icon: (isActive: boolean) => cart(isActive),
		link: '/admin',
		homeBtn: true
	},

	{
		name: 'Order',
		icon: (isActive: boolean) => order(isActive),
		link: '/order'
	},

	{
		name: 'settings',
		icon: (isActive: boolean) => user(isActive),
		link: '/user'
	}
];

const BottomNav = () => {
	const { pathname } = useRouter();
	let currentRoute = pathname;
	const { cartitems } = useCarts();

	//
	const isAdminPage = pathname.slice(0, 6) == '/admin';
	let currentRouteName = pathname === '/admin' ? 'Overview' : pathname.slice(7).replace('/', '-');

	if (isAdminPage) {
		return (
			<div className="bottom_nav active">
				{navItemAdmin.map((item, index) => (
					<Link key={index} href={item.link}>
						{item.name === 'admin' ? (
							<div className={`bottom_nav-item admin `}>
								<div className="admin-btn">
									<div className="admin-sub-btn"></div>
								</div>
							</div>
						) : (
							<div className={`bottom_nav-item`}>
								{item.icon(currentRoute === item.link)}
								<h1
									className={`${
										currentRoute === item.link && 'text-blue'
									} name  text-xs mt-1 font-std-book`}
								>
									{item.name}
								</h1>
							</div>
						)}
					</Link>
				))}
			</div>
		);
	}

	return (
		<div className="bottom_nav active">
			{navItem.map((item, index) => (
				<Link key={index} href={item.link}>
					<div className={`bottom_nav-item relative `}>
						{item.name === 'Cart' && cartitems?.items && (
							<></>
						)}

						{item.icon(currentRoute === item.link)}
						<h1
							className={`${
								currentRoute === item.link ? 'text-[#b45309]' : "text-neutral-600"
							} name  text-xs mt-1 font-std-book`}
						>
							{item.name}
						</h1>
					</div>
				</Link>
			))}
		</div>
	);
};
// ${
// 	item.homeBtn && 'br rounded-3xl'
// }

export default BottomNav;
