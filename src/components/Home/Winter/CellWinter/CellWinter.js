import React from "react";
import { Carousel } from "react-bootstrap";
import { StyledLink, SubTitle } from "./styledCellWinter";
import { CarouselTitle, Wrapper } from "./styledCellWinter";

export const CellWinter = () => {
	return (
		<Wrapper>
			<CarouselTitle>Winter</CarouselTitle>
			<Carousel variant="dark">
				<Carousel.Item>
					<StyledLink to="/winter/sweaters-jackets">
						<img
							style={{ maxWidth: "100%" }}
							className="d-block  h-100"
							src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/sueter-fin.png?alt=media&token=7482eaa7-6b6f-43f6-9f48-72d952c10667"
							alt="Sweaters and Shackets"
						/>
						<Carousel.Caption style={{ paddingBottom: " 3.25rem" }}>
							<SubTitle> Sweaters & Shackets</SubTitle>
						</Carousel.Caption>
					</StyledLink>
				</Carousel.Item>
				<Carousel.Item>
					<StyledLink to="/winter/jeans-joggers">
						<img
							style={{ maxWidth: "100%" }}
							className="d-block "
							src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/jogger.png?alt=media&token=8b860f1f-cc6e-4346-b396-b973860ef96f"
							alt="Jeans and Joggers"
						/>

						<Carousel.Caption style={{ paddingBottom: " 3.25rem" }}>
							<SubTitle> Jeans & Joggers</SubTitle>
						</Carousel.Caption>
					</StyledLink>
				</Carousel.Item>
				<Carousel.Item>
					<StyledLink to="/winter/hoodie">
						<img
							style={{ maxWidth: "100%" }}
							className="d-block "
							src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/buzo-gris.png?alt=media&token=6a39b391-f319-474e-8206-1d659a57265b"
							alt="Hoodies"
						/>

						<Carousel.Caption style={{ paddingBottom: " 3.25rem" }}>
							<SubTitle> Hoodies</SubTitle>
						</Carousel.Caption>
					</StyledLink>
				</Carousel.Item>

				<Carousel.Item>
					<StyledLink to="/winter/accesories">
						<img
							style={{ maxWidth: "100%" }}
							className="d-block "
							src="https://firebasestorage.googleapis.com/v0/b/ecommercecoder-c0418.appspot.com/o/gorro-negro.png?alt=media&token=d5e75155-7251-44b7-86cd-6980ef71e0a3"
							alt="Accesories"
						/>

						<Carousel.Caption style={{ paddingBottom: " 3.25rem" }}>
							<SubTitle>Accesories </SubTitle>
						</Carousel.Caption>
					</StyledLink>
				</Carousel.Item>
			</Carousel>
		</Wrapper>
	);
};
