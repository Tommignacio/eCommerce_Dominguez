import React from "react";
import { Link } from "react-router-dom";
import { NavbarHome } from "../NavBar/NavbarHome";
import Video from "../../utils/Video/Video";

const Home = () => {
	return (
		<>
			<NavbarHome />
			<Video />
			<br />
			<Link to="/summer/shirt-tshirt">
				<button>Shirt & T-Shirt</button>
			</Link>
			<br />
			<Link to="/summer/jeans-pants">
				<button>Jeans & Pants</button>
			</Link>
			<br />
			<Link to="/summer/swim-trunks">
				<button>Swim Trunks</button>
			</Link>
			<br />
			<Link to="/summer/accesories">
				<button>Accesories</button>
			</Link>
			<br />
			<br />
			<Link to="/winter/shirt-tshirt">
				<button>Shirt & T-Shirt</button>
			</Link>
			<br />
			<p>janfonfoanofnalfannfnaflaflconst fmfomameñ</p>
		</>
	);
};
export default Home;
