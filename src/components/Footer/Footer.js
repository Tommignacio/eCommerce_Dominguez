import React from "react";
import { Form } from "./Form";
import {
	DivFooter,
	DivSocial,
	Image,
	ImageDiv,
	WrappSocial,
} from "./styedFooter";
export const Footer = () => {
	return (
		<DivFooter>
			<Form />
			<WrappSocial>
				<DivSocial>
					<p>Folow Us</p>

					<Image src="https://bensimonar.vtexassets.com/arquivos/ig-new.svg"></Image>

					<ImageDiv>
						<Image src="https://bensimonar.vtexassets.com/arquivos/fb-new.svg"></Image>
					</ImageDiv>
				</DivSocial>
			</WrappSocial>
		</DivFooter>
	);
};
