import { getStoreProducts, getUsersStores } from '@axios/stores';
import { ProductTypes } from '@types';
import React, { useContext, useState, useEffect, useMemo, createContext, Children, useCallback } from 'react';
import cartJson from '../../cart.json';
import { useAuth } from './authContext';

// declare a context for the service or a global state in form of object
const StoreContext = createContext<any>({});

// an hook to return what has been stored in the global object
export const useStores = () => {
	return useContext(StoreContext);
};

// a function that wraps its children with what we want to share accross the children component.
const StoreProvider = ({ children }: any) => {
	const [storeProducts, setStoreProducts] = useState<any>([]);
	const [stores, setStores] = useState<any>([]);
	const { loggedInUser } = useAuth();

	// console.log();
	

	const fetchStoreProducts = useCallback(async (uuid: string) => {
		if (!!storeProducts) {
			console.log('i fetched all user cart item from useCAlback the user state changed');

			const {
				// @ts-ignore
				error,
				// @ts-ignore
				serverResponse: { data }
			} = await getStoreProducts(uuid);

			if (!error && data) {
				// console.log(data);
				return setStoreProducts(data);
			}

			return;
		}
	}, []);

	// getCart
	// async function getUserCartItem() {
	// };

	// updateCart
	async function fetctStore() {
		const {
			// @ts-ignore
			error,
			// @ts-ignore
			serverResponse: { data }
		} = await getUsersStores();

		if (!error) {
			// console.log(data);
			setStores(data);
			return true;
		}


		return false;
	}

	// updateCart
	// async function clearUserCart() {
	// 	setCartItems([]);
	// }

	useEffect(() => {
		fetctStore();

		console.log('i fected user cart by default from the context useEffect');
	}, [loggedInUser]);

	return <StoreContext.Provider value={{ fetchStoreProducts, stores, storeProducts }}>{children}</StoreContext.Provider>;
};

export default StoreProvider;

//
