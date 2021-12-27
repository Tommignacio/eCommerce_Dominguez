import styled from "styled-components";

const DivDetail = styled.div`
	margin-top: 72px;
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 15px;
	padding: 1em;
	@media (min-width: 768px) {
	}
`;

const DivImgItem = styled.div`
	display: flex;
	justify-content: center;
`;

const ImgItem = styled.img`
	display: block;
	max-width: 100%;
	max-height: 60%;
`;

const PDescript = styled.p`
	padding: 5px;
	margin-bottom: 0.5rem;
`;

const MyTitle = styled.h1`
	padding: 5px;
	border-bottom: 1px solid black;
`;

const CountDiv = styled.div`
	display: flex;
	align-items: center;
	border-top: 1px solid black;
	padding: 5px;
`;

const CountButtons = styled.button`
	width: 26px;
	height: 26px;
	background: transparent;
	border: 1px solid black;
	&:active {
		background-color: black;
		color: white;
	}
`;

const Qty = styled.p`
	margin-bottom: 0;
	margin-right: 5px;
`;

const Number = styled.p`
	margin-bottom: 0;
	margin: 10px;
`;

const SizeDiv = styled.div`
	display: flex;
	align-items: center;
	padding: 5px;
	&:before {
		content: "Sizes:";
	}
`;

const LabelRadio = styled.label`
	margin: 5px;
	border: 1px solid black;
	border-radius: 50%;
	display: inline-block;
	position: relative;
	font-size: 14px;
	cursor: pointer;
	width: 24px;
	height: 24px;
	text-align: center;
`;
const RadioStyled = styled.input`
	display: none;
	&:checked + ${LabelRadio} {
		background-color: black;
		color: white;
	}
`;

const BtnDiv = styled.div`
	display: flex;
	justify-content: center;
`;

const BtnAdd = styled.button`
	margin: 10px;
	background-color: transparent;
	color: #000;
	font-weight: 700;
	font-size: 1rem;
	width: 10rem;
	margin-top: 1rem;
	border: 2px solid #000;
	border-radius: 0;
	min-height: 2.5rem;
	&:hover {
		background-color: black;
		color: white;
	}
`;

export {
	DivDetail,
	DivImgItem,
	ImgItem,
	CountDiv,
	CountButtons,
	Qty,
	Number,
	SizeDiv,
	RadioStyled,
	LabelRadio,
	BtnDiv,
	BtnAdd,
	PDescript,
	MyTitle,
};
