
import { useEffect, useState } from "react"
import Item from "./Item"
// import ProductsApi from "../ProductsApi/ProductsApi"
import PromiseFetch from "./PromiseFetch"

const ItemList=()=>{
    const[productos,setProductos]=useState([])
    // const[error,setError]=useState("")

    useEffect(()=>{
        PromiseFetch()
        .then(result=>setProductos(result) )
        .then(result=>console.log(result))
        // .then(err=>console.log(err))

    },[])
    
    return(
        <>
        {
        productos.map((el)=>
        <Item key={el.id} el={el}  />
        )
        }
        </>
    )

}


export default ItemList