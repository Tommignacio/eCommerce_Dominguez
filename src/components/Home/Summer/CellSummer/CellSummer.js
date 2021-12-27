import React from "react";
import { Carousel } from "react-bootstrap";
import {
	CarouselTitle,
	StyledLink,
	SubTitle,
	Wrapper,
} from "./styledCellSummer";

export const CellSummer = () => {
	return (
		<Wrapper>
			<CarouselTitle>Summer</CarouselTitle>
			<Carousel>
				<Carousel.Item>
					<StyledLink to="/summer/shirt-tshirt">
						<img
							style={{ maxWidth: "100%" }}
							className="d-block  h-100"
							src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/remera-fin.png?alt=media&token=c5fc915f-b948-4e95-b090-bc6229065180"
							alt="shirts and t-shirts"
						/>
						<Carousel.Caption style={{ paddingBottom: " 3.25rem" }}>
							<SubTitle>Shirt & T-Shirt</SubTitle>
						</Carousel.Caption>
					</StyledLink>
				</Carousel.Item>
				<Carousel.Item>
					<StyledLink to="/summer/jeans-pants">
						<img
							style={{ maxWidth: "100%" }}
							className="d-block w-100"
							src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/jean.png?alt=media&token=557f61e1-1c4b-4940-a735-ac4b633a3016"
							alt="Jeans and pants"
						/>

						<Carousel.Caption style={{ paddingBottom: " 3.25rem" }}>
							<SubTitle>Jeans & Pants</SubTitle>
						</Carousel.Caption>
					</StyledLink>
				</Carousel.Item>
				<Carousel.Item>
					<StyledLink to="/summer/swim-trunks">
						<img
							style={{ maxWidth: "100%" }}
							className="d-block w-100"
							src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/malla-gris.png?alt=media&token=c9671529-da05-447c-ac3c-f5c755ec57ed"
							alt="Swim Trunks"
						/>

						<Carousel.Caption style={{ paddingBottom: " 3.25rem" }}>
							<SubTitle>Swim Trunks</SubTitle>
						</Carousel.Caption>
					</StyledLink>
				</Carousel.Item>

				<Carousel.Item>
					<StyledLink to="/summer/accesories">
						<img
							style={{ maxWidth: "100%" }}
							className="d-block w-100"
							src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/gorra-fin.png?alt=media&token=dcd95922-18d7-450f-b516-3489dbd4e915"
							alt="Accesories"
						/>

						<Carousel.Caption style={{ paddingBottom: " 3.25rem" }}>
							<SubTitle>Accesories</SubTitle>
						</Carousel.Caption>
					</StyledLink>
				</Carousel.Item>
			</Carousel>
		</Wrapper>
	);
};
