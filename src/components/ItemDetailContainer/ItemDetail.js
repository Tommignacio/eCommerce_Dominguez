import { Button } from "bootstrap";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ elem }) => {
	//estado que alamacena cantidad de productos seleccionados en el componente ItemCount(es el que le pasa la cantidad con su evento)
	const [countItem, setCountItem] = useState(0);

	const test = useContext(CartContext);

	//funcion que recibe la cantidad de itemcount seleccionada y la guarda en el estado countitem
	const onAdd = (qty) => {
		alert(`agregó al carrito ${qty} productos`);
		setCountItem(qty);
		test.addItem(elem, qty);
	};
	return (
		<>
			{
				//si llega el objeto q contiene el detalle y la imagen
				elem && elem.image ? (
					<div key={elem.id} className="container">
						<h2>Detalles</h2>
						<p> {elem.title}</p>
						<img src={elem.image} alt={elem.title} />
						<p> {elem.description}</p>

						{/* llama al componente Itemcount y le envia el stock, el evento y el stock inicial */}
						{
							//si no hay productos agregados (no se apreto el boton de itemcount)
							countItem === 0 ? (
								<ItemCount
									stock={elem.stock}
									initial={countItem}
									onAdd={onAdd}
								/>
							) : (
								//sino, muestra el boton checkout para finalizar compra
								<Link to="/cart">
									{" "}
									<button> Comprar </button>
								</Link>
							)
						}
					</div>
				) : (
					<div>
						<h3>Cargando...</h3>
					</div>
				)
			}
		</>
	);
};

export default ItemDetail;
