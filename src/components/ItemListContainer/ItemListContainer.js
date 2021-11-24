//Aca estan los estados de la lista de productos
import { useEffect, useState } from "react"
import PromiseFetch from "./PromiseFetch"
import ItemList from "./ItemList"
import { useParams } from "react-router"
import ProductsApi from "../ProductsApi/ProductsApi";

const ItemListContainer=()=>{
    //estado que recibe todo el array de la base de datos
    const[productos,setProductos]=useState([])
    //estado que recibe el id de la ruta en App (Route path="/category/:idCategory")
    const {idCategory}=useParams()
    const[error,setError]=useState("")


    useEffect(()=>{
        console.log(idCategory)
        PromiseFetch(ProductsApi.filter(prod=>{
            if(idCategory===undefined){
                return prod
                
            }else{
                return prod.id === parseInt(idCategory)
            }
        }))

        .then(result=>setProductos(result) )
        .catch(err=>setError(err))


    },[idCategory])

    //renderizo el itemlist, envia props del estado del array (base de datos) luego de ser actualizado y el error
    return(
        <>
        <h1>Welcome to Gentleman</h1>
        <ItemList items={productos} error={error} />
    </>
    )
}
export default ItemListContainer