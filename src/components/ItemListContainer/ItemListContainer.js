//Aca estan los estados de la lista de productos
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import FirestoreFetch from "../../utils/FirestoreFetch";
import { DivItem, WrapItem } from "./styledItem";
import Catalogue from "../Catalogue/Catalogue";

const ItemListContainer = () => {
	//estado que recibe todo el array de la base de datos
	const [productos, setProductos] = useState([]);
	//estado que recibe el id de la ruta en App (Route path="/category/:idCategory")
	const { idName, idCategory } = useParams();
	const [error, setError] = useState("");

	//didupdate: se ejecuta cuando se monta y se actualiza la ruta
	useEffect(() => {
		FirestoreFetch(idName, idCategory)
			.then((result) => {
				console.log(result);
				setProductos(result);
			})
			.catch((err) => console.log(err));
	}, [idName, idCategory]);

	//renderizo el itemlist, envia props del estado del array (base de datos) luego de ser actualizado y el error
	return (
		<>
			<h1>Welcome to Gentleman</h1>
			{productos.length > 0 ? (
				<>
					<Catalogue />
					<WrapItem>
						<ItemList items={productos} error={error} />
					</WrapItem>
				</>
			) : (
				<h3>Cargando...</h3>
			)}
		</>
	);
};
export default ItemListContainer;
