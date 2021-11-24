import { Button } from "bootstrap"
import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = (props) => {
    const {elem} = props
    const [countItem, setCountItem]=useState(0)

     //funcion que recibe la cantidad de itemcount seleccionada y la guarda en el estado countitem
     const onAdd=(qty)=>{
        alert(`agregó al carrito ${qty} productos`)
        setCountItem(qty)
    }
    return (
        <>

        {
            countItem===0 ?

                <div key={elem.id} className="container">
                <h2>Detalles</h2>
                <p> {elem.title}</p>
                <img src={elem.image} alt={elem.title} />
                <p> {elem.description}</p>
                <ItemCount stock={elem.stock} initial={1} onAdd={onAdd} />
            </div>

            :   

            <Link to='/cart'> <Button>Check Out </Button></Link>
           
       
        


            
        }


        </>

    )

}


export default ItemDetail