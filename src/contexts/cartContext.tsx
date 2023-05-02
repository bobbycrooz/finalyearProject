import { getCart, updateCart } from '@axios/cart';
import { ProductTypes } from '@types';
import React, { useContext, useState, useEffect, useMemo, createContext, Children, useCallback } from 'react';
import cartJson from '../../cart.json';
import { useAuth } from './authContext';

// declare a context for the service or a global state in form of object
const CartContext = createContext<any>({});

// an hook to return what has been stored in the global object
export const useCarts = () => {
	return useContext(CartContext);
};

// a function that wraps its children with what we want to share accross the children component.
const CartProvider = ({ children }: any) => {
	const [cartitems, setCartItems] = useState<any>([]);
	const { loggedInUser } = useAuth();

	const getUserCartItem = useCallback(async () => {
		if (!!cartitems) {
			console.log('i fetched all user cart item from useCAlback the user state changed');

			const {
				// @ts-ignore
				error,
				// @ts-ignore
				serverResponse: { data }
			} = await getCart();

			if (!error && data) {
				// console.log(data);
				return setCartItems(data);
			}

			return;
		}
	}, [loggedInUser]);

	// getCart
	// async function getUserCartItem() {

	// };

	// updateCart
	async function updateCartItem(productID: string, quantity: number) {
		const {
			// @ts-ignore
			error,
			// @ts-ignore
			serverResponse: { data }
		} = await updateCart(productID, quantity);

		if (!error) {
			// console.log(data);
			setCartItems(data);
			return true;
		}

		return false;
	}

	// updateCart
	async function clearUserCart() {
		setCartItems([]);
	}

	useEffect(() => {
		if (loggedInUser) {
			getUserCartItem();
		}

		console.log('i fected user cart by default from the context useEffect');
	}, [getUserCartItem, loggedInUser]);

	return (
		<CartContext.Provider value={{ cartitems, setCartItems, updateCartItem }}>{children}</CartContext.Provider>
	);
};

export default CartProvider;

//
