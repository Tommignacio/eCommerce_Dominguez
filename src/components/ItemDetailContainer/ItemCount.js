import { useState } from "react"

const ItemCount=({stock, initial})=>{
    const[amount, SetAmount]=useState(initial)
    const[show, SetShow]=useState("")

    const increment=()=>{
        amount<stock && SetAmount(amount+1)
    }
    const decrement=()=>{
        amount>initial && SetAmount(amount-1)
    }
    //funcion que muestra la cantidad comprada
    const onAdd=()=>{
        SetShow(`agregó al carrito ${amount} productos`)
    }

    return(
        <div className="container">
            <h3>Carrito</h3>
            <button onClick={increment}>+</button>
            <p>{amount}</p>
            <button onClick={decrement}>-</button>
            {
                stock?
                <div>
                <button onClick={onAdd}>Agregar al carrito</button>
                <p>{show}</p>
                </div>
                :
                <button onClick={onAdd} disabled>Agregar al carrito</button>
            }
           
        </div>

    )
}

export default ItemCount 