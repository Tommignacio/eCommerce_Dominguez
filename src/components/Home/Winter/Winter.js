import React from "react";
import MediaQuery from "react-responsive";
import { CellWinter } from "./CellWinter/CellWinter";
import { DeskWinter } from "./DeskWinter/DeskWinter";

export const Winter = () => {
	return (
		<section id="winterSection">
			<MediaQuery minWidth={992}>
				<DeskWinter />
			</MediaQuery>
			<MediaQuery maxWidth={991}>
				<CellWinter />
			</MediaQuery>
		</section>
	);
};
