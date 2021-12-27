import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	background-image: url(https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/white-brick-wall-mobile.jpg?alt=media&token=7a72f993-5607-47b1-ad15-6318038dc877);
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	flex-direction: column;
	position: relative;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
	cursor: pointer;
	&:hover {
		color: #6f6f6f;
	}
`;

const CarouselTitle = styled.h2`
	font-size: 4em;
	position: absolute;
	top: 1em;
	color: black;
	text-shadow: 0px 2px 0px #7576779c;
`;
const SubTitle = styled.h3`
	color: black;
	text-align: center;
	text-shadow: 0px 2px 0px #7576779c;
`;

export { Wrapper, CarouselTitle, StyledLink, SubTitle };
