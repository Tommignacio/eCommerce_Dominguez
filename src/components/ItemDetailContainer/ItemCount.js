import { useEffect, useState } from "react";
import {
	BtnAdd,
	BtnDiv,
	CountButtons,
	CountDiv,
	LabelRadio,
	Number,
	Qty,
	RadioStyled,
	SizeDiv,
} from "./styledItemDetails";

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
		<>
			<CountDiv>
				<Qty>Quantity:</Qty>
				<CountButtons onClick={increment}>+</CountButtons>
				<Number>{amount}</Number>
				<CountButtons onClick={decrement}>-</CountButtons>
			</CountDiv>

			{stock && amount ? (
				<>
					<SizeDiv onChange={onChangeValue}>
						<RadioStyled
							type="radio"
							value="s"
							name="gender"
							id="s"
							defaultChecked
						/>
						<LabelRadio htmlFor="s">S</LabelRadio>
						<RadioStyled type="radio" value="m" name="gender" id="m" />
						<LabelRadio htmlFor="m">M</LabelRadio>
						<RadioStyled type="radio" value="l" name="gender" id="l" />
						<LabelRadio htmlFor="l">L</LabelRadio>
						<RadioStyled type="radio" value="xl" name="gender" id="xl" />
						<LabelRadio htmlFor="xl">XL</LabelRadio>
					</SizeDiv>

					<BtnDiv>
						<BtnAdd onClick={() => onAdd(amount, size)}>Add to cart</BtnAdd>
					</BtnDiv>
				</>
			) : (
				<BtnDiv>
					<BtnAdd style={{ display: "none" }}>Add to cart</BtnAdd>
				</BtnDiv>
			)}
		</>
	);
};

export default ItemCount;
