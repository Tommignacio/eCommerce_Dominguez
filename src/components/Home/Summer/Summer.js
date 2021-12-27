import React from "react";
import MediaQuery from "react-responsive";
import { CellSummer } from "./CellSummer/CellSummer";
import { DeskSummer } from "./DeskSummer/DeskSummer";

export const Summer = () => {
	return (
		<section id="summerSection">
			<MediaQuery minWidth={992}>
				<DeskSummer />
			</MediaQuery>
			<MediaQuery maxWidth={991}>
				<CellSummer />
			</MediaQuery>
		</section>
	);
};
