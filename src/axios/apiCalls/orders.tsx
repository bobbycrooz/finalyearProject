import { OrderTypes } from '@types';
import service from '../index';

export function createOneOrder(id: string) {
	// console.log('look i got here');
	return service({
		url: `/v1/order/create?orderId=${id}`,
		method: 'get'
	});
}

export function createTempOrder(data: OrderTypes) {
	// console.log('look i got here');
	return service({
		url: '/v1/order/summary',
		method: 'post',
		data: data
	});
}

export function fetchAllOrders() {
	// console.log('look i got here');
	return service({
		url: '/v1/order',
		method: 'get'
	});
}
