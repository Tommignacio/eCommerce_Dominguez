import styled from "styled-components";

const DivBody = styled.div``;

const WrapItem = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 15px;
	padding: 10px;
	margin-top: 72px;
	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
`;
const DivItem = styled.div`
	height: 100%;
	width: 100%;
	padding: 5px;
	@media (min-width: 768px) {
		&:nth-child(2) {
			grid-column: 2/4;
			grid-row: 1/4;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
		}
	}
`;

const ImgStyled = styled.img`
	display: block;
	max-width: 100%;
	height: auto;
	margin: 0 auto;
`;

const Title = styled.p`
	margin-bottom: 0;
	font-size: 90%;
	border-bottom: 1px solid black;
	@media (max-width: 768px) {
		border-bottom: none;
		text-align: center;
		font-size: 1rem;
	}
`;

const Text = styled.p`
	margin-bottom: 0;
	font-size: 90%;

	@media (max-width: 768px) {
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
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const DivText = styled.div`
	@media (max-width: 768px) {
		display: flex;
		justify-content: center;
		margin-top: 8px;
	}
`;

export { DivBody, DivItem, ImgStyled, WrapItem, Text, Title, DivText };
