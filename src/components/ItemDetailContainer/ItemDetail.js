import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { Loader } from "../Loader/Loader";
import { NavBarList } from "../NavBar/NavBarList";
import ItemCount from "./ItemCount";
import {
	BtnAdd,
	DivDetail,
	DivImgItem,
	ImgItem,
	MyTitle,
	PDescript,
} from "./styledItemDetails";

const ItemDetail = ({ elem }) => {
	//estado que alamacena cantidad de productos seleccionados en el componente ItemCount(es el que le pasa la cantidad con su evento)
	const [countItem, setCountItem] = useState(0);

	const test = useContext(CartContext);

	//funcion que recibe la cantidad de itemcount seleccionada y la guarda en el estado countitem
	const onAdd = (qty, size) => {
		alert(`You have ${qty} products on your Shopping Bag`);
		setCountItem(qty);
		test.addItem(elem, qty, size);
	};
	return (
		<>
			{
				//si llega el objeto q contiene el detalle y la imagen
				elem && elem.image ? (
					<>
						<NavBarList />
						<DivDetail key={elem.id}>
							<DivImgItem>
								<ImgItem src={elem.image} alt={elem.title} />
							</DivImgItem>
							<div>
								<MyTitle> {elem.title}</MyTitle>
								<PDescript> {elem.description}</PDescript>

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

										<Link
											style={{
												display: "flex",
												justifyContent: "center",
												color: "black",
												textDecoration: "none",
											}}
											to="/cart"
										>
											{" "}
											<BtnAdd> Buy </BtnAdd>
										</Link>
									)
								}
							</div>
						</DivDetail>
					</>
				) : (
					<Loader />
				)
			}
		</>
	);
};

export default ItemDetail;
