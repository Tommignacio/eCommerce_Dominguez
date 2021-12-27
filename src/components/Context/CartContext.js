import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);
	const [change, setChange] = useState(null);

	const addItem = (item, quantity, size) => {
		// variable que almacena si el objeto nuevo seleccionado se repite con los que ya estan en la lista del carrito
		let isInCart = cartList.find(
			(el) => (el.idItem === item.id) & (el.sizeItem === size)
		);

		// si no esta en el carrito, agrega el nuevo producto
		if (!isInCart) {
			setCartList([
				//a los products que ya estan en la lista del carrito
				...cartList,
				//agrego los siguientes atributos del nuevo producto selccionado
				{
					sizeItem: size,
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
			//si ya lo encontro, entonces solo aumenta su cantidad seleccionada
			isInCart.qtyItem += quantity;
			//actualiza el estado para que se vea
			setCartList([...cartList]);
		}
	};

	//funcion manejadora de evento que elimina todos los prod
	const clear = () => {
		setCartList([]);
	};

	//funcion manejadora de evento que devuelve una lista de objetos que no coinciden con el seleccionado, el cual se eliminara ese solo
	const removeItem = (id) => {
		const itemFilter = cartList.filter((el) => el.idItem != id);
		setCartList(itemFilter);
	};

	//funcion  para multiplicar la cantidad seleccionada por el precio en c/producto
	const calcTotalPerItem = (id, size) => {
		//recorre los obj de la lista
		for (let prod of cartList) {
			//si el id que recibe en c/vuelta coincide con el id del prod de la lista del carrito hace la multiplicacion
			if ((id === prod.idItem) & (size === prod.sizeItem)) {
				let result = prod.qtyItem * prod.priceItem;
				return result;
			}
		}
	};

	//funcion suma todos los totales
	const totalFinal = () => {
		//guarda en una variable todos los resultados de mis prod seleccionados (resultado de la funcion de arriba) y los recorre mapeandolos por el array cartList
		let resultFinal = cartList.map((i) =>
			calcTotalPerItem(i.idItem, i.sizeItem)
		); //1,2,3
		//retorna un nuevo array sumando el valor que tenia el  array + el nuevo q encuntra
		return resultFinal.reduce(
			(previousValue, currentValue) => previousValue + currentValue
			// let variable(1) += nuevo valor (1)
			//let variable(1) += nuevo valor (2) => 3
			//let variable(3) += nuevo valor (3) => 6
		);
	};

	//funcion que actualiza la notificacion de prod que estan en el carrito
	const countCartlist = () => {
		let tot = 0;
		for (let i of cartList) {
			tot += i.qtyItem;
			setChange(tot);
		}
		return change;
	};

	return (
		<>
			<CartContext.Provider
				value={{
					cartList,
					addItem,
					clear,
					removeItem,
					calcTotalPerItem,
					totalFinal,
					countCartlist,
				}}
			>
				{children}
			</CartContext.Provider>
		</>
	);
};

export { CartContext };
export default CartContextProvider;
