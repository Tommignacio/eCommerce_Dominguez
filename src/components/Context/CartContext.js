import { createContext, useState } from "react"

const CartContext= createContext()

const CartContextProvider=({children})=>{

    const [itemContext, setItemContext]=useState([])



     const addItem=(item, quantity)=>{
        setItemContext([
           ...itemContext,
          {
            idItem:item.id,
            titlItem:item.title,
            imgItem:item.image,
            descItem:item.description,
            priceItem:item.price,
            stockItem:item.stock,
            qtyItem:quantity
          }])
     }

    return(
        <>
        <CartContext.Provider value={
            {
            itemContext, 
            addItem}
        }
        >
            {children}
        </CartContext.Provider>
        </>
    )
}


export {CartContext}
export default CartContextProvider
