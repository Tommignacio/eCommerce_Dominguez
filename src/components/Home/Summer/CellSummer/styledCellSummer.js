import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	// margin-top: 72px;
	background-image: url(https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/gray-brick-wall-mobile.jpg?alt=media&token=49d495b2-088e-400a-8319-bc36c975648a);
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	flex-direction: column;
	position: relative;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	display: flex;
	justify-content: center;
	cursor: pointer;
`;

const CarouselTitle = styled.h2`
	font-size: 4em;
	position: absolute;
	top: 1em;
	color: white;
	text-shadow: 0px 2px 0px #7576779c;
`;
const SubTitle = styled.h3`
	color: white;
	text-align: center;
	text-shadow: 0px 2px 0px #7576779c;
`;

export { Wrapper, CarouselTitle, StyledLink, SubTitle };
