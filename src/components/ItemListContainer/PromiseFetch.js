import ProductsApi from "../ProductsApi/ProductsApi";

const PromiseFetch = (filterProd) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (ProductsApi) {
				resolve(filterProd);
			} else {
				reject("No hay nada en la base de datos");
			}
		}, 500);
	});
};

export default PromiseFetch;
