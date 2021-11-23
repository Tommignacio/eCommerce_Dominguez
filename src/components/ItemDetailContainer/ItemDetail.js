
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import PromiseFetch from "../ItemListContainer/PromiseFetch"
import ItemCount from "./ItemCount"
import ProductsApi from "../ProductsApi/ProductsApi"

const ItemDetail=()=>{
    const[detailProd,setDetailProd]=useState([])
    const {idDetail}=useParams()
    const[error,setError]=useState("")

    useEffect(()=>{
        PromiseFetch(ProductsApi.find(prodDetail=>
            prodDetail.id === parseInt(idDetail)
        ))
        .then(result=>setDetailProd(result) )
        .catch(err=>setError(err))
    console.log(setDetailProd)

    },[])
   
    return(
        <>
        {
        // error?
        // <p>{error}</p>
        // :
        console.log(detailProd.id)
        //   <div key={detailProd.id} className="container">
        //           <h2>Detalles</h2>
        //           <p> {detailProd.title}</p>
        //           <img src={detailProd.image}/>
        //           <p> {detailProd.description}</p>
        //       </div>

       
        }

         <ItemCount stock={5} initial={1} />
       
        </> 
    
    )

}


export default ItemDetail