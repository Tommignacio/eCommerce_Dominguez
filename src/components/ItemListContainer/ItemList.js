
import { useEffect, useState } from "react"
import Item from "./Item"
import PromiseFetch from "./PromiseFetch"

const ItemList=()=>{
    const[productos,setProductos]=useState([])
    const[error,setError]=useState("")

    useEffect(()=>{
        PromiseFetch()
        .then(result=>setProductos(result) )
        .catch(err=>setError(err))


    },[])
    
    return(
        <>
        {
        error?
        <p>{error}</p>
        :
        productos.map((el)=>
        <Item key={el.id} el={el}  />
        )
        }
        </>
    )

}


export default ItemList