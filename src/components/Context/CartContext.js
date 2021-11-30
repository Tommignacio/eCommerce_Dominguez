import { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);

	const addItem = (item, quantity) => {
		let isInCart = cartList.find((el) => el.idItem === item.id);
		if (!isInCart) {
			setCartList([
				...cartList,
				{
					idItem: item.id,
					titlItem: item.title,
					imgItem: item.image,
					descItem: item.description,
					priceItem: item.price,
					stockItem: item.stock,
					qtyItem: quantity,
				},
			]);
		} else {
			isInCart.qtyItem += quantity;
		}
	};

	const clear = () => {
		setCartList([]);
	};

	const removeItem = (id) => {
		const itemFilter = cartList.filter((el) => el.idItem != id);
		setCartList(itemFilter);
	};

	return (
		<>
			<CartContext.Provider
				value={{
					cartList,
					addItem,
					clear,
					removeItem,
				}}
			>
				{children}
			</CartContext.Provider>
		</>
	);
};

export { CartContext };
export default CartContextProvider;
