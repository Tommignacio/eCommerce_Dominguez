//Aca estan los estados de la lista de productos
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import FirestoreFetch from "../../utils/FirestoreFetch";
import { DivBody, WrapItem } from "./styledItem";
import Catalogue from "../Catalogue/Catalogue";
import { NavBarList } from "../NavBar/NavBarList";
import { Loader } from "../Loader/Loader";

const ItemListContainer = () => {
	//estado que recibe todo el array de la base de datos
	const [productos, setProductos] = useState([]);
	//estado que recibe el id de la ruta en App (Route path="/category/:idCategory")
	const { idName, idCategory } = useParams();
	const [loading, setLoading] = useState(false);

	//didupdate: se ejecuta cuando se monta y se actualiza la ruta
	useEffect(() => {
		setLoading(true);
		FirestoreFetch(idName, idCategory)
			.then((result) => {
				setProductos(result);
			})
			.then(() => {
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, [idName, idCategory]);

	//renderizo el itemlist, envia props del estado del array (base de datos) luego de ser actualizado y el error
	return (
		<>
			{loading && <Loader />}
			{productos.length > 0 && (
				<>
					<NavBarList />
					<DivBody>
						<Catalogue />
						<WrapItem>
							<ItemList items={productos} />
						</WrapItem>
					</DivBody>
				</>
			)}
		</>
	);
};
export default ItemListContainer;
