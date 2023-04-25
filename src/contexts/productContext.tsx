import { allProducts } from '@axios/products';
import { ProductTypes } from '@types';
import React, { useContext, useState, useEffect, useMemo, createContext, Children } from 'react';
import produvctArray from '../../products.json';

const ProductContext = createContext<any>([]);

export const useProducts = () => {
	return useContext(ProductContext);
};

const ProductProvider = ({ children }: any) => {
	const [products, setProducts] = useState<any>(produvctArray.data);

	// fetch products from the database on first load and savve
	async function fetchAllProduct() {
		console.log('checking the value of the products stored', !!products?.length);
		console.log('this is the content of the products in store', products);

		if (!!products?.length === false) {
			const {
				// @ts-ignore
				error,
				// @ts-ignore,
				serverResponse: { data }
			} = await allProducts();

			if (!error && data) {
				// console.log(data);
				return setProducts(data);
			}

			console.log('this is the content of the products in store', products);
		}

		return;
	}

	useEffect(() => {
		fetchAllProduct();

		console.log('ther is no products so i fetched');
	}, []);

	return <ProductContext.Provider value={{ products, setProducts }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
