import React from "react";
import { NavbarHome } from "../NavBar/NavbarHome";
import Video from "../../utils/Video/Video";
import { Summer } from "./Summer/Summer";
import { Winter } from "./Winter/Winter";

const Home = () => {
	return (
		<>
			<NavbarHome />
			<Video />
			<Summer />
			<Winter />
		</>
	);
};
export default Home;
