import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import AuthProvider from '@contexts/authContext';
import CartProvider from '@contexts/cartContext';
import ProductProvider from '@contexts/productContext';
import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import Guard from '@utils/Guard';
import '@styles/index.scss';
import { useResizer } from '@hooks/ressizer';
import OrderProvider from '@contexts/OrderContext';

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout || ((page) => page);
	const [isMobile, setIsMobile] = useState<boolean>(true);
	const [clientWidth, setClientWidth] = useState(0);

	const { push, pathname } = useRouter();

	useResizer(setIsMobile, setClientWidth);

	useEffect(() => {
		if (!isMobile) {
			push('/no-desktop');
		}
	}, [clientWidth, isMobile, pathname, push]);

	// resources loader ---------------------------------
	// to init user details
	// to init user cart
	// to init user order list
	// resources loader ---------------------------------

	return (
		<AuthProvider>
			<ProductProvider>
				<CartProvider>
					<OrderProvider>
						<Guard />
						{getLayout(<Component {...pageProps} />)}
					</OrderProvider>
				</CartProvider>
			</ProductProvider>
		</AuthProvider>
	);
}

export default App;
// function push(arg0: string) {
// 	throw new Error('Function not implemented.');
// }
