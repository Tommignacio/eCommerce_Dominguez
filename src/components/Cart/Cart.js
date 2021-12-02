import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
	const test = useContext(CartContext);

	return (
		<>
			{/* si el carrito no esta vacio */}
			{test.cartList.length > 0 && (
				<button onClick={test.clear}> Eliminar todo</button>
			)}
			{test.cartList.length > 0 ? (
				<>
					<p> precio final a pagar:{test.totalFinal()}</p>
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
									<button onClick={() => test.removeItem(el.idItem)}>
										Eliminar producto
									</button>
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
