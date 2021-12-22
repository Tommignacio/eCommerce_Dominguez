import { useEffect, useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
	const [amount, SetAmount] = useState(0);
	const [size, setSize] = useState("s");

	useEffect(() => {
		SetAmount(initial);
	}, []);

	const increment = () => {
		amount < stock && SetAmount(amount + 1);
	};
	const decrement = () => {
		amount > initial && SetAmount(amount - 1);
	};

	const onChangeValue = (e) => {
		setSize(e.target.value);
		console.log(e.target.value);
	};

	return (
		<div className="container">
			<h3>Carrito</h3>
			<button onClick={increment}>+</button>
			<p>{amount}</p>
			<button onClick={decrement}>-</button>
			<div>
				<div onChange={onChangeValue}>
					<input type="radio" value="s" name="gender" /> Small
					<input type="radio" value="m" name="gender" /> Medium
					<input type="radio" value="l" name="gender" /> Large
				</div>
			</div>
			{stock && amount ? (
				<div>
					<button onClick={() => onAdd(amount, size)}>
						Agregar al carrito
					</button>
				</div>
			) : (
				<button disabled>Agregar al carrito</button>
			)}
		</div>
	);
};

export default ItemCount;
