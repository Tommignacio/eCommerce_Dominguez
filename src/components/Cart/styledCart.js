import styled from "styled-components";

const WrappCart = styled.div`
	margin-top: 72px;
	height: 100vh;
	width: 100vw;
`;

const DivCart = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 10px;

	@media (min-width: 768px) {
		grid-template-columns: 25% 60% 1fr;
		border-bottom: 1px solid #231f20;
		padding: 10px;
	}
`;
const DivImg = styled.div`
	padding: 10px;
	@media (min-width: 768px) {
		width: 100%;
	}
`;

const ImgCart = styled.img`
	width: 100%;
	height: auto;
	@media (min-width: 768px) {
		width: 100%;
	}
`;

const DivContainer = styled.div`
	position: relative;
	padding: 10px;
`;

const DivTitle = styled.div`
	width: 95%;

	border-bottom: 1px dashed #231f20;
	margin-left: 7px;

	@media (min-width: 768px) {
		width: 100%;
		margin-left: 0;
	}
`;

const DivText = styled.div`
	margin: 0 10px 14px;
	@media (min-width: 768px) {
		margin: 0 0 14px;
	}
`;

const Text = styled.p`
	font-size: 14px;
	margin-bottom: 0;
`;

const DivDelBtn = styled.div`
	width: 95%;
	height: 4em;
	border-bottom: 1px solid #231f20;

	@media (min-width: 768px) {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		border-bottom: none;
	}
`;

const DelBtn = styled.button`
	position: absolute;
	bottom: 0;
	background-color: transparent;
	color: #000;
	font-weight: 700;
	font-size: 1rem;
	width: 3rem;
	margin-top: 1rem;

	border-radius: 0;
	min-height: 2.5rem;
	margin-left: 7px;
`;

const DivTotal = styled.div`
	position: relative;
	padding: 10px;
	@media (min-width: 768px) {
		border-left: 1px dashed #231f20;
	}
`;

const Total = styled.p`
	font-size: 20px;
	margin-bottom: 0px;
	margin-top: 10px;
	float: right;
	margin-right: 1em;

	@media (min-width: 768px) {
		float: none;
		margin-left: 10px;
		margin-right: 0;
		border-bottom: 1px dashed #231f20;
	}
`;

const FinalWrapp = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
`;

const FinalDiv = styled.div`
	padding: 10px;
	background-color: #efefef;
`;

const TitFinalPrice = styled.p`
	float: left;
`;

const FinalPrice = styled.p`
	float: right;
`;

const DeliDiv = styled.div`
	padding: 10px;
	background-color: #efefef;
`;

const FinalDeliv = styled.p`
	float: left;
`;
const FinalDelFree = styled.p`
	float: right;
`;

const DivBuyBtn = styled.div`
	display: flex;
	justify-content: center;
`;

const BuyBtn = styled.button`
	bottom: 0;
	background-color: transparent;
	color: white;
	font-weight: 700;
	font-size: 1rem;
	width: 100%;
	margin-top: 1rem;
	background-color: black;
	border-radius: 0;
	min-height: 2.5rem;
	
}


	&:hover{
		-webkit-transition: background-color 300ms  linear;
		-ms-transition: background-color 300ms  linear;
		transition: background-color 300ms linear;
		background-color: rgba(34,34,34,0.75);
	}
`;

const DivEmpty = styled.div`
	margin-top: 72px;
	height: 100vh;
	width: 100vw;
`;

const DivBag = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 10em;
	width: 100%;
	background-color: #efefef;
`;

const Empty = styled.h2``;

const BtnContinue = styled.button`
	margin: 10px;
	background-color: transparent;
	color: #000;
	font-weight: 700;
	font-size: 1rem;
	width: 14rem;
	height: 3rem;
	margin-top: 1rem;
	border: 2px solid #000;
	border-radius: 0;
	min-height: 2.5rem;
	&:hover {
		background-color: black;
		color: white;
	}
`;

const DelAll = styled.button`
	margin: 10px;
	background-color: transparent;
	color: #000;
	width: auto;
	height: 3rem;
	margin-top: 1rem;
	min-height: 2.5rem;
	&:hover {
		color: grey;
	}
`;

const DivDelete = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export {
	WrappCart,
	DivCart,
	ImgCart,
	DivTitle,
	DivText,
	Text,
	DelBtn,
	DivImg,
	DivTotal,
	Total,
	DivContainer,
	DivDelBtn,
	FinalWrapp,
	FinalDiv,
	TitFinalPrice,
	FinalPrice,
	DeliDiv,
	FinalDeliv,
	FinalDelFree,
	DivBuyBtn,
	BuyBtn,
	DivEmpty,
	Empty,
	BtnContinue,
	DivBag,
	DelAll,
	DivDelete,
};
