import ProductsApi from "../ProductsApi/ProductsApi";

const PromiseFetch=()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        if (ProductsApi.length>0){
            resolve(ProductsApi)
        }else{
            reject("No hay nada en la base de datos")
        }
    },2000);
})
}

export default PromiseFetch