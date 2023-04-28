import { LoginUserType, UserTypes } from '@types';
import service from '../index';

type loginDataTypes = {
	email: string;
	password: string;
};

export function createStore(data: any) {

	return service({
		url: '/v1/store',
		method: 'post',
		data
	});
}



export function getStoreProducts(storeUuid: any) {

	return service({
		url: `/v1/products/filter-by?storeId=${storeUuid}`,
		method: 'get',
	
	});
}


export function getUsersStores() {

	return service({
		url: `/v1/store`,
		method: 'get',
	
	});
}