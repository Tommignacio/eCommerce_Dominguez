import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	// margin-top: 72px;
	background-image: url(https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/white-brick-wall-desk.jpg?alt=media&token=30bb7683-5286-4aed-b9a9-eb3c3d25a167);
	background-size: cover;
	position: relative;
`;

const DivClothes = styled.div`
	display: flex;
	flex-direction: row;
	height: 100vh;
	width: 100vw;
	align-items: center;
`;

const DivImgs = styled.div`
	display: flex;
	flex-direction: column;
`;
const ImageClothes = styled.img`
	width: 100%;
	height: auto;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
	cursor: pointer;
	&:hover {
		color: #6f6f6f;
	}
`;

const SubTitle = styled.h3`
	text-align: center;
	text-shadow: 0px 2px 0px #7576779c;
`;

const StyledH2 = styled.h2`
	font-size: 3em;
	position: absolute;
	width: 100%;
	text-align: center;
	top: 3em;
	text-shadow: 0px 2px 0px #7576779c;
	color: black;
`;
export {
	StyledLink,
	Wrapper,
	DivClothes,
	ImageClothes,
	DivImgs,
	SubTitle,
	StyledH2,
};
