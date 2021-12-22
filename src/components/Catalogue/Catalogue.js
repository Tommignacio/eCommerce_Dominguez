import React from "react";
import { Link } from "react-router-dom";
import { WrapCatalog } from "./styledCatalogue";

const Catalogue = () => {
	return (
		<WrapCatalog>
			<ul>
				<li>
					<a> Summer </a>
				</li>
				<li>
					<a> T-shrirts & Shrirts</a>
				</li>
				<li>
					<a> Jeans & Pants </a>
				</li>
				<li>
					<a> Swim Trunks </a>
				</li>
				<li>
					<a> Accessories </a>
				</li>
				<li>
					<a> Winter </a>
				</li>
				<li>
					<a> T-shrirts & jackets </a>
				</li>
				<li>
					<a> Jeans & Pants </a>
				</li>
				<li>
					<a> Accessories </a>
				</li>
			</ul>
		</WrapCatalog>
	);
};

export default Catalogue;
