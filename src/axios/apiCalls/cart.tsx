import { LoginUserType, UserTypes } from '@types';
import service from '../index';

type loginDataTypes = {
	email: string;
	password: string;
};

export function getCart() {
	return service({
		url: '/v1/cart',
		method: 'get'
	});
}

export function addToCart(count: number) {
	// console.log('look i got here');
	return service({
		url: '/v1/auth/create-user',
		method: 'post'
		// data: data
	});
}

export function updateCart(productID: string, quantity: number) {
	console.log(productID, quantity);
	return service({
		url: `/v1/cart/add-to-cart?productId=${productID}&quantity=${quantity}`,
		method: 'get'
		// data: data
	});
}
