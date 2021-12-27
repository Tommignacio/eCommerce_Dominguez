import React from "react";
import { DivError, DivMsg, Msg } from "./styledErrorComponent";

export const ErrorComponent = () => {
	return (
		<DivError>
			<DivMsg>
				<Msg>ERROR 404</Msg>
			</DivMsg>
		</DivError>
	);
};
