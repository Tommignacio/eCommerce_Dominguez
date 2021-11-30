import { useEffect, useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
	const [amount, SetAmount] = useState(0);

	useEffect(() => {
		SetAmount(initial);
	}, []);

	const increment = () => {
		amount < stock && SetAmount(amount + 1);
	};
	const decrement = () => {
		amount > initial && SetAmount(amount - 1);
	};

	return (
		<div className="container">
			<h3>Carrito</h3>
			<button onClick={increment}>+</button>
			<p>{amount}</p>
			<button onClick={decrement}>-</button>
			{stock && amount ? (
				<div>
					<button onClick={() => onAdd(amount)}>Agregar al carrito</button>
				</div>
			) : (
				<button disabled>Agregar al carrito</button>
			)}
		</div>
	);
};

export default ItemCount;
