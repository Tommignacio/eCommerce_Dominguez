import { useState } from "react"
import { hola, } from "./ItemDetailContainer"

const ItemCount=({stock, initial})=>{
    const[amount, SetAmount]=useState(initial)
    const[show, SetShow]=useState("")

    const increment=()=>{
        amount<stock && SetAmount(amount+1)
    }
    const decrement=()=>{
        amount>initial && SetAmount(amount-1)
    }
    const onAdd=()=>{
        SetShow(`agregó al carrito ${amount} productos`)
    }

    return(
        <div className="container">
            <h3>Carrito</h3>
            <button onClick={increment}>+</button>
            <p>{amount}</p>
            <button onClick={decrement}>-</button>
            <div>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
            <p>{show}</p>
        </div>

    )
}

export default ItemCount 