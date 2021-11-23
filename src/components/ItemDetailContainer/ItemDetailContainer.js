import ItemDetail from "./ItemDetail"
import PromiseFetch from "../ItemListContainer/PromiseFetch"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ProductsApi from "../ProductsApi/ProductsApi"

const ItemDetailContainer=()=>{
    const[detailProd,setDetailProd]=useState([])
    const {idDetail}=useParams()
    // const[error,setError]=useState("")

    useEffect(()=>{
        PromiseFetch(ProductsApi.find(prodDetail=>
            prodDetail.id === parseInt(idDetail)
        ))
        .then(result=>setDetailProd(result))
        .catch(err=>console.log(err))

    },[])

    return(
    <>
    <ItemDetail elem={detailProd} />

    </>
    )
}
export default ItemDetailContainer