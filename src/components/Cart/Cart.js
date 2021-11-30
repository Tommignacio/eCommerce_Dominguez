import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
	const test = useContext(CartContext);

	return (
		<>
			<button onClick={test.clear}> Eliminar todo</button>
			{test.cartList.length > 0 ? (
				test.cartList.map((el) => (
					<>
						<div className="container">
							<p>Finalizar Compra</p>
						</div>
						<div key={el.idItem}>
							<h2>{el.titlItem} </h2>
							<img src={el.imgItem} />
							<h2> cantidad: {el.qtyItem}</h2>
							<h2> Precio: {el.priceItem}</h2>
							<button onClick={() => test.removeItem(el.idItem)}>
								Eliminar producto
							</button>
						</div>
					</>
				))
			) : (
				<p>El carrito esta vacío</p>
			)}
		</>
	);
};
export default Cart;
