import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

const Cart=()=>{
    test= useContext(CartContext)

    return(
        <>
        <div className="container">
            <p>Finalizar Compra</p>
        </div>
        <div key={test.}>

        </div>

        </>
    )
}
export default Cart