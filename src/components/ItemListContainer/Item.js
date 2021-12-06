import { Link } from "react-router-dom";
//ESTRUCTURa de cada producto
//recibe props del estado de los datos del array que estan en ITEMLISTCONTAINER
const Item = ({ el }) => {
	console.log(el);
	return (
		<>
			{el.length < 0 && <p>Cargando...</p>}
			<div className="container">
				<p> {el.title}</p>
				{/* linkea a la ruta con el id del prod seleccionado */}
				<Link to={`/item/${el.id}`}>
					<img src={el.image} />
				</Link>
			</div>
		</>
	);
};
export default Item;
