import { Button } from "bootstrap"
import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = ({elem}) => {
    const [countItem, setCountItem]=useState(0)

     //funcion que recibe la cantidad de itemcount seleccionada y la guarda en el estado countitem
     const onAdd=(qty)=>{
        alert(`agregó al carrito ${qty} productos`)
        setCountItem(qty)
    }
    return (
        <>

        {
            //si no hay productos agregados (no se apreto el boton de itemcount)
            countItem===0 ?
                //muestra el contador de compra
                <div key={elem.id} className="container">
                    <h2>Detalles</h2>
                    <p> {elem.title}</p>
                    <img src={elem.image} alt={elem.title} />
                    <p> {elem.description}</p>

                    {/* llama al componente Itemcount y le envia el stock, el evento y el stock inicial */}
                    <ItemCount stock={elem.stock} initial={1} onAdd={onAdd} />
                </div>

            :   
            //sino muestra el boton checkput para finalizar compra
            <Link to='/cart'> <Button>Check Out </Button></Link>
           
       
        


            
        }


        </>

    )

}


export default ItemDetail