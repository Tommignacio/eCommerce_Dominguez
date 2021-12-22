import { Link } from "react-router-dom";
import { DivItem, ImgStyled } from "./styledItem";
//ESTRUCTURa de cada producto
//recibe props del estado de los datos del array que estan en ITEMLISTCONTAINER
const Item = ({ el, index }) => {
	console.log(el);
	console.log(index); //usar para cambiar estilos de un elemento
	return (
		<>
			{el.length < 0 && <p>Cargando...</p>}
			<DivItem>
				<p> {el.title}</p>
				{/* linkea a la ruta con el id del prod seleccionado */}

				<Link to={`/item/${el.id}`}>
					<ImgStyled src={el.image} />
				</Link>
			</DivItem>
		</>
	);
};
export default Item;
