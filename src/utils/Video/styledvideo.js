import styled from "styled-components";

const VideoBack = styled.video`
	position: absolute;
	width: 100%;
	left: 50%;
	top: 50%;
	height: 102vh;
	object-fit: cover;
	transform: translate(-50%, -50%);
	z-index: -1;
`;

const DivTitle = styled.div`
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const ImgTitle = styled.img`
	max-width: 16%;
	height: auto;
	position: absolute;
	bottom: 0;
	margin-bottom: 1em;
`;

export { VideoBack, DivTitle, ImgTitle };
