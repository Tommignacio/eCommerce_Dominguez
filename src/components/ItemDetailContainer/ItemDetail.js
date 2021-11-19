
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
    console.log(detailProd)
    return(
        <>
        {
        error?
        <p>{error}</p>
        
        :
        
        detailProd.map((itemd)=>
          <div key={itemd.id} className="container">
                  <h2>Detalles</h2>
                  <p> {itemd.title}</p>
                  <img src={itemd.image}/>
                  <p> {itemd.description}</p>
              </div>
             )
      
        
       
        }

         <ItemCount stock={5} initial={1} />
       
        </> 
    
    )

}


export default ItemDetail