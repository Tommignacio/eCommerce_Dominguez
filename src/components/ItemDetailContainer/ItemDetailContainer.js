import ItemDetail from "./ItemDetail"
import PromiseFetch from "../ItemListContainer/PromiseFetch"
import { useState } from "react"
import ProductsApi from "../ProductsApi/ProductsApi"

const ItemDetailContainer=()=>{
    const [masomenos , setMasomenos]= useState([])
    
    PromiseFetch(ProductsApi)
    return(
    <>


    </>
    )
}
export default ItemDetailContainer