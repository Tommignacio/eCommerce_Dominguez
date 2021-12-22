import styled from "styled-components";

const WrapItem = styled.div`
	display: grid;
	margin: 10px;
	padding: 10px;
	grid-template-columns: 1fr 1fr 1fr;
`;
const DivItem = styled.div`
	&:nth-child(2) {
		grid-column: 2/3;
		grid-row: 1/3;
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
	}
`;

const ImgStyled = styled.img`
	display: block;
	max-width: 100%;
	height: auto;
	margin: 0 auto;

	&:nth-child(2) {
	}
`;

export { DivItem, ImgStyled, WrapItem };
