import styled from "styled-components";

//FOOTER
const DivFooter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: grey;
	width: 100%;
	height: auto;
`;

//FORM

const DivForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: grey;
`;

const MyForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 614px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
`;

const DivMail = styled.div`
	padding: 1rem;
	@media (min-width: 614px) {
		display: flex;
		flex-direction: column;
	}
`;

const MyLabel = styled.label`
	font-size: 25px;
`;
const DivLabel = styled.div`
	display: flex;
	justify-content: center;
`;

const MailInput = styled.input`
	background-color: transparent;
	border-bottom: 1px solid #000;
	color: #111 !important;
	overflow: hidden;
	height: 2.5rem;
	box-sizing: border-box;
	min-width: 60vw;
	padding: 10px;
	margin-top: 10px;
	margin-bottom: 10px;

	&::placeholder {
		color: black;
		font-size: 1em;
	}
`;

const SubmitInput = styled.input`
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
	&:hover {
		background-color: #000;
		color: white !important;
	}
`;

//SOCIAL MEDIA

const DivSocial = styled.div`
	display: grid;
	grid-template-columns:  5em 4em 5em;
	justify-items: center;
	justify-content: center;
}
`;

const ImageDiv = styled.div`
	margin-left: -3rem;
`;

const Image = styled.img`
	width: 2rem;
`;

const WrappSocial = styled.div`
	width: 100%;
`;

export {
	MyForm,
	DivForm,
	DivMail,
	DivLabel,
	MyLabel,
	MailInput,
	SubmitInput,
	DivSocial,
	DivFooter,
	Image,
	ImageDiv,
	WrappSocial,
};
