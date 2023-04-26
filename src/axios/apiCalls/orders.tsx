import { OrderTypes } from '@types';
import service from '../index';

export function createOneOrder(id: string) {
	// console.log('look i got here');
	return service({
		url: `/v1/orders/place?orderId=${id}`,
		method: 'put'
	});
}

export function createTempOrder(data: OrderTypes) {
	// console.log('look i got here');
	return service({
		url: '/v1/orders/initiate',
		method: 'post',
		data: data
	});
}

export function fetchAllOrders() {
	// console.log('look i got here');
	return service({
		url: '/v1/orders',
		method: 'get'
	});
}
