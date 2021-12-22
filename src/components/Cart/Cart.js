import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Button from "react-bootstrap/Button";

import {
	collection,
	doc,
	setDoc,
	updateDoc,
	increment,
} from "firebase/firestore";
import db from "../../utils/FirebaseConfig";

const Cart = () => {
	const test = useContext(CartContext);

	const createOrder = () => {
		let order = {
			buyer: {
				name: "Juan Carlos",
				email: "juanca@gmail.com",
				phone: "58392850",
			},
			items: test.cartList.map((item) => ({
				id: item.idItem,
				title: item.titlItem,
				price: item.priceItem,
				qty: item.qtyItem,
			})),
			total: test.totalFinal(),
		};
		test.cartList.forEach(async (item) => {
			const itemRef = doc(db, "products", item.idItem);
			await updateDoc(itemRef, {
				stock: increment(-item.qtyItem),
			});
		});
		const createOrderInFirestore = async () => {
			const newOrderRef = doc(collection(db, "orders"));
			await setDoc(newOrderRef, order);
			return newOrderRef;
		};
		createOrderInFirestore()
			.then((result) => alert(result.id))
			.catch((err) => console.log(err));

		test.clear();
	};

	return (
		<>
			{/* si el carrito no esta vacio */}
			{test.cartList.length > 0 ? (
				<>
					<p> precio final a pagar:{test.totalFinal()}</p>
					<Button onClick={test.clear}> Eliminar todo</Button>
					<Button onClick={createOrder}>Finalizar Compra</Button>
					{
						// recorrre los objetos dentro de la lista del carrito
						test.cartList.map((el) => (
							<div key={el.idItem}>
								<div className="container">
									<p>Finalizar Compra</p>
								</div>
								<div key={el.idItem}>
									<h2>{el.titlItem} </h2>
									<img src={el.imgItem} />
									<h2> cantidad: {el.qtyItem}</h2>
									<h2> Precio: {el.priceItem}</h2>
									<h2>Precio final: {test.calcTotalPerItem(el.idItem)}</h2>
									{/* evento que tiene como manejador a la funciin del contexto cart y como parametros el id del producto agregado al carrito */}
									<Button onClick={() => test.removeItem(el.idItem)}>
										Eliminar producto
									</Button>
								</div>
							</div>
						))
					}
				</>
			) : (
				<p>El carrito esta vacío</p>
			)}
		</>
	);
};
export default Cart;
