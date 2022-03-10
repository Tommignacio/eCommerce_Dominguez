import React, { useState } from "react";
import {
	DivForm,
	DivLabel,
	DivMail,
	MailInput,
	MyForm,
	MyLabel,
	SubmitInput,
} from "./styedFooter";

export const Form = () => {
	const [mail, setMail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (mail.indexOf("@") !== -1) {
			alert("Your email was registered correctly");
			setMail("");
		} else {
			alert("Incorrect Mail");
			setMail("");
		}
	};
	return (
		<DivForm>
			<MyForm onSubmit={handleSubmit}>
				<DivMail>
					<DivLabel>
						<MyLabel htmlFor="mail">Suscribe to the Newsletter</MyLabel>
					</DivLabel>

					<MailInput
						type="text"
						id="mail"
						name="mail"
						placeholder="Mail"
						value={mail}
						onChange={(e) => setMail(e.target.value)}
					/>
				</DivMail>

				<SubmitInput type="submit" value="Send" />
			</MyForm>
		</DivForm>
	);
};
