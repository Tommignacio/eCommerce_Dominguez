import React from "react";
import { Link } from "react-router-dom";
import { LiSub, LiTitle, Text, WrapCatalog } from "./styledCatalogue";

const Catalogue = () => {
	return (
		<WrapCatalog>
			<ul>
				<LiTitle>Summer</LiTitle>
				<LiSub>
					<Link style={{ textDecoration: "none" }} to="/summer/shirt-tshirt">
						{" "}
						<Text>T-shrirts & Shrirts</Text>
					</Link>
				</LiSub>
				<LiSub>
					<Link to="/summer/jeans-pants" style={{ textDecoration: "none" }}>
						<Text> Jeans & Pants </Text>
					</Link>
				</LiSub>
				<LiSub>
					<Link to="/summer/swim-trunks" style={{ textDecoration: "none" }}>
						{" "}
						<Text> Swim Trunks</Text>{" "}
					</Link>
				</LiSub>
				<LiSub>
					<Link to="/summer/accesories" style={{ textDecoration: "none" }}>
						<Text>Accessories</Text>{" "}
					</Link>
				</LiSub>
				<LiTitle>Winter</LiTitle>
				<LiSub>
					<Link
						to="/winter/sweaters-jackets"
						style={{ textDecoration: "none" }}
					>
						{" "}
						<Text>Sweaters & jackets</Text>{" "}
					</Link>
				</LiSub>
				<LiSub>
					<Link to="/winter/hoodie " style={{ textDecoration: "none" }}>
						{" "}
						<Text>Hoodies </Text>{" "}
					</Link>
				</LiSub>
				<LiSub>
					<Link to="/winter/jeans-joggers" style={{ textDecoration: "none" }}>
						{" "}
						<Text>Jeans & Joggers </Text>{" "}
					</Link>
				</LiSub>
				<LiSub>
					<Link to="/winter/accesories" style={{ textDecoration: "none" }}>
						{" "}
						<Text> Accessories</Text>{" "}
					</Link>
				</LiSub>
			</ul>
		</WrapCatalog>
	);
};

export default Catalogue;
