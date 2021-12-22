import styled from "styled-components";

const VideoBack = styled.video`
	position: absolute;
	width: 100%;
	left: 50%;
	top: 50%;
	height: 100vh;
	object-fit: cover;
	transform: translate(-50%, -50%);
	z-index: -1;
`;

export { VideoBack };
