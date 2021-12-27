import React from "react";

import {
	DivClothes,
	DivImgs,
	ImageClothes,
	StyledH2,
	StyledLink,
	SubTitle,
	Wrapper,
} from "./styledDeskWinter";

export const DeskWinter = () => {
	return (
		<Wrapper>
			<DivClothes>
				<StyledH2>Winter</StyledH2>
				<StyledLink to="/winter/sweaters-jackets">
					<DivImgs>
						<ImageClothes
							src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/sueter-fin.png?alt=media&token=7482eaa7-6b6f-43f6-9f48-72d952c10667"
							alt="Sweaters and Jackets"
						/>
					</DivImgs>
					<SubTitle>Sweaters & Jackets</SubTitle>
				</StyledLink>

				<StyledLink to="/winter/jeans-joggers">
					<DivImgs>
						<ImageClothes
							src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/jogger.png?alt=media&token=8b860f1f-cc6e-4346-b396-b973860ef96f"
							alt="Jeans and Joggers"
						/>
					</DivImgs>
					<SubTitle>Jeans & Joggers</SubTitle>
				</StyledLink>

				<StyledLink to="/winter/hoodie">
					<DivImgs>
						<ImageClothes
							src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/buzo-gris.png?alt=media&token=6a39b391-f319-474e-8206-1d659a57265b"
							alt="Hoodies"
						/>
						<SubTitle>Hoodies</SubTitle>
					</DivImgs>
				</StyledLink>
				<StyledLink to="/winter/accesories">
					<DivImgs>
						<ImageClothes
							src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/gorro-negro.png?alt=media&token=d5e75155-7251-44b7-86cd-6980ef71e0a3"
							alt="Accesories"
						/>
						<SubTitle>Accesories</SubTitle>
					</DivImgs>
				</StyledLink>
			</DivClothes>
		</Wrapper>
	);
};
