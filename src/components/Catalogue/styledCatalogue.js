import styled from "styled-components";

const WrapCatalog = styled.div`
	display: none;
	@media (min-width: 768px) {
		display: block;
		float: left;
		padding: 10px;
		font-size: 1.2rem;
		line-height: 2.5rem;
	}
`;

const LiTitle = styled.li`
	font-weight: 600;
	margin-left: -15px;
`;

const Text = styled.p`
	font-size: 1rem;
	color: grey;
	margin-bottom: 0;
	&:hover {
		color: black;
		transform: scale(1.15);
		transition: all 0.5s;
	}
`;

const LiSub = styled.li``;

export { WrapCatalog, LiTitle, LiSub, Text };
