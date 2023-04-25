// ---------------------------------------------------------------------------------------
//| --------- -----------------------------ORDER CONTEXT-------------------------------  |
// ---------------------------------------------------------------------------------------

import { getCart, updateCart } from '@axios/cart';
import { createOneOrder, createTempOrder, fetchAllOrders } from '@axios/orders';
import { OrderTypes, ProductTypes } from '@types';
import React, { useContext, useState, useEffect, useMemo, createContext, Children } from 'react';
import { useAuth } from './authContext';
import OrderJson from '../../orders.json'

// Declare a context for the service or a global state in form of object
const OrderContext = createContext<any>({});

// An hook to return what has been stored in the global object
export const useOrders = () => {
	return useContext(OrderContext);
};

// A function that wraps its children with what we want to share accross the children component.
const OrderProvider = ({ children }: any) => {
	const { loggedInUser } = useAuth();
	// console.log(user);

	// ---------------------------------------------------------------------------------------
	//| --------- Global States to be shareed across all components--------------------------|
	// ---------------------------------------------------------------------------------------

	const [cartitems, setCartItems] = useState<any>({});
	const [orderList, setOrdersList] = useState<any>(OrderJson.data);

	const [OrderDetails, setOrderDetails] = useState<OrderTypes>({
		shippingMode: 'instant',
		paymentMethod: 'card',
		couponCode: ''
	});

	// ---------------------------------------------------------------------------------------
	//| --------- Global handlers to be shareed across all components------------------------|
	// ---------------------------------------------------------------------------------------

	// mutate orderOject
	function onChangeOrderObject(value: string, fieldName: string) {
		setOrderDetails({
			...OrderDetails,
			[fieldName]: value
		});
	}

	// fetch all orders
	async function getOrderList() {
		const {
			// @ts-ignore
			error,
			// @ts-ignore
			serverResponse: { data }
		} = await fetchAllOrders();

		if (!error) {
			setOrdersList(data);
		}
	}

	// get one order details
	async function placeOrder(id: string) {
		const {
			// @ts-ignore
			error,
			// @ts-ignore
			serverResponse: { data }
		} = await createOneOrder(id);

		if (!error) {
			await getOrderList();
			return true;
		}
	}

	// Create a new order
	async function generateSummary() {
		// get shipppingMode
		// get PaymentMethod
		let orderData = {
			...OrderDetails
			// email: user.email
		};

		// console.log(orderData, 'here are the details to be submlited');
		// return true;

		try {
			// send data to endpoint
			const {
				// @ts-ignore
				error,
				// @ts-ignore
				serverResponse: { data }
			} = await createTempOrder(orderData);

			console.log(data);

			if (!error) {
				await getOrderList();
				const { _id } = data;
				return _id;
			}
			//  toast error message
		} catch (error) {
			console.log(error);
		}
	}

	// -----------------useEffect
	useEffect(() => {
		getOrderList();
		console.log('order item has been initialized');
	}, [loggedInUser]);

	// -----------------useEffect

	// console.log(OrderDetails);

	return (
		<OrderContext.Provider
			value={{ OrderDetails, generateSummary, onChangeOrderObject, orderList, placeOrder, setOrdersList }}
		>
			{children}
		</OrderContext.Provider>
	);
};

export default OrderProvider;
