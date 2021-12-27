import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	background-image: url(https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/gray-brick-wall-desk.jpg?alt=media&token=b6a3fe09-071c-4737-bf20-59ed50abf15f);
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
	color: white;
	cursor: pointer;
	&:hover {
		color: grey;
	}
`;

const SubTitle = styled.h3`
	text-align: center;
	text-shadow: 1px 2px 9px rgb(0 0 0 / 78%);
`;

const StyledH2 = styled.h2`
	font-size: 3em;
	position: absolute;
	width: 100%;
	text-align: center;
	top: 3em;
	text-shadow: 1px 2px 9px rgb(0 0 0 / 78%);
	color: white;
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
