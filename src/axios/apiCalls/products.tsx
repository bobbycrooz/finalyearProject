import { LoginUserType, UserTypes } from '@types';
import service from '../index';

type loginDataTypes = {
	email: string;
	password: string;
};

export function allProducts() {
	// console.log('look lets fo this way --------');

	return service({
		url: '/v1/products',
		method: 'get'
	});
}
