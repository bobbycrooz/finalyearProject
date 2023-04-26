import { LoginUserType, UserTypes } from '@types';
import service from '../index';

type loginDataTypes = {
	email: string;
	password: string;
};

export function userLogin(data: UserTypes) {
	// console.log('look i got here');
	return service({
		url: '/v1/auth/signin',
		method: 'post',
		data: data
	});
}

export function creatUser(data: UserTypes) {
	// console.log('look i got here');
	return service({
		url: '/v1/auth/create-user',
		method: 'post',
		data: data
	});
}

export function updateUser(data: UserTypes) {
	// console.log('look i got here');
	return service({
		url: '/v1/auth/update-user',
		method: 'post',
		data: data
	});
}

// // -----
// export function getAllPurchases() {
//   return service({
//     url: `admin/allP2PTransactions`,
//     method: 'get'
//   });
// }

// export function getPurchasePage(number: number) {
//   console.log('i got here');

//   return service({
//     url: `admin/allP2PTransactions?page=${number}`,
//     method: 'get'
//   });
// }

// // -----

// export function getAllWithdrawals() {
//   return service({
//     url: `admin/allWithdrawals`,
//     method: 'get'
//   });
// }

// // export function getAllUser() {
// //   return service({
// //     url: `admin/allUsers`,
// //     method: 'get'
// //   });
// // }

// export function getTotalUsers() {
//   return service({
//     url: `admin/user/count`,
//     method: 'get'
//   });
// }

// // export function getTransfers() {
// //   return service({
// //     url: `admin/allTransferTransactions?page=1`,
// //     method: 'get'
// //   });
// // }

// // export function searchByName(name) {
// //   console.log(name);
// //   return service({
// //     url: `/name/${name.toLowerCase()}`,
// //     method: 'get'
// //   });
// // }
// // continent / { region };
