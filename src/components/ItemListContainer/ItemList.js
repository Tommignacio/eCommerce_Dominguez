import Item from "./Item";

const ItemList = ({ items }) => {
	return (
		<>
			{items.map((el) => (
				<Item key={el.id} el={el} />
			))}
		</>
	);
};

export default ItemList;
