import React from "react";
import {
	DivClothes,
	DivImgs,
	ImageClothes,
	StyledH2,
	StyledLink,
	SubTitle,
	Wrapper,
} from "./styledDeskSummer";

export const DeskSummer = () => {
	return (
		<>
			<Wrapper>
				<StyledH2>Summer</StyledH2>
				<DivClothes>
					<StyledLink to="/summer/shirt-tshirt">
						<DivImgs>
							<ImageClothes
								src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/remera-fin.png?alt=media&token=c5fc915f-b948-4e95-b090-bc6229065180"
								alt="shirts and t-shirts"
							/>
						</DivImgs>
						<SubTitle>Shirt & T-Shirt</SubTitle>
					</StyledLink>

					<StyledLink to="/summer/jeans-pants">
						<DivImgs>
							<ImageClothes
								src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/jean.png?alt=media&token=557f61e1-1c4b-4940-a735-ac4b633a3016"
								alt="Jeans and pants"
							/>
						</DivImgs>
						<SubTitle>Jeans & Pants</SubTitle>
					</StyledLink>

					<StyledLink to="/summer/swim-trunks">
						<DivImgs>
							<ImageClothes
								src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/malla-gris.png?alt=media&token=c9671529-da05-447c-ac3c-f5c755ec57ed"
								alt="Swim Trunks"
							/>
							<SubTitle>Swim Trunks</SubTitle>
						</DivImgs>
					</StyledLink>

					<StyledLink to="/summer/accesories">
						<DivImgs>
							<ImageClothes
								src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/gorra-fin.png?alt=media&token=dcd95922-18d7-450f-b516-3489dbd4e915"
								alt="Accesories"
							/>
							<SubTitle>Accesories</SubTitle>
						</DivImgs>
					</StyledLink>
				</DivClothes>
			</Wrapper>
		</>
	);
};
