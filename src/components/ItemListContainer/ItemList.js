import Item from "./Item";

const ItemList = ({ items }) => {
	console.log(items);
	return (
		<>
			{items.map((el, index) => (
				<Item key={el.id} index={index} el={el} />
			))}
		</>
	);
};

export default ItemList;
