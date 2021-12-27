import { Link } from "react-router-dom";
import { DivItem, DivText, ImgStyled, Text, Title } from "./styledItem";
//ESTRUCTURa de cada producto
//recibe props del estado de los datos del array que estan en ITEMLISTCONTAINER
const Item = ({ el, index }) => {
	console.log(el);
	console.log(index); //usar para cambiar estilos de un elemento
	return (
		<>
			<DivItem>
				{/* linkea a la ruta con el id del prod seleccionado */}

				<Link to={`/item/${el.id}`}>
					<ImgStyled src={el.image} />
				</Link>
				<DivText>
					<Link
						style={{ color: "black", textDecoration: "none" }}
						to={`/item/${el.id}`}
					>
						<Title> {el.title}</Title>
						<Text> {el.price}$</Text>
					</Link>
				</DivText>
			</DivItem>
		</>
	);
};
export default Item;
