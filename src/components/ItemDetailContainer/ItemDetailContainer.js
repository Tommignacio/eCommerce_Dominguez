import ItemDetail from "./ItemDetail"
import PromiseFetch from "../ItemListContainer/PromiseFetch"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ProductsApi from "../ProductsApi/ProductsApi"

const ItemDetailContainer=()=>{
    const[detailProd,setDetailProd]=useState({})
    const {idDetail}=useParams()
    // const[error,setError]=useState("")

    useEffect(()=>{
        console.log(idDetail)
        PromiseFetch(ProductsApi.find(prodDetail=>
            prodDetail.id === parseInt(idDetail)
        ))
        .then(result=>setDetailProd(result))
        .catch(err=>console.log(err))
            
    },[])
 useEffect(()=>{console.log(detailProd)},[detailProd])
    return(
    <>
    {detailProd ?     <ItemDetail elem={detailProd} />
 : <h1>ss</h1> }
    </>
    )
}
export default ItemDetailContainer