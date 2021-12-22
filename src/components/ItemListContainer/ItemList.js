import Item from "./Item";

const ItemList = ({ items, error }) => {
	console.log(items);
	return (
		<>
			{error ? (
				<p>{error}</p>
			) : (
				items.map((el, index) => <Item key={el.id} index={index} el={el} />)
			)}
		</>
	);
};

export default ItemList;
