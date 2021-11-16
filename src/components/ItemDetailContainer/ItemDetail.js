
import { useEffect, useState } from "react"
import PromiseFetch from "../ItemListContainer/PromiseFetch"
import ItemCount from "./ItemCount"

const ItemDetail=()=>{
    const[detailProd,setDetailProd]=useState([])
    const[error,setError]=useState("")

    useEffect(()=>{
        PromiseFetch()
        .then(result=>setDetailProd(result) )
        .catch(err=>setError(err))


    },[])
    
    return(
        <>
        {
        error?
        <p>{error}</p>
        :
            <div key={detailProd[0].id} className="container">
                <h2>Detalles</h2>
                <p> {detailProd[0].title}</p>
                <img src={detailProd[0].image}/>
                <p> {detailProd[0].description}</p>
            </div>
        }
         <ItemCount stock={5} initial={1} />
        </>
    )

}


export default ItemDetail