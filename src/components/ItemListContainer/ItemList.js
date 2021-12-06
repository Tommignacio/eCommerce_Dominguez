import Item from "./Item";

const ItemList = ({ items, error }) => {
	console.log(items);
	return (
		<>
			{error ? <p>{error}</p> : items.map((el) => <Item key={el.id} el={el} />)}
		</>
	);
};

export default ItemList;
