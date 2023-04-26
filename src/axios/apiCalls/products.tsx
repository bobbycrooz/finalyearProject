import { LoginUserType, UserTypes } from '@types';
import service from '../index';

type loginDataTypes = {
	email: string;
	password: string;
};

export function allProducts() {

	return service({
		url: '/v1/products',
		method: 'get'
	});
}
